// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    // Structure to represent a candidate
    struct Candidate {
        uint candidateId;
        string party;
        uint constituencyId;
        uint voteCount;
    }

    bool electionOn = false; // Boolean value to check if an election is in progress
    uint electionId;

    string[] allVoters; // List of all the voter IDs in an election

    mapping(uint => Candidate[]) public electionCandidates; // Mapping of election ID to candidates in that election
    mapping(string => bool) public voters; // Mapping of voter ID to boolean indicating whether the voter has voted

    event VoteCasted(string indexed _voter, uint _candidateId); // Event to emit when a vote is casted
    event ElectionEnded(uint _electionId, uint _constituencyId); // Event to emit when an election ends

    // Function to start a new Election
    function startElection() public {
        require(!electionOn, "An election is already in progress!");
        require(electionCandidates[electionId].length > 1, "No candidates present for election!");

        allVoters = new string[](0);
        electionOn = true;
    }

    // Function to add a candidate in an election
    function addCandidate(
        string memory _party,
        uint _constituencyId
    )
        public
    {
        require(!electionOn, "An election is already in progress!");
        electionCandidates[electionId].push(Candidate(electionCandidates[electionId].length, _party, _constituencyId, 0));
    }

    // Function to cast vote
    function castVote(
        string memory _voterId,
        uint _candidateId,
        uint _constituencyId
    )
        public
    {
        require(electionOn, "No election is in progress!");
        require(!voters[_voterId], "You have already voted!");
        require(_candidateId < electionCandidates[electionId].length && _candidateId >= 0, "Not a valid candidate!");
        require(electionCandidates[electionId][_candidateId].constituencyId == _constituencyId, "You cannot vote from other constituency!");
        
        electionCandidates[electionId][_candidateId].voteCount++;
        voters[_voterId] = true;
        allVoters.push(_voterId);

        emit VoteCasted(_voterId, _candidateId);
    }


    // Function to end an election
    function endElection(uint _constituencyId) public {
        require(electionOn, "No election is in progress!");
        electionOn = false;
        electionId++;

        for(uint i=0; i<allVoters.length; i++){ // Resetting all voters voting boolean to false
            voters[allVoters[i]] = false;
        }

        emit ElectionEnded(electionId - 1, _constituencyId);
    }

    // Function to fetch result of a particular election of a particular constituency
    function getResult(
        uint _electionId,
        uint _constituencyId
    ) public view returns (Candidate[] memory) { 
        require(_electionId < electionId, "Invalid election ID!");
        
        Candidate[] memory result = electionCandidates[_electionId];
        uint size = 0;
        for(uint i = 0; i < result.length; i++){
            if(result[i].constituencyId == _constituencyId)
                size++;
        }

        Candidate[] memory constituencyResult = new Candidate[](size);
        uint idx = 0;
        for(uint i = 0; i < result.length; i++){
            if(result[i].constituencyId == _constituencyId){
                constituencyResult[idx] = result[i];
                idx++;
            }
        }

        return constituencyResult;
    }

    // Function to get Candidate details of ongoing election
    function getCandidateDetails(
        uint _electionId,
        uint _constituencyId
    ) public view returns (Candidate[] memory) {
        require(_electionId == electionId && electionOn, "No election is in progress!");

        Candidate[] memory result = electionCandidates[electionId];
        uint size = 0;
        for(uint i = 0; i < result.length; i++){
            if(result[i].constituencyId == _constituencyId)
                size++;
        }

        Candidate[] memory candidateDetails = new Candidate[](size);
        uint idx = 0;
        for(uint i = 0; i < result.length; i++){
            if(result[i].constituencyId == _constituencyId){
                candidateDetails[idx] = result[i];
                candidateDetails[idx].voteCount = 0;
                idx++;
            }
        }

        return candidateDetails;
    }

    // Function to check if the election is in progress
    function isElectionInProgress(uint _electionId) public view returns (bool) {
        require(_electionId <= electionId, "Invalid election ID!");

        return _electionId == electionId && electionOn;
    }
}
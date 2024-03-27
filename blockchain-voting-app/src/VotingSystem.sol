// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    uint private totalCandidates;

    // Structure to represent an election
    struct Election {
        uint id;
        string name;
    }

    // Structure to represent a candidate
    struct Candidate {
        uint id;
        string name;
        string party;
        uint constituency;
        uint voteCount;
    }

    mapping(uint => Election) public elections; // Mapping of election ID to election struct
    mapping(uint => Candidate) public candidates; // Mapping of candidate ID to Candidate struct
    mapping(string => bool) public voters; // Mapping of voter ID to boolean indicating whether the voter has voted
    mapping(uint => Candidate[]) public constituencyCandidates; // Mapping of constituency to candidates
     
    event VoteCasted(string indexed _voter, uint _candidateId); // Event to emit when a vote is casted
    event ElectionEnded(uint _electionId); // Event to emit when an election ends

    // Function to start a new election
    function startElection(
        uint _electionId,
        string memory _electionName
    )
        public
    {
        elections[_electionId] = Election(_electionId, _electionName);
    }

    // Function to add a new candidate
    function addCandidate(
        string memory _name, 
        string memory _party,
        uint _constituency
    )
        public
    {
        candidates[totalCandidates] = Candidate(totalCandidates, _name, _party, _constituency, 0);    
        constituencyCandidates[_constituency].push(candidates[totalCandidates]);
        totalCandidates++;
    }

    // Function to cast a vote
    function vote(
        string memory _voterId,
        uint _candidateId,
        uint _constituency
    )
        public
    {
        require(!voters[_voterId], "You have already voted!");
        require(_candidateId < totalCandidates && _candidateId >= 0, "Invalid candidate ID");

        candidates[_candidateId].voteCount++;
        voters[_voterId] = true;
        constituencyCandidates[_constituency][_candidateId].voteCount++;

        emit VoteCasted(_voterId, _candidateId);
    }

    // Function to return the total result or
    // details of all the candidates of the constituency
    function getCandidateDetails(uint _constituency) public view returns (Candidate[] memory) {
        return constituencyCandidates[_constituency];
    }
}
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./vote.css";

const Vote = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/candidates");
  }, [navigate]);
  return (
    <div className="desktop-6">
      <div className="desktop-6-child" />
      <div className="desktop-6-item" />
      <div className="desktop-6-inner" />
      <div className="block-group">
        <b className="block1">Block</b>
        <b className="vote2">Vote</b>
      </div>
      <b className="hello-voters-name">{`Hello, <Voter’s Name>!`}</b>
      <b className="election-name3">Election Name</b>
      <div className="group-parent4">
        <div className="rectangle-wrapper2">
          <div className="group-child14" />
        </div>
        <b className="please-click-on">Please click on vote to vote</b>
        <div className="fluentlive-20-filled-parent1">
          <img
            className="fluentlive-20-filled-icon3"
            alt=""
            src="/fluentlive20filled.svg"
          />
          <b className="live1">Live</b>
        </div>
      </div>
    </div>
  );
};

export default Vote;

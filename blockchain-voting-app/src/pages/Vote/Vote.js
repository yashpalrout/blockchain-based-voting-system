import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./vote.css";

const Vote = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/");
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
      {/* <div className="rectangle-parent5">
        <div className="group-child13" />
        <div className="done">Done</div>
      </div> */}
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
        <img
          className="px-bharatiya-janata-party-logo-icon3"
          alt=""
          src="/581pxbharatiya-janata-party-logo-1@2x.png"
        />
        <img
          className="aam-aadmi-party-logo-english-icon3"
          alt=""
          src="/aam-aadmi-party-logo-english-1@2x.png"
        />
        <img
          className="indian-national-congress-hand-icon3"
          alt=""
          src="/indian-national-congress-hand-logo-1@2x.png"
        />
        <img
          className="px-nota-option-logo-3x4-1-icon3"
          alt=""
          src="/449pxnota-option-logo-3x4-1@2x.png"
        />
      </div>
      <img className="pngegg-1-icon" alt="" src="/pngegg-1@2x.png" />
      <img
        className="bsp-logo-450ec6a522-seeklogo-1-icon"
        alt=""
        src="/bsplogo450ec6a522seeklogo-1@2x.png"
      />
      <div className="group-parent5" onClick={onGroupContainer3Click}>
        <div className="rectangle-wrapper3">
          <div className="group-child15" />
        </div>
        <div className="vote3">Vote</div>
      </div>
      <div className="group-parent6" onClick={onGroupContainer3Click}>
        <div className="rectangle-wrapper3">
          <div className="group-child16" />
        </div>
        <div className="vote3">Vote</div>
      </div>
      <div className="group-parent7" onClick={onGroupContainer3Click}>
        <div className="rectangle-wrapper3">
          <div className="group-child16" />
        </div>
        <div className="vote3">Vote</div>
      </div>
      <div className="group-parent8" onClick={onGroupContainer3Click}>
        <div className="rectangle-wrapper3">
          <div className="group-child16" />
        </div>
        <div className="vote3">Vote</div>
      </div>
      <div className="group-parent9" onClick={onGroupContainer3Click}>
        <div className="rectangle-wrapper3">
          <div className="group-child16" />
        </div>
        <div className="vote3">Vote</div>
      </div>
      <div className="group-parent10" onClick={onGroupContainer3Click}>
        <div className="rectangle-wrapper3">
          <div className="group-child16" />
        </div>
        <div className="vote3">Vote</div>
      </div>
    </div>
  );
};

export default Vote;

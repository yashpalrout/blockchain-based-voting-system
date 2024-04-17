import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./user-home.css";

const UserHome = () => {
  const navigate = useNavigate();

  const onVoteTextClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <div className="desktop-1-child" >
        <div className="click-for-more">Click for more</div>
      </div>
      <div className="desktop-1-item" />
      <div className="desktop-1-inner" />
      <div className="ellipse-div" />
      <div className="desktop-1-child1" />
      <div className="desktop-1-child2" />
      <div className="rectangle-div" />
      <div className="block-parent">
        <b className="block">Block</b>
        <b className="vote">Vote</b>
      </div>
      <div className="elections">Elections</div>
      <div className="vote1" onClick={onVoteTextClick}>
        Vote
      </div>
      <div className="results">Results</div>
      <div className="news">News</div>
      <div className="rectangle-group" onClick={onGroupContainer1Click}>
        <div className="group-child3" />
        <div className="sign-in1">Sign in</div>
      </div>
      <b className="ongoing-election">Ongoing Election</b>
      <b className="popular-news">Popular News</b>
      <div className="group-parent">
        <div className="rectangle-container">
          <div className="group-child4" />
          <img
            className="election-beautiful-4k-backgr"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent">Tatul Mandi’s recent reveal</div>
          <div className="in-todays-speech">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-2024">19 March 2024</div>
        </div>
        <div className="group-div">
          <div className="group-child4" />
          <img
            className="election-beautiful-4k-backgr"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent">Tatul Mandi’s recent reveal</div>
          <div className="in-todays-speech">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-2024">19 March 2024</div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child4" />
          <img
            className="election-beautiful-4k-backgr"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent">Tatul Mandi’s recent reveal</div>
          <div className="in-todays-speech">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-2024">19 March 2024</div>
        </div>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
      <b className="trending-world-news">Trending World News</b>
      <div className="group-container">
        <div className="rectangle-container">
          <div className="group-child4" />
          <img
            className="election-beautiful-4k-backgr"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent">Tatul Mandi’s recent reveal</div>
          <div className="in-todays-speech">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-2024">19 March 2024</div>
        </div>
        <div className="group-div">
          <div className="group-child4" />
          <img
            className="election-beautiful-4k-backgr"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent">Tatul Mandi’s recent reveal</div>
          <div className="in-todays-speech">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-2024">19 March 2024</div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child4" />
          <img
            className="election-beautiful-4k-backgr"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent">Tatul Mandi’s recent reveal</div>
          <div className="in-todays-speech">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-2024">19 March 2024</div>
        </div>
        <img className="vector-icon1" alt="" src="/vector.svg" />
      </div>
      <div className="group-parent1">
        <div className="rectangle-wrapper">
          <div className="group-child10" />
        </div>
        <b className="election-name">{`Election <name>`}</b>
        <div className="fluentlive-20-filled-parent">
          <img
            className="fluentlive-20-filled-icon"
            alt=""
            src="/fluentlive20filled.svg"
          />
          <b className="live">Live</b>
        </div>
        <img
          className="px-bharatiya-janata-party-logo-icon"
          alt=""
          src="/581pxbharatiya-janata-party-logo-1@2x.png"
        />
        <img
          className="aam-aadmi-party-logo-english-icon"
          alt=""
          src="/aam-aadmi-party-logo-english-1@2x.png"
        />
        <img
          className="indian-national-congress-hand-icon"
          alt=""
          src="/indian-national-congress-hand-logo-1@2x.png"
        />
        <img
          className="px-nota-option-logo-3x4-1-icon"
          alt=""
          src="/449pxnota-option-logo-3x4-1@2x.png"
        />
        <div className="div">
          <span>39</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div1">
          <span>10</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div2">
          <span>4</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div3">
          <span>01</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
      </div>
      <b className="previous-elections">Previous Elections</b>
      <div className="group-parent2">
        <div className="rectangle-wrapper">
          <div className="group-child10" />
        </div>
        <b className="election-name">{`Election <name>`}</b>
        <div className="fluentlive-20-filled-group">
          <img
            className="fluentlive-20-filled-icon"
            alt=""
            src="/fluentlive20filled.svg"
          />
          <b className="result">Result</b>
        </div>
        <img
          className="px-bharatiya-janata-party-logo-icon"
          alt=""
          src="/581pxbharatiya-janata-party-logo-1@2x.png"
        />
        <img
          className="aam-aadmi-party-logo-english-icon"
          alt=""
          src="/aam-aadmi-party-logo-english-1@2x.png"
        />
        <img
          className="indian-national-congress-hand-icon"
          alt=""
          src="/indian-national-congress-hand-logo-1@2x.png"
        />
        <img
          className="px-nota-option-logo-3x4-1-icon"
          alt=""
          src="/449pxnota-option-logo-3x4-1@2x.png"
        />
        <div className="div">
          <span>39</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div1">
          <span>10</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div2">
          <span>4</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div3">
          <span>01</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
      </div>
      <div className="group-parent3">
        <div className="rectangle-wrapper">
          <div className="group-child10" />
        </div>
        <b className="election-name">{`Election <name>`}</b>
        <div className="fluentlive-20-filled-group">
          <img
            className="fluentlive-20-filled-icon2"
            alt=""
            src="/fluentlive20filled.svg"
          />
          <b className="result1">Result</b>
        </div>
        <img
          className="px-bharatiya-janata-party-logo-icon"
          alt=""
          src="/581pxbharatiya-janata-party-logo-1@2x.png"
        />
        <img
          className="aam-aadmi-party-logo-english-icon"
          alt=""
          src="/aam-aadmi-party-logo-english-1@2x.png"
        />
        <img
          className="indian-national-congress-hand-icon"
          alt=""
          src="/indian-national-congress-hand-logo-1@2x.png"
        />
        <img
          className="px-nota-option-logo-3x4-1-icon"
          alt=""
          src="/449pxnota-option-logo-3x4-1@2x.png"
        />
        <div className="div">
          <span>39</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div1">
          <span>10</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div2">
          <span>4</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
        <div className="div3">
          <span>01</span>
          <span className="span">-</span>
          <span className="span1">54</span>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

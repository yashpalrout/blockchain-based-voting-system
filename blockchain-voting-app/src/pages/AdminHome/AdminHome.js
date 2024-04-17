import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./admin-home.css";

const AdminHome = () => {
  const navigate = useNavigate();

  const onVoteTextClick = useCallback(() => {
    navigate("/vote");
  }, [navigate]);

  const onMoreTextClick = useCallback(() => {
    navigate("/candidates");
  }, [navigate]);

  return (
    <div className="desktop-4">
      <div className="desktop-4-child" />
      <div className="desktop-4-item" />
      <div className="desktop-4-inner" />
      <div className="desktop-4-child1" />
      <div className="desktop-4-child2" />
      <div className="desktop-4-child3" />
      <div className="desktop-4-child4" />
      <div className="desktop-4-child5" />
      <div className="desktop-4-child6" />
      <div className="desktop-4-child7" />
      <div className="desktop-4-child8" />
      <div className="block-container">
        <b className="block2">Block</b>
        <b className="vote9">Vote</b>
      </div>
      <div className="elections1">Elections</div>
      <div className="vote10" onClick={onVoteTextClick}>
        Vote
      </div>
      <div className="about">About</div>
      <div className="news1">News</div>
      <div className="rectangle-parent6">
        <div className="group-child21" />
        <div className="contact-us">Contact Us</div>
      </div>
      <b className="ongoing-election1">Ongoing Election</b>
      <b className="candidates">Candidates</b>
      <div className="desktop-4-inner1">
        <div className="rectangle-parent7">
          <div className="group-child22" />
          <b className="election-name4">{`Election <name>`}</b>
          <div className="fluentlive-20-filled-parent2">
            <img
              className="fluentlive-20-filled-icon4"
              alt=""
              src="/fluentlive20filled.svg"
            />
            <b className="live2">Live</b>
          </div>
          <img
            className="px-bharatiya-janata-party-logo-icon4"
            alt=""
            src="/581pxbharatiya-janata-party-logo-1@2x.png"
          />
          <img
            className="aam-aadmi-party-logo-english-icon4"
            alt=""
            src="/aam-aadmi-party-logo-english-1@2x.png"
          />
          <img
            className="indian-national-congress-hand-icon4"
            alt=""
            src="/indian-national-congress-hand-logo-1@2x.png"
          />
          <img
            className="px-nota-option-logo-3x4-1-icon4"
            alt=""
            src="/449pxnota-option-logo-3x4-1@2x.png"
          />
          <div className="div12">
            <span>39</span>
            <span className="span24">-</span>
            <span className="span25">54</span>
          </div>
          <div className="div13">
            <span>10</span>
            <span className="span24">-</span>
            <span className="span25">54</span>
          </div>
          <div className="div14">
            <span>4</span>
            <span className="span24">-</span>
            <span className="span25">54</span>
          </div>
          <div className="div15">
            <span>01</span>
            <span className="span24">-</span>
            <span className="span25">54</span>
          </div>
        </div>
      </div>
      <div className="div16">+</div>
      <div className="start-new">Start new</div>
      <div className="rectangle-parent8">
        <div className="group-child23" />
        <div className="new-election-details">New Election Details</div>
        <div className="start-schedule-parent">
          <div className="start-schedule">Start / Schedule</div>
          <div className="group-child24" />
        </div>
        <div className="group-child25" />
        <div className="group-child26" />
        <div className="group-child27" />
        <div className="group-child28" />
        <div className="official-something-no">Official something no.</div>
        <div className="location">Location</div>
        <div className="from">From</div>
        <div className="to">To</div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-child22" />
        <div className="politician-indian-high-quali-parent">
          <img
            className="politician-indian-high-quali"
            alt=""
            src="/politician-indian--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="surendra-modi-bjp-container">
            <p className="surendra-modi">Surendra Modi</p>
            <p className="bjp">BJP</p>
          </div>
        </div>
        <div className="politician-indian-female-hig-parent">
          <img
            className="politician-indian-female-hig"
            alt=""
            src="/politician-indian-female--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="surendra-modi-bjp-container">
            <p className="surendra-modi">Jasdeep Kaur</p>
            <p className="bjp">AAP</p>
          </div>
        </div>
        <div className="politician-indian-different-re-parent">
          <img
            className="politician-indian-female-hig"
            alt=""
            src="/politician-indian-different-religion--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="surendra-modi-bjp-container">
            <p className="surendra-modi">Rajeev Agrawal</p>
            <p className="bjp">Congress</p>
          </div>
        </div>
        <div className="politician-indian-high-qu-parent">
          <img
            className="politician-indian-high-quali"
            alt=""
            src="/politician-indian---high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="surendra-modi-bjp-container">
            <p className="surendra-modi">Bhalu Pratap</p>
            <p className="bjp">ATP</p>
          </div>
        </div>
        <b className="election-name5">Election name</b>
        <div className="consti-1-parent">
          <div className="consti-1">Consti. 1</div>
          <div className="group-child30" />
          <img className="vector-icon2" alt="" src="/vector.svg" />
        </div>
        <div className="more">More</div>
      </div>
      <div className="rectangle-parent10">
        <div className="group-child22" />
        <b className="election-name5">Election name</b>
        <div className="politician-indian-high-quali-parent">
          <img
            className="politician-indian-female-hig"
            alt=""
            src="/politician-indian---high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="surendra-modi-bjp-container">
            <p className="surendra-modi">Shaveen Deo</p>
            <p className="bjp">BJD</p>
          </div>
        </div>
        <div className="politician-indian-female-hig-parent">
          <div className="surendra-modi-bjp-container">
            <p className="surendra-modi">Sandeep Sinha</p>
            <p className="bjp">Congress</p>
          </div>
          <img
            className="politician-indian-female-hig"
            alt=""
            src="/politician-indian--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
        </div>
        <div className="yogi-ashirvad-bjp-wrapper">
          <div className="yogi-ashirvad-bjp-container">
            <p className="surendra-modi">Yogi Ashirvad</p>
            <p className="bjp">BJP</p>
          </div>
        </div>
        <div className="sasmita-rani-aap-wrapper">
          <div className="yogi-ashirvad-bjp-container">
            <p className="surendra-modi">Sasmita Rani</p>
            <p className="bjp">AAP</p>
          </div>
        </div>
        <div className="consti-1-group">
          <div className="consti-1">Consti. 1</div>
          <div className="group-child30" />
          <img className="vector-icon3" alt="" src="/vector.svg" />
        </div>
        <div className="more1" onClick={onMoreTextClick}>
          More
        </div>
      </div>
      <div className="div17">+</div>
      <div className="add-new">Add new</div>
      <div className="rectangle-parent11">
        <div className="group-child23" />
        <div className="new-candidate-details">New Candidate Details</div>
        <div className="upload-parent">
          <div className="upload">Upload</div>
          <div className="group-child24" />
        </div>
        <div className="line-parent">
          <div className="group-child35" />
          <div className="group-child36" />
          <div className="group-child37" />
          <div className="party">Party</div>
          <div className="candidates-name">Candidate’s Name</div>
          <div className="constituency-id">Constituency ID</div>
        </div>
      </div>
      <img
        className="politician-indian-different-re1"
        alt=""
        src="/politician-indian-different-religion--high-quality-photography-portrait-of-a-person-centered@2x.png"
      />
      <img
        className="politician-indian-female-hig1"
        alt=""
        src="/politician-indian-female--high-quality-photography-portrait-of-a-person-centered@2x.png"
      />
      <div className="desktop-4-child9" />
      <div className="add-image-of">Add image of the candidate</div>
      <img className="mdiimage-add-icon" alt="" src="/mdiimageadd.svg" />
      <div className="desktop-4-child10">
        <div className="click-for-more1">Click for more</div>
      </div>
      {/* <div className="click-for-more1">Click for more</div> */}
      <b className="popular-news1">Popular News</b>
      <div className="group-parent11">
        <div className="rectangle-parent12">
          <div className="group-child38" />
          <img
            className="election-beautiful-4k-backgr6"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent6">
            Tatul Mandi’s recent reveal
          </div>
          <div className="in-todays-speech6">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-20246">19 March 2024</div>
        </div>
        <div className="rectangle-parent13">
          <div className="group-child38" />
          <img
            className="election-beautiful-4k-backgr6"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent6">
            Tatul Mandi’s recent reveal
          </div>
          <div className="in-todays-speech6">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-20246">19 March 2024</div>
        </div>
        <div className="rectangle-parent14">
          <div className="group-child38" />
          <img
            className="election-beautiful-4k-backgr6"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent6">
            Tatul Mandi’s recent reveal
          </div>
          <div className="in-todays-speech6">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-20246">19 March 2024</div>
        </div>
        <img className="vector-icon4" alt="" src="/vector.svg" />
      </div>
      <b className="trending-world-news1">Trending World News</b>
      <div className="group-parent12">
        <div className="rectangle-parent12">
          <div className="group-child38" />
          <img
            className="election-beautiful-4k-backgr6"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent6">
            Tatul Mandi’s recent reveal
          </div>
          <div className="in-todays-speech6">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-20246">19 March 2024</div>
        </div>
        <div className="rectangle-parent13">
          <div className="group-child38" />
          <img
            className="election-beautiful-4k-backgr6"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent6">
            Tatul Mandi’s recent reveal
          </div>
          <div className="in-todays-speech6">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-20246">19 March 2024</div>
        </div>
        <div className="rectangle-parent14">
          <div className="group-child38" />
          <img
            className="election-beautiful-4k-backgr6"
            alt=""
            src="/election--beautiful-4k-background-image-hyperrealistic@2x.png"
          />
          <div className="tatul-mandis-recent6">
            Tatul Mandi’s recent reveal
          </div>
          <div className="in-todays-speech6">
            In today’s speech Tatul Mandi stated that govt. might introduce new
            tax system. People of Selangana in shock, some already started
            rallies against it and soon a curfew may be imposed .....
          </div>
          <div className="march-20246">19 March 2024</div>
        </div>
        <img className="vector-icon5" alt="" src="/vector.svg" />
      </div>
      <b className="previous-elections1">Previous Elections</b>
      <div className="group-parent13">
        <div className="rectangle-parent7">
          <div className="group-child44" />
        </div>
        <b className="election-name4">{`Election <name>`}</b>
        <div className="fluentlive-20-filled-parent3">
          <img
            className="fluentlive-20-filled-icon4"
            alt=""
            src="/fluentlive20filled.svg"
          />
          <b className="result2">Result</b>
        </div>
        <img
          className="px-bharatiya-janata-party-logo-icon4"
          alt=""
          src="/581pxbharatiya-janata-party-logo-1@2x.png"
        />
        <img
          className="aam-aadmi-party-logo-english-icon4"
          alt=""
          src="/aam-aadmi-party-logo-english-1@2x.png"
        />
        <img
          className="indian-national-congress-hand-icon4"
          alt=""
          src="/indian-national-congress-hand-logo-1@2x.png"
        />
        <img
          className="px-nota-option-logo-3x4-1-icon4"
          alt=""
          src="/449pxnota-option-logo-3x4-1@2x.png"
        />
        <div className="div12">
          <span>39</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
        <div className="div13">
          <span>10</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
        <div className="div14">
          <span>4</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
        <div className="div15">
          <span>01</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
      </div>
      <div className="group-parent14">
        <div className="rectangle-parent7">
          <div className="group-child44" />
        </div>
        <b className="election-name4">{`Election <name>`}</b>
        <div className="fluentlive-20-filled-parent3">
          <img
            className="fluentlive-20-filled-icon6"
            alt=""
            src="/fluentlive20filled.svg"
          />
          <b className="result3">Result</b>
        </div>
        <img
          className="px-bharatiya-janata-party-logo-icon4"
          alt=""
          src="/581pxbharatiya-janata-party-logo-1@2x.png"
        />
        <img
          className="aam-aadmi-party-logo-english-icon4"
          alt=""
          src="/aam-aadmi-party-logo-english-1@2x.png"
        />
        <img
          className="indian-national-congress-hand-icon4"
          alt=""
          src="/indian-national-congress-hand-logo-1@2x.png"
        />
        <img
          className="px-nota-option-logo-3x4-1-icon4"
          alt=""
          src="/449pxnota-option-logo-3x4-1@2x.png"
        />
        <div className="div12">
          <span>39</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
        <div className="div13">
          <span>10</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
        <div className="div14">
          <span>4</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
        <div className="div15">
          <span>01</span>
          <span className="span24">-</span>
          <span className="span25">54</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

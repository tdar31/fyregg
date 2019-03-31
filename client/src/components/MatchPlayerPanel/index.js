import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./style.css";

function MatchPlayerPanel({
  win,
  championId,
  championName,
  playerUsername,
  playerLevel,
  playerPage,
  spell1Id,
  spell2Id,
  perkPrimaryStyle,
  perkSubStyle,
  item0,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  cs,
  csPM,
  kda,
  kills,
  assists,
  deaths,
  spell1Link,
  spell2Link
}) {
  return (
    <div>
      <ReactTooltip place="top" type="dark" effect="solid" />
      <div className="MatchPlayerPanel">
        <img className="playerIcon" src={championId} />

        <Link to={playerPage}>
          <a className="playerUsername">{playerUsername}</a>
        </Link>

        <p className="playerLevel">Level: {playerLevel}</p>

        {/* <p className="playerDamage">Damage</p>
        <p className="playerWard">Ward</p> */}
        <p className="playerCS">
          {cs} ({csPM}) CS
        </p>
        <p className="playerKDA">KDA: {kda}</p>
        <div className="helper iconContain">
          <Link to={spell1Link}>
            <img className="helper spell1Icon" src={spell1Id} />
          </Link>
          {/* <Link to={spell2Link}> */}
            <img className="helper spell2Icon" src={spell2Id} />
          {/* </Link> */}
          <img className="helper perkPrimaryIcon" src={perkPrimaryStyle} />
          <img className="helper perkSubIcon" src={perkSubStyle} />
          <img className="helper playerItem0" src={item0} />
          <img className="helper playerItem1" src={item1} />
          <img className="helper playerItem2" src={item2} />
          <img className="helper playerItem3" src={item3} />
          <img className="helper playerItem4" src={item4} />
          <img className="helper playerItem5" src={item5} />
          <img className="helper playerItem6" src={item6} />
        </div>
      </div>
    </div>
  );
}

export default MatchPlayerPanel;

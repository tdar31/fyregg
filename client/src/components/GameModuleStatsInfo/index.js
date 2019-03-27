import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./style.css";

function GameModuleStatsInfo({
  kills,
  deaths,
  assists,
  champLevel,
  goldEarned,
  goldSpent,
  perkPrimaryStyle,
  perkSubStyle,
  totalMinionsKilled,
  creepScore,
  creepScorePerMin,
  KDA,
  perkPrimaryStyleName,
  perkSubStyleName,
  perkPrimaryLink,
  perkSubLink
}) {
  return (
    <div className="GameModuleStatsInfo">
      <ReactTooltip place="top" type="dark" effect="solid" />
      <Link to={perkPrimaryLink}>
        <img
          data-tip={perkPrimaryStyleName}
          className="perkPrimaryStyle"
          src={perkPrimaryStyle}
        />
      </Link>
      <Link to={perkSubLink}>
        <img
          data-tip={perkSubStyleName}
          className="perkSubStyle"
          src={perkSubStyle}
        />
      </Link>
      <div className="totalMinionsKilled">
        {creepScore} <span className="csPM">({creepScorePerMin})</span> CS
      </div>
      <div className="creepScore" />

      <div className="kills">
        {kills} /<span className="totalDeaths"> {deaths} </span>/ {assists}
      </div>
      <div className="KDA">KDA: {KDA}</div>
      <div className="champLevel" />
      <div className="goldEarned">
        {" "}
        Level: {champLevel} Gold: {goldEarned}
      </div>
    </div>
  );
}

export default GameModuleStatsInfo;

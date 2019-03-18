import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function GameModuleFullMatchInfo({ gameId }) {
  return (
    <div className="GameModuleFullMatchInfo">
      <Link to={gameId}>
        <a className="fullMatchText">
          View<br />Match Details
        </a>
      </Link>
    </div>
  );
}

export default GameModuleFullMatchInfo;

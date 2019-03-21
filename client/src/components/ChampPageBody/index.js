import React from "react";
import "./style.css";

function ChampPageBody({ ChampionName, ChampionTitle, championImage }) {
  return (
    <div className="classWrapper">
      <div className="bioCover"></div>
      <img className="champSplash" alt="img" src={championImage} />
      <p className="champTitle">
        {ChampionName}
        <br />
        {ChampionTitle}
      </p>
    </div>
  );
}

export default ChampPageBody;

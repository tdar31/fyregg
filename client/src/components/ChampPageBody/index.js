import React from "react";
import "./style.css";

function ChampPageBody({ championName, championTitle, championImage }) {
  return (
    <div className="classWrapper">
      <div className="bioCover"></div>
      <img className="champSplash" alt="img" src={championImage} />
      <p className="champTitle">
        {championName}
        <br />
        {championTitle}
      </p>
    </div>
  );
}

export default ChampPageBody;

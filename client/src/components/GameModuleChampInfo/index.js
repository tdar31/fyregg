import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./style.css";

function GameModuleChampInfo({
  championLink,
  champName,
  champIcon,
  spell1,
  spell2,
  spell1Name,
  spell2Name,
  spell1Link,
  spell2Link
}) {
  return (
    <div className="GameModuleChampInfo">
      <ReactTooltip place="top" type="dark" effect="solid" />
      <div className="champContainer">
        <Link to={championLink}>
          <img alt="img" className="champIcon" src={champIcon} />
        </Link>
        <Link to={spell1Link}>
          <img
            alt="img"
            className="spell1"
            data-tip={spell1Name}
            src={spell1}
          />
        </Link>
        <Link to={spell2Link}>
          <img
            alt="img"
            className="spell2"
            data-tip={spell2Name}
            src={spell2}
          />
        </Link>
      </div>
      <div className="champName">{champName}</div>
    </div>
  );
}

export default GameModuleChampInfo;

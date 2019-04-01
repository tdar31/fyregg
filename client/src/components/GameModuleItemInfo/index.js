import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./style.css";

function GameModuleItemInfo({
  item0,
  item0Name,
  item0Link,
  item1,
  item1Name,
  item1Link,
  item2,
  item2Name,
  item2Link,
  item3,
  item3Name,
  item3Link,
  item4,
  item4Name,
  item4Link,
  item5,
  item5Name,
  item5Link,
  item6,
  item6Name,
  item6Link
}) {
  return (
    <div className="GameModuleItemInfo">
      <div className="itemContainer">
        <div className="topContainer">
          <ReactTooltip place="top" type="dark" effect="solid" />
          <Link to={item0Link}>
            <img data-tip={item0Name} alt="img" className="item0" src={item0} />
          </Link>
          <Link to={item1Link}>
            <img data-tip={item1Name} alt="img" className="item1" src={item1} />
          </Link>
          <Link to={item2Link}>
            <img data-tip={item2Name} alt="img" className="item2" src={item2} />
          </Link>
        </div>
        <div className="bottomContainer">
          <Link to={item3Link}>
            <img data-tip={item3Name} alt="img" className="item3" src={item3} />
          </Link>
          <Link to={item4Link}>
            <img data-tip={item4Name} alt="img" className="item4" src={item4} />
          </Link>
          <Link to={item5Link}>
            <img data-tip={item5Name} alt="img" className="item5" src={item5} />
          </Link>
        </div>
      </div>
      <Link to={item6Link}>
        <img data-tip={item6Name} alt="img" className="item6" src={item6} />
      </Link>
    </div>
  );
}

export default GameModuleItemInfo;

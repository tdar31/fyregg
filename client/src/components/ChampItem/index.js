import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ChampItem({ championId, championIdRAW, linkToPage }) {
  return (
    <div className="champions">
      <Link to={linkToPage}>
        <img
          className="champIcon champIconPage"
          alt="img"
          src={championId}
        />
      </Link>
      <div className="ChampItem">{championIdRAW}</div>
    </div>
  );
}

export default ChampItem;

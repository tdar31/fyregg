import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ChampItem({ championId, championIdRAW }) {
  return (
    <div className="champions">
      <img alt="img" src={championId} />
      <div className="ChampItem">{championIdRAW}</div>
    </div>
  );
}

export default ChampItem;

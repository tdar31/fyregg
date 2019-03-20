import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ChampItem({ championId, championIdRAW, onClick }) {
  return (
    <div className="champions">
      <img className="champIcon champIconPage" alt="img" src={championId} onClick={onClick}/>
      <div className="ChampItem">{championIdRAW}</div>
    </div>
  );
}

export default ChampItem;

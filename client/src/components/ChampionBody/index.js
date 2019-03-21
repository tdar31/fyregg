import React from "react";
import "./style.css";

function ChampionBody({ children }) {
  return (
    <div className="hero-body">
      <div className="container champBodyPage">
        {children}
      </div>
    </div>
  );
}

export default ChampionBody;

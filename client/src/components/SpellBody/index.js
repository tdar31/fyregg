import React from "react";
import "./style.css";

function SpellBody({ children }) {
  return (
    <div className="hero-body">
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default SpellBody;

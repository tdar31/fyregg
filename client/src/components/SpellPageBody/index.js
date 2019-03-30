import React from "react";
import "./style.css";

function SpellPageBody({ spellImage, spellDesc }) {
  return (
    <div className="spellBodyWrapper">
      <img className="spellImg" alt="img" src={spellImage} />
      <div className="spellBodyText">
        {spellDesc}
      </div>
    </div>
  );
}

export default SpellPageBody;

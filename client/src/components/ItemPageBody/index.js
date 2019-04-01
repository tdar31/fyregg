import React from "react";
import "./style.css";

function ItemPageBody({ itemImage, itemDesc }) {
  return (
    <div className="spellBodyWrapper">
      <img className="spellImg" alt="img" src={itemImage} />
      <div className="spellBodyText">
      {itemDesc}
      </div>
    </div>
  );
}

export default ItemPageBody;

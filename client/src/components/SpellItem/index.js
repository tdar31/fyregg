import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SpellItem({ linkToPage, ItemId, ItemIdRAW }) {
  return (
    <div className="spells">
      <Link to={linkToPage}>
        <img className="spellIcon spellIconPage" alt="img" src={ItemId} />
      </Link>
      <div className="spellItemText">{ItemIdRAW}</div>
    </div>
  );
}

export default SpellItem;
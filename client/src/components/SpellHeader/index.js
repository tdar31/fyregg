import React from "react";
import "./style.css";

function SpellHeader({ spellId }) {
  return (
    <div className="box pageBuffer">
      <article className="media">
        <div className="media-content userNotFoundContent">
          <p className="userNotFoundText">
            {spellId}
            <br />
          </p>
        </div>
      </article>
    </div>
  );
}

export default SpellHeader;

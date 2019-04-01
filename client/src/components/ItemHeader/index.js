import React from "react";
import "./style.css";

function ItemHeader({ itemId }) {
  return (
    <div className="box pageBuffer">
      <article className="media">
        <div className="media-content userNotFoundContent">
          <p className="userNotFoundText">
            {itemId}
            <br />
          </p>
        </div>
      </article>
    </div>
  );
}

export default ItemHeader;

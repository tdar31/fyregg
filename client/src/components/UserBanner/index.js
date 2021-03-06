import React, { Component, Children } from "react";
import "./style.css";

function UserBanner({ children }) {
  return (
    <div>
      <div className="box pageBuffer">
        <article className="media">{children}</article>
      </div>
    </div>
  );
}

export default UserBanner;

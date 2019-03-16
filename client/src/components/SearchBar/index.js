import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SearchBar({ onClick, value, onChange, queryUser, region }) {
  return (
    <div className="field has-addons has-addons-centered">
      <p className="control ">
        <input
          className="input searchBarInput"
          type="text"
          placeholder="Search by Summoner Name"
          value={value}
          onChange={onChange}
        />
      </p>
      {/* FIGURE OUT HOW TO KNOW WHICH OPTION IS SELECTED AND RETURN TO FRONT END FOR QUERY */}
      {/* <p className="control">
        <span className="select">
          <select>
            <option>NA</option>
            <option>EUNE</option>
            <option>LAN</option>
            <option>EUW</option>
            <option>KR</option>
            <option>OCE</option>
            <option>RU</option>
            <option>JP</option>
            <option>BR</option>
            <option>TR</option>
            <option>LAS</option>
          </select>
        </span>
      </p> */}
      {/* <Link to={`/summoner/${queryUser}/NA`}>
        <p className="button is-dark">Search</p>
      </Link> */}
      <p className="control">
        <button className="button is-success" onClick={onClick}>
          OldButton
        </button>
      </p>
    </div>
  );
}

export default SearchBar;

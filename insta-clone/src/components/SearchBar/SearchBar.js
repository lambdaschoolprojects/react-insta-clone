import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TiCompass } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

// Styles
import "./SearchBar.scss";

const SearchBar = ({ onInputChange }) => {
  return (
    <div className={"header"}>
      <div className={"leftSide"}>
        <FaInstagram className={"icon"} size={"3em"} />
        <h1>Instaclone</h1>
      </div>
      <input
        id="searchTerm"
        type={"text"}
        placeholder={"\u2315 Search"}
        onChange={event => onInputChange(event)}
      />
      <div className={"interactions"}>
        <TiCompass className={"interaction"} size={"2em"} color={"dimgrey"} />
        <FiHeart className={"interaction"} size={"1.8em"} color={"dimgrey"} />
        <MdPersonOutline
          className={"interaction"}
          size={"2em"}
          color={"dimgrey"}
        />
      </div>
    </div>
  );
};

export default SearchBar;

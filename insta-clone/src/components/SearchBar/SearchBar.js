import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TiCompass } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import PropTypes from "prop-types";

// Styles
import "./SearchBar.scss";

const SearchBar = ({ onInputChange, onSearch, searchTerm }) => {
  return (
    <div className={"header"}>
      <div className={"leftSide"}>
        <FaInstagram className={"icon"} size={"3em"} />
        <h1>Instaclone</h1>
      </div>
      <form onSubmit={event => onSearch(event)}>
        <input
          id="searchTerm"
          type={"text"}
          placeholder={"\u2315 Search"}
          value={searchTerm}
          onChange={event => onInputChange(event)}
        />
      </form>
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

SearchBar.propTypes = {
  onInputChange: PropTypes.func,
  onSearch: PropTypes.func,
  searchTerm: PropTypes.string
};

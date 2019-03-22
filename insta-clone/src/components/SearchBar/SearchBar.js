import React from "react";
import { FaInstagram } from "react-icons/fa";
import { TiCompass } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchBar = ({ onInputChange, onSearch, searchTerm }) => {
  return (
    <SearchBarWrapper>
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
    </SearchBarWrapper>
  );
};

// Styles
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-left: 25px;

  h1 {
    font-family: "Pacifico", cursive;
    margin-left: 10px;
    font-size: 24px;
  }

  input {
    height: 20px;
    width: 200px;
    border-radius: 10%;
    padding-left: 10px;
    text-align: center;
  }
  .interactions {
    .interaction {
      margin: 8px;
    }
  }

  .leftSide {
    display: flex;
    align-items: center;
    .icon {
      border-right: 1px solid black;
      padding-right: 10px;
    }
  }
`;

export default SearchBar;

SearchBar.propTypes = {
  onInputChange: PropTypes.func,
  onSearch: PropTypes.func,
  searchTerm: PropTypes.string
};

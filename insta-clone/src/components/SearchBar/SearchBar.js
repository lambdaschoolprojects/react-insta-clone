import React, { Component } from 'react';

const SearchBar = ({ onInputChange }) => {

        return (
            <input
                type={"text"}
                placeholder={"Search"}
                onChange={event => onInputChange(event)}
            />
        )

}

export default SearchBar;
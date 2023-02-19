import React from "react";

import "./SearchBar.scss";

const SearchBar = ({ searchValue, onSearchValueChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onSearchValueChange(value);
    // setSearchValue(value);
  };

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for movies..."
      ></input>
    </div>
  );
};

export default SearchBar;

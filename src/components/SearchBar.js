import React from "react";

const SearchBar = ({ value }) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        className="search-input"
        value={value}
        onChange={handleChange}
        placeholder="Search for movies..."
      ></input>
    </div>
  );
};

export default SearchBar;

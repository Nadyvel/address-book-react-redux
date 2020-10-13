import React from "react";
import "../../scss/SearchBar.scss";

const SearchBar = ({ setSearch, searchVal }) => {
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      onChange={onChange}
      value={searchVal}
      className="search-bar"
      placeholder="Search"
    />
  );
};

export default SearchBar;

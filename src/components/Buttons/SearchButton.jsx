import React from "react";

const SearchButton = ({ type, className, handleSearch }) => {
  return (
    <button
      onClick={handleSearch}
      className={`${className} uppercase transition-all `}
    >
      SEARCH {type}
    </button>
  );
};

export default SearchButton;

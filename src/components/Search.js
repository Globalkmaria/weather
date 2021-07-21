import React from 'react';
import { BsSearch } from 'react-icons/bs';
function Search() {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search City..."
      />
      <button className="search-icon">
        <BsSearch />
      </button>
    </div>
  );
}

export default Search;

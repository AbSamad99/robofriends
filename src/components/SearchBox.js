import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <input
      aria-label="Search Robots"
      className="pa2 ba b--green bg-lightest-blue ma2"
      type="search"
      placeholder="search robots"
      onChange={searchChange}
    />
  );
};

export default SearchBox;

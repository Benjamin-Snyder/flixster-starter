import React from 'react';
import './Filter.css';

function Filter({ onFilterChange }) {
  return (
    <div className="SortItems">
      <label htmlFor="Filter">Sort by</label>
      <select name="Filter" id="filterBox" onChange={onFilterChange}>
        <option value="A-Z">A-Z</option>
        <option value="Release Date">Release Date</option>
        <option value="Rating">Rating</option>
      </select>
    </div>
  );
}

export default Filter;

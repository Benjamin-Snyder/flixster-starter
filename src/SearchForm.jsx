import React from 'react';
import './SearchForm.css';

function SearchBar({ onSearchChange }) {
const handleInputChange = (event) => {
    onSearchChange(event.target.value);
};

return (
    <div className="searchBar">
    <input type="text" onChange={handleInputChange} />
    <button>Search</button>
    </div>
);
}

export default SearchBar;

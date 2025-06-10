import React from 'react';
import './Header.css';
import SearchBar from './SearchForm.jsx';
import Filter from './Filter.jsx';

function Header({ onFilterChange }) {
return (
    <div className="top">
    <div className="searchBar">
        <SearchBar />
    </div>
    <div className="headerWords">
        <h1>Flixster</h1>
    </div>
    <div className="FilterDropdown">
        <Filter onFilterChange={onFilterChange} />
    </div>
    </div>
);
}

export default Header;

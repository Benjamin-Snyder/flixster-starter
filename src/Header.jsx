import React from 'react';
import './Header.css';
import SearchBar from './SearchForm.jsx';
import Filter from './Filter.jsx';

function Header({ onFilterChange, onSearchChange }) {
return (
    <div className="top">

        <div className="leftSide">
            <div className="headerWords">
                <h1>Flixster</h1>

            </div>
            <div className="searchBar">
                <SearchBar onSearchChange={onSearchChange} />
            </div>
        </div>


        <div className="FilterDropdown">
            <Filter onFilterChange={onFilterChange} />
        </div>
    </div>
);
}

export default Header;

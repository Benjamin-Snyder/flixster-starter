import React from 'react';
import './Header.css';
import SearchBar from './SearchForm.jsx';
import Filter from './Filter.jsx';
/*
function Header() {




    return(
        <div class="top">
            <div class= "searchBar">
                <SearchBar />
            </div>
            <div className= "headerWords">
                <h1>Flixster</h1>
            </div>
            <div class="FilterDropdown">
                <Filter sortByRating={sortByRating} sortByReleaseDate={sortByReleaseDate} sortByTitle={sortByTitle} />
            </div>

        </div>
    )

}*/

function Header({ sortByRating, sortByReleaseDate, sortByTitle }) {
    return (
        <div className="top">
            <div className="searchBar">
                <SearchBar />
            </div>
            <div className="headerWords">
                <h1>Flixster</h1>
            </div>
            <div className="FilterDropdown">
                <Filter sortByRating={sortByRating} sortByReleaseDate={sortByReleaseDate} sortByTitle={sortByTitle} />
            </div>
        </div>
    );
}




export default Header;

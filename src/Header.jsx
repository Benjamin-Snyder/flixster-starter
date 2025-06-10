import React from 'react';
import './Header.css';
import SearchBar from './SearchForm.jsx';
import Filter from './Filter.jsx';

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
                <Filter />
            </div>

        </div>
    )

}



export default Header;

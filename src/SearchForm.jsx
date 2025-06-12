import React, { useState } from 'react';
import './SearchForm.css';

function SearchBar({ onSearchChange }) {
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
    setInputValue(event.target.value);
};

const handleSearchClick = () => { // Search via button click
    onSearchChange(inputValue);
};

const handleEnterKey = (event) => { // Search via enter key
    if (event.key === 'Enter') {
        onSearchChange(inputValue);
    }
}

const handleClearClick = () => {
    setInputValue(''); // Clear the input field
    onSearchChange(''); // Reset the search query
};

return (
    <div className="searchBar">
        <input type="text" placeholder="Movie" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey}/>
        <button className="buttonText" onClick={handleSearchClick}>Search</button>
        <button className="buttonText" onClick={handleClearClick}>Clear</button>
    </div>
);
}

export default SearchBar;

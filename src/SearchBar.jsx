import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
    const [inputValue, setInputValue] = useState('');
    /**
     * This function updates the input value when the user types in the input field.
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    const handleInputChange = (event) => { // Update the input value
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
        <div className="search-bar">
            <input type="text" placeholder="Search Movie" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey}/>
            <button className="button-text" onClick={handleSearchClick}>Search</button>
            <button className="button-text" onClick={handleClearClick}>Clear</button>
        </div>
    );
}

export default SearchBar;

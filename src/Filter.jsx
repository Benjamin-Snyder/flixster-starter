import React from 'react';
import './Filter.css';

function Filter({ sortByRating, sortByReleaseDate, sortByTitle }) {
    const handleSortChange = (event) => {
        const value = event.target.value;
        if (value === 'Rating') {
            sortByRating();
        } else if (value === 'Release Date') {
            sortByReleaseDate();
        } else if (value === 'A-Z') {
            sortByTitle();
        }
    };

    return (
        <div className="SortItems">
            <label htmlFor="Filter">Sort by</label>
            <select name="Filter" id="filterBox" onChange={handleSortChange}>
                <option value="A-Z">A-Z</option>
                <option value="Release Date">Release Date</option>
                <option value="Rating">Rating</option>
            </select>
        </div>
    );
}

export default Filter;

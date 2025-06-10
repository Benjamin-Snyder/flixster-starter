import React from 'react';
import './Filter.css'


function Filter(){

    return(

        <div className="SortItems">
            <label htmlFor="Filter">Sort by</label>
            <select name="Filter" id="filterBox">
                <option value="A-Z">A-Z</option>
                <option value="Release Date">Release Date</option>
                <option value="Rating">Rating</option>
            </select>
        </div>

    )
}


export default Filter;

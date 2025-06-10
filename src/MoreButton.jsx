import React from 'react';
import './MoreButton.css';
import MovieList from './MovieList';


function MoreButton({ filter, searchQuery, pageNumber }) {

    const newPage= ()=>{
        <MovieList filter={filter} searchQuery={searchQuery} pageNumber={pageNumber} />
    }

    return (
    <button onClick={newPage}>Load More</button>
);
}

export default MoreButton;

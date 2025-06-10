import { useState, useEffect } from 'react';
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';




const MovieList = ({ filter, searchQuery, pageNumber }) => {

    // const url = urlHalf + pageNumber;
    // console.log(url);
    const [movies, setMovies] = useState([]);
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`;

useEffect(() => {

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => setMovies(prevMovies => [...prevMovies, ...json.results]))
    .catch(err => console.error(err));
}, [pageNumber]);


const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (filter === 'A-Z') {
    return a.title.localeCompare(b.title);
    } else if (filter === 'Release Date') {
    return new Date(b.release_date) - new Date(a.release_date);
    } else if (filter === 'Rating') {
    return b.vote_average - a.vote_average;
    }
    return 0;
});

return (
    <div className="listOfMovies">
    {sortedMovies.map((movie) => (
        <MovieCard key={movie.id} name={movie.title} rating={movie.vote_average} img={movie.poster_path} />
    ))}
    </div>
);
};

MovieList.defaultProps = {
    filter: 'A-Z',
    searchQuery: '',
    pageNumber: 1,
    };

export default MovieList;

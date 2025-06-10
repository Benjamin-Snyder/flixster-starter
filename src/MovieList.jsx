import { useState, useEffect } from 'react';
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
method: 'GET',
headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY'
}
};

const MovieList = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => setMovies(json.results))
    .catch(err => console.error(err));
}, []);

return (
    <div className="listOfMovies">
    {movies.map((movie) => {
        return <MovieCard key={movie.id} name={movie.title} rating={movie.vote_average} img={movie.poster_path} />
    })}
    </div>
)
};

export default MovieList;

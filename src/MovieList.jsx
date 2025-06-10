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

const MovieList = ({ filter }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error(err));
  }, []);

  const sortedMovies = [...movies].sort((a, b) => {
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

export default MovieList;

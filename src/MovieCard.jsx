// MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
    return (
        <div className="movieBox" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;

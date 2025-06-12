
import React from 'react';
import './MovieCard.css';
import FavButton from './FavButton.jsx';
import SeenButton from './SeenButton.jsx';

const MovieCard = ({ movie, onClick, onFavoriteClick }) => {
    return (
    <div className="movieBox" onClick={onClick}>
        <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
        <div className="buttons">
        <FavButton onClick={() => onFavoriteClick(movie)} />
        <SeenButton />
        </div>
        <p>Rating: {movie.vote_average}</p>
    </div>
    );
};


export default MovieCard;

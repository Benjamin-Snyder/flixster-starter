import React from 'react';
import './MovieCard.css';

const MovieCard = ({ name, rating, img }) => {
  return (
    <div className="movieBox">
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={name} />
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;

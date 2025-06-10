import React from 'react';
import "./MovieCard.css";



const MovieCard = (props) => {

    return(
        <div className = "movieBox">
            <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="" width = "300"/>
            <h1>{props.name}</h1>
            <h2>{props.rating}</h2>
        </div>
    )
}

export default MovieCard;

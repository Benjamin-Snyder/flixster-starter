import React from "react";
import {useState, useEffect} from "react";
import './FavButton.css'

function FavButton({ onClick }) {
    const [isFav, setIsFav] = useState(false);
    const yellowSrc = './src/assets/favorite-button-yellow.png';
    const blackSrc = './src/assets/favorite-button-black.png';

    const tog = (event) => {
        event.stopPropagation();
        setIsFav(!isFav);
        onClick(); // Call the onClick prop to update the favorites
    };

    return (
        <img className="favButton" onClick={tog} src={isFav ? yellowSrc : blackSrc} alt="Favorite Button" />
    );
}



export default FavButton;

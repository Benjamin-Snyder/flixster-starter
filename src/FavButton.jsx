import React from "react";
import {useState} from "react";
import './FavButton.css'
import yellowFav from './assets/favorite-button-yellow.png';
import blackFav from './assets/favorite-button-black.png';

function FavButton({ onClick }) {
    const [isFav, setIsFav] = useState(false);
    const yellowSrc = yellowFav;
    const blackSrc = blackFav;

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

import {useState} from "react";
import './FavButton.css'
import yellowFav from './assets/favorite-button-yellow.png';
import blackFav from './assets/favorite-button-black.png';

const FavButton = ({ onClick }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const yellowSrc = yellowFav; // selected icon
    const blackSrc = blackFav; // unselected icon

    const toggleIcon = (event) => { // toggle the icon
        event.stopPropagation();
        setIsFavorited(!isFavorited);
        onClick(); // Call the onClick prop to update the favorites
    };

    return (
        <img className="fav-button" onClick={toggleIcon} src={isFavorited ? yellowSrc : blackSrc} alt="Favorite Button" />
    );
}

export default FavButton;

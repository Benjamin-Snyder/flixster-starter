import {useState} from "react";
import './FavButton.css'
import selectedFav from './assets/filled-star.png';
import unselectedFav from './assets/open-star.png';

const FavButton = ({ onClick }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const selectedFavSrc = selectedFav; // selected icon
    const unselectedFavSrc = unselectedFav; // unselected icon

    const toggleIcon = (event) => { // toggle the icon
        event.stopPropagation();
        setIsFavorited(!isFavorited);
        onClick(); // Call the onClick prop to update the favorites
    };

    return (
        <img className="fav-button" onClick={toggleIcon} src={isFavorited ? selectedFavSrc : unselectedFavSrc} alt="Favorite Button" />
    );
}

export default FavButton;

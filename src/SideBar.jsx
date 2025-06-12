import React from 'react';
import './Sidebar.css';

const SideBar = ({ onClick, toggleFavoritesView, toggleSeenView, toggleHomeView}) => {

    

    return (
        <div className="sideBar" onClick={onClick}>
            <div className="navButtons">
                <img onClick={toggleHomeView} className="homeNav" src="./src/assets/home.png" alt="Home Navigation" />
                <img onClick={toggleFavoritesView} className="favNav" src="./src/assets/favorite-button-black.png" alt="Favorite Movie Navigation" />
                <img onClick={toggleSeenView} className="seenNav" src="./src/assets/seen-black.png" alt="Seen Navigation" />
            </div>


        </div>
    );
};

export default SideBar;

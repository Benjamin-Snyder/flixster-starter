import React from 'react';
import './Sidebar.css';

const SideBar = ({ onClick, toggleFavoritesView, toggleSeenView, toggleHomeView}) => {
    return (
        <div className="sidebar" onClick={onClick}>
            <button onClick={toggleHomeView}><img className="homeNav" src="./src/assets/home.png" alt="Home Navigation" /></button>
            <button onClick={toggleFavoritesView}><img className="favNav" src="./src/assets/favorite-button-black.png" alt="Favorite Movie Navigation" /></button>
            <button onClick={toggleSeenView}><img className="seenNav" src="./src/assets/seen-black.png" alt="Seen Navigation" /></button>
        </div>
    );
};

export default SideBar;

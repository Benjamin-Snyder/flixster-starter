
import React from 'react';
import './SideBar.css';
import blackSeen from './assets/seen-black.png'
import blackFav from './assets/favorite-button-black.png';
import blackHome from './assets/home.png';

const SideBar = ({ onClick, toggleFavoritesView, toggleSeenView, toggleHomeView, pageIcon }) => {
    const getBackgroundColor = (icon) => {
        switch (icon) {
            case 'home':
                return 'rgba(0,0,0,0.4)'; // Background color for home
            case 'favorite':
                return 'rgba(0,0,0,0.4)'; // Background color for favorites
            case 'seen':
                return 'rgba(0,0,0,0.4)'; // Background color for seen
            default:
                return 'transparent'; // Default background color
        }
    };

    return (


            <div className="sideBar" onClick={onClick}>
                <div className="navButtons">
                    <img
                        onClick={toggleHomeView}
                        className="homeNav"
                        src={blackHome}
                        alt="Home Navigation"
                        style={{ backgroundColor: pageIcon === 'home' ? getBackgroundColor('home') : 'transparent' }}
                    />
                    <img
                        onClick={toggleFavoritesView}
                        className="favNav"
                        src={blackFav}
                        alt="Favorite Movie Navigation"
                        style={{ backgroundColor: pageIcon === 'favorite' ? getBackgroundColor('favorite') : 'transparent' }}
                    />
                    <img
                        onClick={toggleSeenView}
                        className="seenNav"
                        src={blackSeen}
                        alt="Seen Navigation"
                        style={{ backgroundColor: pageIcon === 'seen' ? getBackgroundColor('seen') : 'transparent' }}
                    />
                </div>
            </div>




    );
};

export default SideBar;

import './SideBar.css';

import seenSrc from './assets/open-eye.png'
import favSrc from './assets/filled-star.png';
import blackHome from './assets/home.png';

const SideBar = ({ onClick, toggleFavoritesView, toggleSeenView, toggleHomeView, pageIcon }) => {
    const getBackgroundColor = (icon) => {
        switch (icon) { // add an opaque background color for the selected icon
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
        <div className="side-bar" onClick={onClick}>
            <div className="nav-buttons">
                <img
                    onClick={toggleHomeView}
                    className="home-nav"
                    src={blackHome}
                    alt="Home Navigation"
                    style={{ backgroundColor: pageIcon === 'home' ? getBackgroundColor('home') : 'transparent' }}
                />
                <img
                    onClick={toggleFavoritesView}
                    className="fav-nav"
                    src={favSrc}
                    alt="Favorite Movie Navigation"
                    style={{ backgroundColor: pageIcon === 'favorite' ? getBackgroundColor('favorite') : 'transparent' }}
                />
                <img
                    onClick={toggleSeenView}
                    className="seen-nav"
                    src={seenSrc}
                    alt="Seen Navigation"
                    style={{ backgroundColor: pageIcon === 'seen' ? getBackgroundColor('seen') : 'transparent' }}
                />
            </div>
        </div>
    );
};

export default SideBar;

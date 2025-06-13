import './SideBar.css';
// TODO: please choose a better name than blackSeen. Maybe choose selectedSeen
import blackSeen from './assets/seen-black.png'
import blackFav from './assets/favorite-button-black.png';
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
                    src={blackFav}
                    alt="Favorite Movie Navigation"
                    style={{ backgroundColor: pageIcon === 'favorite' ? getBackgroundColor('favorite') : 'transparent' }}
                />
                <img
                    onClick={toggleSeenView}
                    className="seen-nav"
                    src={blackSeen}
                    alt="Seen Navigation"
                    style={{ backgroundColor: pageIcon === 'seen' ? getBackgroundColor('seen') : 'transparent' }}
                />
            </div>
        </div>
    );
};

export default SideBar;

import './Header.css';
import SearchBar from './SearchBar.jsx';
import Sort from './Sort.jsx';

const Header = ({ onFilterChange, onSearchChange }) => {
    return (
        <div className="top-of-screen">
            <div className="left-side">
                <div className="header-words">
                    <h1>Flixster</h1>
                </div>
                <div className="search-bar">
                    <SearchBar onSearchChange={onSearchChange} />
                </div>
            </div>
            <div className="filter-dropdown">
                <Sort onFilterChange={onFilterChange} />
            </div>
        </div>
    );
}

export default Header;

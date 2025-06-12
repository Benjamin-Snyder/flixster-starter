import { useState } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList.jsx';
import Footer from './Footer.jsx';
import MoreButton from './MoreButton.jsx';
import SideBar from './SideBar.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesPage from './FavoritesPage.jsx';





const HomePage = () => {
const [filter, setFilter] = useState('A-Z');
const [searchQuery, setSearchQuery] = useState('');
const [pageNumber, setPageNumber] = useState(1);

const handleFilterChange = (event) => {
    setFilter(event.target.value);
};

const handleSearchChange = (query) => {
    setSearchQuery(query);
};

const handleMoreClick = () => {
    setPageNumber(pageNumber + 1);
};

return (
    <Router>
    <div className="App">
    <div className="header">
        <Header onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
    </div>

    <SideBar />

    <div className="movieCard">
        <MovieList filter={filter} searchQuery={searchQuery} pageNumber = {pageNumber} />
    </div>

    <div className = "moreButton">
        <MoreButton onClick={handleMoreClick} />
    </div>

    <Routes>
        <Route path="/FavoritesPage" element={<FavoritesPage />} />
    </Routes>

    <div className = "footer">
        <Footer />
    </div>
    </div>
    </Router>

);
};

export default HomePage;

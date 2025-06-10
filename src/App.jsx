import { useState } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList.jsx';
import Footer from './Footer.jsx';
import MoreButton from './MoreButton.jsx';


const App = () => {
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
    <div className="App">
      <div className="header">
        <Header onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      </div>

      <div className="movieCard">
        <MovieList filter={filter} searchQuery={searchQuery} pageNumber = {pageNumber} />
      </div>

      <div className = "moreButton">
        <MoreButton onClick={handleMoreClick} />
      </div>

      <div className = "footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;

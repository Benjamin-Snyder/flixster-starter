import { useState } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList.jsx';

const App = () => {
  const [filter, setFilter] = useState('A-Z');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <div className="header">
        <Header onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      </div>

      <div className="movieCard">
        <MovieList filter={filter} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default App;

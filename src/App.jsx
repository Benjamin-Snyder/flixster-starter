import { useState } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList.jsx';

const App = () => {
  const [filter, setFilter] = useState('A-Z');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <Header onFilterChange={handleFilterChange} />
      </div>

      <div className="movieCard">
        <MovieList filter={filter} />
      </div>
    </div>
  );
};

export default App;

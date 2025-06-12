
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList.jsx';
import Footer from './Footer.jsx';
import MoreButton from './MoreButton.jsx';
import SideBar from './SideBar.jsx';

const App = () => {
  const [filter, setFilter] = useState('A-Z');
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [seen, setSeen] = useState([]);
  const [showSeen, setShowSeen] = useState(false);
  const [pageIcon, setPageIcon] = useState('home');

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(prevMovies => [...prevMovies, ...json.results]))
      .catch(err => console.error(err));
  }, [pageNumber]);


  const handleSeenClick = (movie) => {
    setSeen((prevSeen) => {
      const isSeen = prevSeen.some((seen) => seen.id === movie.id);
      return isSeen
        ? prevSeen.filter((seen) => seen.id !== movie.id)
        : [...prevSeen, movie];
    });
  }





  const handleFavoriteClick = (movie) => {
    setFavorites((prevFavorites) => {
      const isFav = prevFavorites.some((fav) => fav.id === movie.id);
      return isFav
        ? prevFavorites.filter((fav) => fav.id !== movie.id)
        : [...prevFavorites, movie];
    });
  };


  const toggleFavoritesView = () => {
    setShowSeen(false);
    setShowFavorites(true);
    setPageIcon('favorite');
  };

  const toggleSeenView = () => {
    setShowFavorites(false);
    setShowSeen(true);
    setPageIcon('seen');
  }

  const toggleHomeView = () => {
    setShowFavorites(false);
    setShowSeen(false);
    setPageIcon('home');
  }

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

      <SideBar toggleFavoritesView={toggleFavoritesView} toggleSeenView={toggleSeenView} toggleHomeView={toggleHomeView} pageIcon={pageIcon}/>


      <div className="movieCard">
        <MovieList
          filter={filter}
          searchQuery={searchQuery}
          movies={showFavorites ? favorites : showSeen ? seen : movies}
          onFavoriteClick={handleFavoriteClick}
          onSeenClick={handleSeenClick}
          isFav={(movie) => favorites.some(fav => fav.id === movie.id)}
        />
      </div>

      <div className="moreButton">
        <MoreButton onClick={handleMoreClick} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;

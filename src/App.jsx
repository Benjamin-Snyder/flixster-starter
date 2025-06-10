import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList';

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data); // Add this line
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const sortByRating = () => {
        const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
        setMovies(sortedMovies);
    };

    const sortByReleaseDate = () => {
        const sortedMovies = [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        setMovies(sortedMovies);
    };

    const sortByTitle = () => {
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    };

    return (
        <div className="App">
            <div className="header">
                <Header sortByRating={sortByRating} sortByReleaseDate={sortByReleaseDate} sortByTitle={sortByTitle} />
            </div>
            <div className="movieCard">
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default App;

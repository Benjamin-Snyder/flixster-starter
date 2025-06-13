import { useState } from 'react';
import MovieCard from './MovieCard';
import Modal from './Modal';
import './MovieList.css';

const MovieList = ({ filter, searchQuery, movies, onFavoriteClick, onSeenClick }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleMovieClick = (movie) => { //open the modal when a movie is clicked
        setSelectedMovie(movie);
        setIsModalVisible(true);
    };

    const filteredMovies = movies.filter(movie => //filter movies based on search query
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) // ensure capitialization doesn't matter
    );

    const sortedMovies = [...filteredMovies].sort((a, b) => { //sort movies based on filter
        if (filter === 'A-Z') {
            return a.title.localeCompare(b.title); // sort alphabetically
        } else if (filter === 'Release Date') {
            return new Date(b.release_date) - new Date(a.release_date); // sort by release date
        } else if (filter === 'Rating') {
            return b.vote_average - a.vote_average; // sort by rating
        }
        return [];
    });

    return (
    <div className="list-of-movies">
        {sortedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} onFavoriteClick={onFavoriteClick} onSeenClick={onSeenClick} />
        ))}
        <Modal isModalVisible={isModalVisible} movie={selectedMovie} onClose={() => setIsModalVisible(false)} />
    </div>
    );
};

export default MovieList;

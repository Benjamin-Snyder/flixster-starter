// MovieList.jsx
import { useState, useEffect } from 'react';
import React from 'react';
import MovieCard from './MovieCard';
import Modal from './Modal';
import './MovieList.css';

const MovieList = ({ filter, searchQuery, movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
    };

    const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (filter === 'A-Z') {
        return a.title.localeCompare(b.title);
    } else if (filter === 'Release Date') {
        return new Date(b.release_date) - new Date(a.release_date);
    } else if (filter === 'Rating') {
        return b.vote_average - a.vote_average;
    }
    return 0;
    });

    return (
    <div className="listOfMovies">
        {sortedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} />
        ))}
        <Modal isVisible={isModalVisible} movie={selectedMovie} onClose={() => setIsModalVisible(false)} />
    </div>
    );
};

export default MovieList;

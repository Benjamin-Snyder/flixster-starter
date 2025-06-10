import { useState, useEffect } from 'react';
import React from 'react';
import MovieCard from './MovieCard.jsx';
import Filter from './Filter.jsx';

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzI1ODM5ZjhkZWY0ZTM1ZjFhYmI1MzhjNDQ5NDNhOSIsIm5iZiI6MTc0OTUwOTM2Ni42NzYsInN1YiI6IjY4NDc2NGY2NjZlMTZhNWEzOTIwNjZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Kh9w6ygnW_-ZqrbwI2HY2M1AZAtgnCGFAs6BfBRhQI'
    }
};

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
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
        <div>
            <Filter sortByRating={sortByRating} sortByReleaseDate={sortByReleaseDate} sortByTitle={sortByTitle} />
            <div className="movieCard">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        name={movie.title}
                        rating={movie.vote_average}
                        img={movie.poster_path}
                        releaseDate={movie.release_date}
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieList;

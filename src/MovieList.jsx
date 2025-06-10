import React from 'react';
import MovieCard from './MovieCard.jsx';

function MovieList({ movies }) {
    console.log(movies); // Add this line
    return (
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
    );
}

export default MovieList;

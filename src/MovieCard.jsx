import './MovieCard.css';
import FavButton from './FavButton.jsx';
import SeenButton from './SeenButton.jsx';


const MovieCard = ({ movie, onClick, onFavoriteClick, onSeenClick, isFav, isSeen }) => {
    return (
        <div className="movie-box" onClick={onClick}>
            <img className="movie-box-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
            <h3>{movie.title}</h3>
            <div className="movie-box-buttons">
                <FavButton isFav={isFav} onClick={() => onFavoriteClick(movie)} />
                <SeenButton onClick={() => onSeenClick(movie)} />
            </div>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;

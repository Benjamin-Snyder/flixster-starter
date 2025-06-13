import {useState, useEffect} from 'react';
import './Modal.css';
import YoutubeEmbed from './YoutubeEmbed';

const getDetails = async (id) => { // Fetch movie details (genres and runtime)
    const MovieDetailAPIurl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const key = import.meta.env.VITE_API_KEY;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
    };

    try {
        const response = await fetch(MovieDetailAPIurl, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error); // Log error if any
    }
}

const getMovieVideoDetails = async (id) => { // Fetch movie trailer details
    const MovieTrailerDetailAPIurl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const key = import.meta.env.VITE_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${key}`
        }
    };

    try{
        const response = await fetch(MovieTrailerDetailAPIurl, options);
        const data = await response.json(); // populate the data with the response
        return data;
    } catch (error) {
        console.error('Error fetching movie video details:', error); // Log error if any
    }
}



const Modal = ({ isModalVisible, movie, onClose }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [genres, setGenres] = useState('');
    const [runTime, setRunTime] = useState('');
    const [videoID, setVideoID] = useState('');

    useEffect(() => {
        if (isModalVisible && movie) {
            getDetails(movie.id).then(data => { // Fetch movie details
                setMovieDetails(data);
                if (data && data.genres) { // Check if data and genres exist
                    const genreNames = data.genres.map(genre => genre.name).join(', ');
                    setGenres(genreNames); // Update genres state
                }
                if (data && data.runtime) { // Check if data and runtime exist
                    const runtime = data.runtime;
                    setRunTime(String(runtime)); // Update genres state
                }
            });
            getMovieVideoDetails(movie.id).then(videoData => {
                let isYoutube = false;
                let i = 0;
                while (!isYoutube && i < videoData.results.length) {
                    // make sure the video is from youtube and is a trailer
                    if (videoData.results[i].site === 'YouTube' && videoData.results[i].type === "Trailer") {
                        setVideoID(videoData.results[i].key);
                        isYoutube = true; // Set flag to true to exit loop
                    }
                    i++;
                }
            });
        }
    }, [isModalVisible, movie]); // Only run this effect when isVisible or movie changes


    if (!isModalVisible || !movieDetails) return null;

    return (
        <div id="grey-background" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className="modal-movie-info">
                    <div className= "title-pic">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`${movie.title} poster`} />
                    </div>
                    <div className="modal-text">
                        <h2>{movie.title}</h2>
                        <p> <strong>Release Date: </strong>{`${movie.release_date}`}</p>
                        <p> <strong>Rating: </strong>{movie.vote_average}</p>
                        <p> <strong>Runtime: </strong>{runTime} minutes</p>
                        <p> <strong>Genres: </strong>{genres}</p>
                        <p id="movie-overview"> <strong>Overview: </strong>{movie.overview}</p>
                    </div>
                    <div className="trailer">
                        <YoutubeEmbed embedId={videoID} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;

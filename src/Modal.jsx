// Modal.jsx
import React from 'react';
import {useState, useEffect} from 'react';
import './Modal.css';


const getDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const key = import.meta.env.VITE_API_KEY;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}




const Modal = ({ isVisible, movie, onClose }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [genres, setGenres] = useState('');
    const[runTime, setRunTime] = useState('');

    useEffect(() => {
        if (isVisible && movie) {
            getDetails(movie.id).then(data => {
                setMovieDetails(data);
                console.log(data);

                if (data && data.genres) {
                    const genreNames = data.genres.map(genre => genre.name).join(', ');
                    setGenres(genreNames); // Update genres state
                    console.log(genreNames);
                }

                if (data && data.runtime) {
                    const runtime = data.runtime;
                    setRunTime(runtime); // Update genres state
                    console.log(runtime);
                }

            });
        }


    }, [isVisible, movie]);



    if (!isVisible || !movieDetails) return null;


    return (
        <div id="greyBox" onClick={onClose}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>

                <div className="info">

                    <div className= "titlePic">
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{`Released: ${movie.release_date}`}</h3>
                    </div>

                    <div className="modalText">
                        <p>Rating: {movie.vote_average}</p>
                        <p>Runtime: {runTime} minutes</p>
                        <p>Genres: {genres}</p>
                        <p>{movie.overview}</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Modal;

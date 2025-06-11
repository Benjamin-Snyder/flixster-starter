
import React from 'react';
import {useState, useEffect} from 'react';
import './Modal.css';
import YoutubeEmbed from './YoutubeEmbed';


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
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

const getVideo = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const key = import.meta.env.VITE_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${key}`
        }
    };

    try{
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie video details:', error);
    }
}




const Modal = ({ isVisible, movie, onClose }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [genres, setGenres] = useState('');
    const[runTime, setRunTime] = useState('');
    const [videoID, setVideoID] = useState('');

    useEffect(() => {
        if (isVisible && movie) {
            getDetails(movie.id).then(data => {
                setMovieDetails(data);


                if (data && data.genres) {
                    const genreNames = data.genres.map(genre => genre.name).join(', ');
                    setGenres(genreNames); // Update genres state

                }

                if (data && data.runtime) {
                    const runtime = data.runtime;
                    setRunTime(runtime); // Update genres state

                }

            });

            getVideo(movie.id).then(videoData => {
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
                        <p> <strong>Rating: </strong>{movie.vote_average}</p>
                        <p> <strong>Runtime: </strong>{runTime} minutes</p>
                        <p> <strong>Genres: </strong>{genres}</p>
                        <p id="overview"> <strong>Overview: </strong>{movie.overview}</p>
                        <YoutubeEmbed embedId={videoID} />
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Modal;

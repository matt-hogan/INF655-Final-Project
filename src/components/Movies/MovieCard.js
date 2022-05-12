import React, { useContext, useState } from 'react';
import { FaPlusSquare, FaMinusSquare, FaRegStar, FaStar } from 'react-icons/fa';
import MovieContext from '../context/MovieContext';

const API_IMG ="https://image.tmdb.org/t/p/w500/";

export default function MovieBox({ id, title, release_date, poster_path, crew, vote_average, results, genres }) {
    const { favorites, addFavorite, removeFavorite, setFavorites, setRefresh } = useContext(MovieContext);
    const [showMore, setShowMore] = useState(false);

    const handleFavorite = () => {
        if (!favorites.includes(id)) {
            addFavorite(id);
        } else {
            removeFavorite(id);
            setFavorites(favorites);
            setRefresh(true);
        }
    }

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return !showMore ? (
        <div className='movie-card'>
            <div className='movie-card-front'>
                <div>
                    { poster_path ? <img src={API_IMG+poster_path} className="movie-card-image" alt=""></img> : <></> }
                </div>
                <div className='movie-card-heading'>
                    <h3 className='movie-card-title'>{title}</h3>
                    <div className='movie-card-buttons'>
                        <div className='movie-card-favorite movie-card-button-container' onClick={handleFavorite}>
                            { favorites.includes(id) ? <FaStar className='movie-card-button' fill='#f0f8ff' /> : <FaRegStar className='movie-card-button' fill='#f0f8ff' /> }
                        </div>
                        <div className='moive-card-show-more' onClick={handleShowMore}>
                            <FaPlusSquare className='movie-card-button' fill='#f0f8ff' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='movie-card'>
            <div className='movie-card-front'>
                <div>
                    { poster_path ? <img src={API_IMG+poster_path} className="movie-card-image" alt=""></img> : <></> }
                </div>
                <div className='movie-card-heading'>
                    <h3 className='movie-card-title'>{title}</h3>
                    <div className='movie-card-buttons'>
                        <div className='movie-card-favorite movie-card-button-container' onClick={handleFavorite}>
                            { favorites.includes(id) ? <FaStar className='movie-card-button' fill='#f0f8ff' /> : <FaRegStar className='movie-card-button' fill='#f0f8ff' /> }
                        </div>
                        <div className='moive-card-show-more' onClick={handleShowMore}>
                            <FaMinusSquare className='movie-card-button' fill='#f0f8ff' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='movie-card-info'>
                <p><b>Release Year:</b> {release_date.substring(0,4)}</p>
                <p><b>Director:</b> {crew.find(c => c.job === "Director") ? crew.find(c => c.job === "Director").name : "Not Available" }</p>
                <p><b>Rating:</b> {vote_average}</p>
                <p><b>Genres:</b> {genres.map(element => element.name) ? genres.map((element, index, arr) => index !== arr.length-1 ? element.name + ", " : element.name): "Not Available" }</p>
                <p>{results.find(r => r.type === "Trailer") ? <a href={"https://www.youtube.com/watch?v=" + results.find(r => r.type === "Trailer").key} target="_blank" rel="noopener noreferrer">Trailer Link</a>: "No Trailer Available" }</p>
                
            </div>
        </div>
    );
}

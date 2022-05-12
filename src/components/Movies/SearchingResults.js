import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import MovieCard from './MovieCard';

export default function SearchingResults() {
    const { movies } = useContext(MovieContext);

    return movies.length ? (
        <div className='movie-container movie-container-movies'>
            {movies.map((movieReq) => (
                <MovieCard
                    key={movieReq.id}
                    {...movieReq}
                />
            ))}
        </div>
    ) : (
        <div className='movie-container message no-movies'>
            <h2 className='message-text'>No Movies Found</h2>
        </div>
    );
}

import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MovieContext from '../context/MovieContext';
import SearchingResults from './SearchingResults';

export default function Movies() {
    const { getFavorites, movies, favorites, refresh, setRefresh, isLoading, searching } = useContext(MovieContext);

    useEffect(() => {
        if (refresh) {
            if (searching) {
                setRefresh(false);
            } else {
                getFavorites();
                setRefresh(false);
            }
        }
    }, [ refresh ]);


    if (isLoading) {
        return (
            <div className='loading-container message'>
                <h2 className='loading message-text'>Loading...</h2>
            </div>
        );
    }

    if (searching) {
        return(
            <SearchingResults />
        );
    } else if (favorites.length) {
        return (
            <div className='movie-container movie-container-movies'>
                {movies.map((movieReq) => (
                    <MovieCard
                        key={movieReq.id}
                        {...movieReq}
                    />
                ))}
            </div>
        );
    } else {
        return(
            <div className='movie-container message no-movies'>
                <h2 className='message-text'>You have no favorite movies.<br></br>Search for movies to add.</h2>
            </div>
        );
    }
}


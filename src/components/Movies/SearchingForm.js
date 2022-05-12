import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import { FaHome, FaSearch, FaStar } from 'react-icons/fa';

const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=05d944ebc1e740be553323a596100a79&query=";

export default function SearchingForm() {
    const { getMovie, getFavorites, setMovies, setIsLoading, query, setQuery, setSearching } = useContext(MovieContext);
    
    const searchMovie = async (e) => {
        e.preventDefault();
        try{
            if (query.trim().length) {
                setIsLoading(true);
                setMovies([]);
                setSearching(true);
                const url = `${API_SEARCH + query.trim()}`;
                const res = await fetch(url);
                const data = await res.json();

                if (data.results.length) {
                    data.results.map((movie) => {
                        getMovie(movie.id);
                    });
                } else {
                    window.alert("Movie Not Available");
                }

                setIsLoading(false);
            } else {
                setSearching(false);
                getFavorites();
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    const searchField = (e) => {
        const search = e.target.value;
        search.replace(" ", "+");
        setQuery(search);
    }

    const clearSearch = (e) => {
        e.preventDefault();
        try {
            setMovies([]);
            setQuery("");
            setSearching(false);
            getFavorites();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className='navigation-item nav-favorite' onClick={clearSearch}>
                <FaStar className='nav-button' fill='#f0f8ff' />
            </div>
            <div className='navigation-item nav-search' onClick={searchMovie}>
                <FaSearch className='nav-button' fill='#f0f8ff' />
            </div>
            <form className="search-form navigation-item nav-searchbox" onSubmit={searchMovie}>
                <input
                    className='search-box'
                    type="text"
                    role="searchbox"
                    id="search"
                    placeholder="Search Movie"
                    value={query}
                    onChange={(e) => searchField(e)}
                />
            </form>
        </>
    );
}

import { useState, createContext } from "react";

const API_ID = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=05d944ebc1e740be553323a596100a79";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [searching, setSearching] = useState(false);

    const addFavorite = (id) => setFavorites(current => [...current, id]);
    const removeFavorite = (id) => setFavorites(current => current.splice(current.indexOf(id), 1));

    const addMovie = (movie) => setMovies(current => [...current, movie]);

    const getMovie = async (id) => {
        const movieURL = `${API_ID + id + API_KEY}`;
        const movieRes = await fetch(movieURL);
        const movieData = await movieRes.json();

        const creditURL = `${API_ID + id + "/credits" + API_KEY}`;
        const creditRes = await fetch(creditURL);
        const creditData = await creditRes.json();

        const videoURL = `${API_ID + id + "/videos" + API_KEY}`;
        const videoRes = await fetch(videoURL);
        const videoData = await videoRes.json();

        const movie = { ...movieData, ...creditData, ...videoData };

        addMovie(movie);
    }

    const getFavorites = async () => {
        setIsLoading(true);
        setMovies([]);
        favorites.map(async (id) => {
            await getMovie(id);
        });
        setIsLoading(false);
    }


    return (
        <MovieContext.Provider value={{ 
            getMovie, getFavorites,
            movies, setMovies, addMovie,
            favorites, addFavorite, removeFavorite, setFavorites,
            refresh, setRefresh,
            isLoading, setIsLoading,
            query, setQuery,
            searching, setSearching
        }}>
            { children }
        </MovieContext.Provider>
    );
}

export default MovieContext;
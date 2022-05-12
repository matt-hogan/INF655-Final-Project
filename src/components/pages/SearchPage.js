import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Header from './Header';
import Footer from './Footer';
import MovieContext from '../context/MovieContext';

const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=05d944ebc1e740be553323a596100a79&query=";


export default function SearchPage() {
    const { getMovie, setMovies, setIsLoading, setSearching } = useContext(MovieContext);

    const params= useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const search = async () => {
            if (params.searchQuery){
                setIsLoading(true);
                setMovies([]);
                setSearching(true);
                const url = `${API_SEARCH + params.searchQuery}`;
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
                navigate("/");
            }
        }
        search();
    }, [])

    return (
        <div className='main-container'>
            <Header />
            <div className='movies-container'>
                <Movies />
            </div>
            <Footer />
        </div>
    );
}
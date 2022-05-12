import React, { useContext, useEffect } from 'react';
import Movies from '../Movies/Movies';
import Header from './Header';
import Footer from './Footer';
import MovieContext from '../context/MovieContext';

export default function HomePage() {
    const { setRefresh, setSearching } = useContext(MovieContext);


    useEffect(() => {
        setSearching(false);
        setRefresh(true);
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
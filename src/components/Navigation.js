import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaStar } from 'react-icons/fa';
import SearchingForm from './Movies/SearchingForm';


export default function Navigation() {
    const navigate = useNavigate();

    return (
        <div className='navigation'>
            <nav className='navigation-nav'>
                <div className='navigation-item nav-home' onClick={() => navigate("/")}>
                    <FaHome className='nav-button' fill='#f0f8ff' />
                </div>
                <SearchingForm />
            </nav>
        </div>
    );
}

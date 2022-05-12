import React from 'react';
import Navigation from '../Navigation';

export default function Header() {
    return (
        <div className='header'>
            <h1 className='header-title'>Movie List</h1>
            <Navigation />
        </div>
    );
}

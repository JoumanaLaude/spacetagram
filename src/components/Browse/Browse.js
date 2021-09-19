import React from 'react';
import Navbar from '../Navbar';
import Past from './Past';

export default function Browse() {
    return (
        <>
            <Navbar />
            <main className="container">
                <h1>Browse</h1>
                <p>Search through time: </p>
                <input type="text"></input>
                {/* semantic input fields */}
                <button>Search</button><br />
                <Past />
            </main>
        </>
    )
}
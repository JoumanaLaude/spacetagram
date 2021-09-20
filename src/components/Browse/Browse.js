import React from 'react';
import Navbar from '../Navbar';
import Past from './Past';

export default function Browse() {
    return (
        <>
            <Navbar />
            <section className="container">
                <h1>Browse</h1>
                <p>Click the button to refresh the images!</p>
                {/* <p>Search through time: </p>
                <input type="text"></input>
                <button>Search</button><br /> */}
                </section>
                <Past />
        </>
    )
}
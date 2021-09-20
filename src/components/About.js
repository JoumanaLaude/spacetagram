import React from 'react';
import Navbar from './Navbar';

export default function About() {
    return (
        <>
            <Navbar />
            <section className="container bg">
                <h1>About</h1>
                <p>Spacetagram is created with NASA's Astronomy Picture of the Day API.
                    <br />Media includes images and videos that date back to 1995!</p>
            </section>
        </>
    )
}

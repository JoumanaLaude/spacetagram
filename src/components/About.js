import React from 'react';
import Navbar from './Navbar';
import gif from './stars-gif.gif';

export default function About() {
    return (
        <>
            <Navbar />
            <section className="container bg">
                <h1>About</h1>
                <p>Spacetagram is created with NASA's Astronomy Picture of the Day API.
                    <br />Media includes images and videos that date back to 1995!</p>
                <img src={gif} alt="anime space gif" className="gif" />
                <p>This app was created by JL for Shopify's Winter 2022 Front End Developer Intern Challenge.</p>
            </section>
        </>
    )
}
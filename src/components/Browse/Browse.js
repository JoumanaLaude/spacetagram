import React from 'react';
import Navbar from '../Navbar';
import Media from './Media';
import Top from './Top';

export default function Browse() {
    return (
        <>
            <Navbar />
            <section className="container">
                <h1>Browse</h1>
                <p>Click the button to search through time.</p>
            </section>
            <Media />
            <Top />
        </>
    )
}
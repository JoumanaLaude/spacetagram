import React from 'react';
import Navbar from '../Navbar';
import Today from './Today';

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="container">
                <h1>Spacetagram</h1>
                <p>A space to view our universe.</p>
            </section>
            <Today />
        </>
    )
}
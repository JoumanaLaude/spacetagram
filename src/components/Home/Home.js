import React from 'react';
import Navbar from '../Navbar';
import Today from './Today';
import styled from 'styled-components';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container">
                <h1>Spacetagram</h1>
                <Intro>A space to view our universe.</Intro>
                <Today />
            </main>
        </>
    )
}

const Intro = styled.p`
    padding-bottom: 2rem;
    font-style: italic;
`;
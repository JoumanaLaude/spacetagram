import React from 'react';
import Navbar from '../Navbar';
import Today from './Today';
import styled from 'styled-components';

export default function Home() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Container>
                    <h1>Spacetagram</h1>
                    <Intro>A space to look at our universe.</Intro>
                    <Today />
                </Container>
            </main>
        </>
    )
}

const Container = styled.div`
    padding: 4rem 6rem;
`;

const Intro = styled.p`
    padding: 2rem;
`;
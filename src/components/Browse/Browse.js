import React from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import Past from './Past';

export default function Browse() {
    return (
        <>
            <Navbar />
            <Search>Search through time: </Search>
            <input type="text"></input> <button>Search</button><br />
            <Past />
        </>
    )
}

const Search = styled.h1`
    padding: 3rem;

    @media only screen and (max-width: 700px) {
        font-size: 1.4rem;
        }
`;
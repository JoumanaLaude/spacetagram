import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const apiKey = process.env.REACT_APP_APOD_KEY;
const start = "2021-09-01";

export default function Past() {

    const [imgData, setImgData] = useState(null);

    useEffect(() => {
        fetchImg();

        async function fetchImg() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start}`);
            const data = await res.json();
            setImgData(data);
            console.log(data);
        }
    }, []);

    if (!imgData) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <br /><h1>Search through time: </h1><br />
            <input type="text"></input> <button>Search</button>
            <Grid>
                {imgData.slice().reverse().map((imgData, index) => (
                    <Media key={index} >
                        {imgData.media_type === 'image' ? (<Img src={imgData.url} alt={imgData.title} />) : (
                            <iframe
                                title='space-video'
                                src={imgData.url}
                                frameBorder='0'
                                gesture='media'
                                allow='encrypted-media'
                                className='video'
                            />
                        )}
                        <br />{imgData.date}
                        <Title>{imgData.title} <FontAwesomeIcon icon={faStar} className="fa-1x" /></Title>
                    </Media>
                ))}
            </Grid>
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 4;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.4rem;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

const Media = styled.div`
    font-size: 1.2rem;
    padding: 2rem;
`

const Img = styled.img`
    width: 410px;
    border-radius: 10px 30px;

    @media only screen and (max-width: 1000px) {
        max-width: 100%;
    }
`;

const Title = styled.h1`
    padding-top: 10px;
`;
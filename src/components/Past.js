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
            <div className="container">
                <Navbar />

                <br /><h1>Search through past pictures: </h1><br />
                <input type="text"></input> <button>Search</button>

                <div className="row">
                    <div className="column">
                        {imgData.slice().reverse().map((imgData, index) => (
                            <Container key={index} >
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
                                <br />
                                <h1>{imgData.title} <FontAwesomeIcon icon={faStar} className="fa-1x" /></h1>
                                {imgData.date}
                            </Container>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

const Img = styled.img`
    width: 410px;
    padding-top: 4rem;
`;
// max-width: 30%;
// make max-width higher in resp view

const Container = styled.div`
    padding: 0;
    margin: 0;
`;
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";

const apiKey = process.env.REACT_APP_APOD_KEY;
// const start = "2021-09-01";

export default function Past() {

    const [imgData, setImgData] = useState(null);

    useEffect(() => {
        fetchImg();

        async function fetchImg() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=18`);
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
            <input type="text"></input> <button>Search</button><br />
            <Link to="/past" onClick={() => window.location.reload()}><button>Refresh</button></Link>
            <Grid>
                {imgData.slice().reverse().map((imgData, index) => (
                    <Media key={index} >
                        {imgData.media_type === 'image' ? (
                            <ModalImage
                                small={imgData.url}
                                large={imgData.hdurl}
                                hideDownload={true}
                                showRotate={true}
                                alt={imgData.title}
                                className='image'
                            />
                        ) : (
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
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1600px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Media = styled.div`
    font-size: 1.2rem;
    padding: 2rem;

    @media only screen and (max-width: 700px) {
    font-size: 1rem;
    }
`;

const Title = styled.h1`
    padding-top: 10px;
    @media only screen and (max-width: 700px) {
        font-size: 1.4rem;
        }
`;
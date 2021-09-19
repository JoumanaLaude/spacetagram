import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Past() {
    const [imgData, setImgData] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const opts = { signal: abortController.signal };

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=18`, opts)
            .then((response) => response.json())
            .then((data) => setImgData(data))
            .catch((error) => console.log(error.message));
        return () => abortController.abort();
    }, []);

    if (!imgData) return <div>Loading...</div>;

    return (
        <>
            <Link to="/past" onClick={() => window.location.reload()}>
                <button>Randomize!</button>
            </Link>
            <Grid>
                {imgData.map((imgData, index) => (
                        <Media key={index}>
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
                            <p>{imgData.date}</p>
                            <Title>{imgData.title}</Title>
                            <Star />
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

    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1500px) {
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

const Title = styled.h3`
    padding: 10px;

    @media only screen and (max-width: 700px) {
        font-size: 1.4rem;
        }
`;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';
import Loading from '../Loading';

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Media() {
    
    const [mediaData, setMediaData] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const opts = { signal: abortController.signal };

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=18`, opts)
            .then((response) => response.json())
            .then((data) => setMediaData(data))
            .catch((error) => console.log(error.message));
        return () => abortController.abort();

    }, []);

    if (!mediaData) return <Loading />;

    return (
        <section>
            <Box>
                <button onClick={() => window.location.reload(false)} type="button">Randomize!</button>
                <Grid>
                    {mediaData.map((mediaData, index) => (
                        <div className="card" key={index}>
                            {mediaData.media_type === 'image' ? (
                                <ModalImage
                                    small={mediaData.url}
                                    large={mediaData.hdurl}
                                    hideDownload={true}
                                    showRotate={true}
                                    alt={mediaData.title}
                                    className='image'
                                />
                            ) : (
                                <iframe
                                    title='space-video'
                                    src={mediaData.url}
                                    frameBorder='0'
                                    // allow='autoplay'
                                    allow='encrypted-media'
                                    className='video'
                                />
                            )}
                            <div className="card-container">
                                <CardText>{mediaData.date}</CardText>
                                <Title>{mediaData.title}</Title>
                                <Star />
                            </div>
                        </div>
                    ))}
                </Grid>
            </Box>
        </section>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    padding: 4rem;
    
    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Box = styled.div`
    width: 80%;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 3rem;
    
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Title = styled.h3`
    padding: 1rem 0;
    @media only screen and (max-width: 700px) {
        font-size: 1rem;
        }
`;

const CardText = styled.p`
    line-height: 1.4rem;
    @media only screen and (max-width: 700px) {
        font-size: 1rem;
        }
`;
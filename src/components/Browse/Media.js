import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';
import Loading from '../Loading';

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Media() {
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

    if (!imgData) return <Loading />;

    return (
        <section>
            <Box>
                <button onClick={() => window.location.reload(false)} type="button">Randomize!</button>
                <Grid>
                    {imgData.map((imgData, index) => (
                        <div className="card" key={index}>
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
                            <div className="card-container">
                                <CardText>{imgData.date}</CardText>
                                <Title>{imgData.title}</Title>
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
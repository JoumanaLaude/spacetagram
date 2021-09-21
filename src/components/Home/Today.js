import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';
import Loading from '../Loading';

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Today() {
    const [imgData, setImgData] = useState(null);

    useEffect(() => {
        fetchImg();

        async function fetchImg() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setImgData(data);
            console.log(data);
        }
    }, []);

    if (!imgData) return <Loading />;

    return (
        <section>
                <Title>Today ({imgData.date}): {imgData.title}</Title>
                <Box>
                <div className="card">
                    {imgData.media_type === 'image' ? (
                        <ModalImage
                            small={imgData.url}
                            large={imgData.hdurl}
                            hideDownload={true}
                            showRotate={true}
                            alt={imgData.title}
                            className='today'
                        />
                    ) : (
                        <iframe
                            title='space-video'
                            src={imgData.url}
                            frameBorder='0'
                            gesture='media'
                            allow='encrypted-media'
                            allowFullScreen
                        />
                    )}
                    <div className="card-container">
                        <Star />
                        <CardText>{imgData.explanation}</CardText>
                        <CardText>Credit: {imgData.copyright}</CardText>
                    </div>
                </div>
            </Box>
        </section>
    )
}

const CardText = styled.p`
    line-height: 1.4rem;
    padding-top: 2rem;
    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const Box = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 5rem;
`;

const Title = styled.h3`
    font-size: 1.4rem;
    padding-bottom: 2rem;

    @media only screen and (max-width: 700px) {
        font-size: 1rem;
        }
`;
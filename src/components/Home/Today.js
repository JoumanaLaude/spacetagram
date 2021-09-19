import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';

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

    if (!imgData) return <div>Loading...<br /><br />Did you know?<br />"At the Smithsonian Air & Space Museum you can touch a real moon rock!"</div>;

    return (
        <section>
            <Box>
                <h1>{imgData.date}</h1>
                <h1>Today from NASA: {imgData.title}</h1>
                <br />
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
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;


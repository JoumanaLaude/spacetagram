import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalImage from "react-modal-image";
// import Star from "../Browse/Star";
import Loading from "../Loading";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Today() {
    const [mediaData, setMediaData] = useState(null);

    useEffect(() => {
        fetchMedia();
        async function fetchMedia() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setMediaData(data);
            console.log(data);
        }
    }, []);

    if (!mediaData) return <Loading />;

    return (
        <section>
            <Title>Today ({mediaData.date}): {mediaData.title}</Title>
            <Box>
                <div className="card">
                    {mediaData.media_type === "image" ? (
                        <ModalImage
                            small={mediaData.url}
                            large={mediaData.hdurl}
                            hideDownload={true}
                            showRotate={true}
                            alt={mediaData.title}
                            className="today"
                        />
                    ) : (
                        <iframe
                            title="space-video"
                            src={mediaData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="video"
                            loading="lazy"
                        />
                    )}
                    <div className="card-container">
                        {/* <Star /> */}
                        <CardText>{mediaData.explanation}</CardText>
                        <CardText>{mediaData.copyright}</CardText>
                    </div>
                </div>
            </Box>
        </section>
    )
}

const CardText = styled.p`
    line-height: 1.4rem;
    padding-top: 2rem;
    text-align: justify;
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
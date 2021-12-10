import React from "react";
import styled from "styled-components";
import ModalImage from "react-modal-image";
// import Star from "./Star";

export default function Media(props) {

    return (
        <section>
            <Box>
                <button onClick={() => window.location.reload(false)} type="button">Randomize!</button>
                <Grid>
                    {props.media.map((media, star) => (
                        <div className="card" key={star}>
                            {media.media_type === "image" ? (
                                <ModalImage
                                    small={media.url}
                                    large={media.hdurl}
                                    hideDownload={true}
                                    showRotate={true}
                                    alt={media.title}
                                    className="image"
                                    loading="lazy"
                                />
                            ) : (
                                <iframe
                                    title="space-video"
                                    src={media.url}
                                    frameBorder="0"
                                    allow="encrypted-media"
                                    className="video"
                                    loading="lazy"
                                />
                            )}
                            <div className="card-container">
                                <CardText>{media.date}</CardText>
                                <Title>{media.title}</Title>

                                {/* <span
                                    onClick={() => props.handleStarClick(media)}
                                >
                                    <Star />
                                </span> */}
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
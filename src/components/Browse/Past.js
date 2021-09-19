import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Past() {
    const [imgData, setImgData] = useState(null);

    // prevent memory leak??
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
            {/* <Navbar />

            <h1>Search through time: </h1><br />
            <input type="text"></input>
            <button>Search</button><br />

            <Link to="/past" onClick={() => window.location.reload()}>
                <button>Refresh</button>
            </Link> */}

            <Grid>
                {imgData.slice().reverse().map((imgData, index) => (
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
                        <Title>{imgData.title}</Title>
                        <p>{imgData.date}<br />
                            {/* <FontAwesomeIcon icon={faStar} className="fa-2x icon star" /> */}
                            <Star />
                            <FontAwesomeIcon icon={faComment} className="fa-2x icon" />
                            <FontAwesomeIcon icon={faShare} className="fa-2x icon" />
                            {/* make this whole thing a component when done */}
                        </p>
                    </Media>
                ))}
            </Grid>
            <Link to="/past" onClick={() => window.location.reload()}>
                <button>Refresh</button>
            </Link>
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

const Title = styled.h1`
    padding-top: 10px;

    @media only screen and (max-width: 700px) {
        font-size: 1.4rem;
        }
`;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalImage from "react-modal-image";
import Star from '../Favorites/Star';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';

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
            <h1>{imgData.date}</h1>
            <h1>Today from NASA: {imgData.title}</h1>
            <Media>
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

                <Star />
                <FontAwesomeIcon icon={faComment} className="fa-2x icon" />
                <FontAwesomeIcon icon={faShare} className="fa-2x icon" />
            </Media>
        </section>
    )
}

const Media = styled.div`
    font-size: 1.2rem;
    padding: 2rem;
`;
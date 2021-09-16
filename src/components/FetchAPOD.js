import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function FetchAPOD() {

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

    if (!imgData) return <div>Loading...<br /><br />"At the Smithsonian Air & Space Museum you can touch a real moon rock!"</div>;

    return (
        <>
        <Navbar />
            <h1>{imgData.date}</h1>
            <h1>Today's Picture: {imgData.title}</h1>

            <div>
                {/* some days have videos instead of images */}
                {imgData.media_type === 'image' ? (<img src={imgData.url} alt={imgData.title} />) : (
                    <iframe
                        title='space-video'
                        src={imgData.url}
                        frameBorder='0'
                        gesture='media'
                        allow='encrypted-media'
                        allowFullScreen
                        className=''
                    />
                )}
            </div>

        </>
    )
}
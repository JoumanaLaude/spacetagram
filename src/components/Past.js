import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_APOD_KEY;
const start = "2021-09-01";

export default function Past() {

    const [imgData, setImgData] = useState(null);

    useEffect(() => {
        fetchImg();

        async function fetchImg() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start}`);
            const data = await res.json();
            setImgData(data);
            console.log(data);
        }
    }, []);

    if (!imgData) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <h1>{imgData.date}</h1>
            <h1>Search through past pictures: </h1>

            <div>
                {imgData.slice().reverse().map((imgData, index) => (
                    <div>
                        {imgData.date}

                        {imgData.media_type === 'image' ? (<img key={index} src={imgData.url} alt={imgData.title} />) : (
                            // <iframe
                            //     title='space-video'
                            //     src={imgData.url}
                            //     frameBorder='0'
                            //     gesture='media'
                            //     allow='encrypted-media'
                            // />
                            <a href={imgData.url}>Click for video!</a> // make this pop out or something
                        )}

                        {imgData.title} <br />
                        {/* explanation on click v */}
                        {imgData.explanation}

                    </div>
                ))}
            </div>

        </>
    )
}
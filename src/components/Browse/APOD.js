import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loading from '../Loading';

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function APOD() {
    const [media, setMedia] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const opts = { signal: abortController.signal };

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=18`, opts)
            .then((response) => response.json())
            .then((data) => setMedia(data))
            .catch((error) => console.log(error.message));

        return () => abortController.abort();

    }, []);

    if (!media) return <Loading />;

    return (
        <section>
                    {media.map(info => (
                        <Card title={info.title} date={date} key={info.id} />
                    ))}
        </section>
    )
}
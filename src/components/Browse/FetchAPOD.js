import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import MediaList from "./MediaList";
import StarIcon from "./Star";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function FetchAPOD() {
    const [media, setMedia] = useState([]);
    const [star, setStar] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const opts = { signal: abortController.signal };

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=18`, opts)
            .then((response) => response.json())
            .then((data) => setMedia(data))
            .catch((error) => console.log(error.message));
        return () => abortController.abort();

    }, []);

    const addMediaToStars = mediaObj => {
        const isAlreadyStarred = star.filter(
            eachStar => eachStar.id === mediaObj.id
        );
        if (isAlreadyStarred.length > 0) {
            return;
        }
        const newStarredMedia = [...star, mediaObj];

        setStar(newStarredMedia);
        saveToLocalStorage(newStarredMedia);
    }

    const saveToLocalStorage = media => {
        localStorage.setItem("stars", JSON.stringify(media));
    };

    useEffect(() => {
        const storedStars = JSON.parse(localStorage.getItem("stars"));

        if (Array.isArray(storedStars)) {
            setStar(storedStars);
        }
    }, []);

    if (!media) return <Loading />;

    return (
        <MediaList
            media={media}
            starComponent={StarIcon}
            handleStarClick={addMediaToStars}
        />
    )
}
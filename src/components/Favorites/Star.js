import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../context/GlobalState';

export default function Star() {
    const { addMediaToStars } = useContext(GlobalContext);

    const [starMedia, setStarMedia] = useState(false);
    const handleToggle = () => {
        setStarMedia((star) => {
            return !star;
        });
    };

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    handleToggle();
                    addMediaToStars();
                }}>
                Add Star{' '}
                {
                    starMedia ? (
                        <FontAwesomeIcon icon={faStar} className="fa-1x fa-fw star-toggle" />
                    ) : (
                        <FontAwesomeIcon icon={faStar} className="fa-1x fa-fw star" />
                    )}
            </button>
        </>

    );
};
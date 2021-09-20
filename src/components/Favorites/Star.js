import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Star() {

    const [starMedia, setStarMedia] = useState(false);

    const handleToggle = () => {
        setStarMedia((star) => {
            return !star;
        });
    };

    return (
        <>
            <button onClick={() => handleToggle()} type="button">Add Star{' '}
                {
                    starMedia ? (
                        <FontAwesomeIcon icon={faStar}
                            className="fa-1x fa-fw star-toggle"
                            onClick={() => handleToggle()}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faStar}
                            className="fa-1x fa-fw star"
                            onClick={() => handleToggle()}
                        />
                    )}
            </button>
        </>

    );
};
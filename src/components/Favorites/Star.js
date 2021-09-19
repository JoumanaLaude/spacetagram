import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

export default function Star() {

    const [starMedia, setStarMedia] = useState(false);

    const handleToggle = () => {
        setStarMedia((star) => {
            return !star;
        });
    };

    return (
        <>
            <StarButton type="button" onClick={() => handleToggle()}>
                <Button>Add to stars</Button>
                {
                    starMedia ? (
                        <FontAwesomeIcon icon={faStar}
                            className="fa-1x star-toggle"
                            onClick={() => handleToggle()}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faStar}
                            className="fa-1x star"
                            onClick={() => handleToggle()}
                        />
                    )}
            </StarButton>

            {/* <FontAwesomeIcon icon={faStar} className="fa-2x"onClick={() => handleToggle()} /> */}
            {/* <span>❤</span> */}
            {/* <FontAwesomeIcon icon={faStar} className="fa-2x"onClick={() => handleToggle()} /> */}
        </>

    );
};

const StarButton = styled.button`
    font-size: 1rem;
    padding: 1rem;
    color: #1b1725;
    background-color: #d1ccdc;
    border: none;
    border-radius: 15px;
`;

const Button = styled.span`
    padding: 1rem;
`;
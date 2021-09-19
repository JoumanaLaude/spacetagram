import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = () => {
    return (
        <>
            {/* <span>Like ❤</span> */}
            <FontAwesomeIcon icon={faStar} className="fa-2x icon star" />
        </>
    );
};

export default Star;
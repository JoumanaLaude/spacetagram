import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Link to="/apod">Daily Astronomy Picture!</Link><br />
            <Link to="/past">Past Pictures</Link>
        </>
    )
}
import React from "react";
import { Link } from "react-router-dom";

// today, random day, home, about

export default function Navbar() {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
            </ul>
        </div>
    )
}
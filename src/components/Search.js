import React, { useState } from "react";
import Navbar from "./Navbar";

export const Search = () => {
    const [date, setDate] = useState("");
    // const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        setDate(e.target.value);

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APOD_KEY}&date={e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <div>
            <Navbar />
            <h1>Search through time</h1>
            <input type="text" placeholder="Enter a date" value={date} onChange={onChange} />
        </div>
    );
};

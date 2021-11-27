import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

const initialState = {
    // stars: [],
    stars: localStorage.getItem('stars') 
    ? JSON.parse(localStorage.getItem('stars'))
    : [],
};

// creating context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('stars', JSON.stringify(state.stars))
    }, [state]);

    const addMediaToStars = (stars) => {
        dispatch({ type: "ADD_MEDIA_TO_STARS", payload: stars })
    }

    return (
        <GlobalContext.Provider value={{
            stars: state.stars,
            addMediaToStars
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
// reducer that tells store what to do with data when something is added
// action - tells reducer how to change the state
const store = (state, action) => {
    switch (action.type) {
        case "ADD_MEDIA_TO_STARS":
            return {
                ...state,
                stars: [action.payload, ...state.stars]
            }
        default:
            return state;
    }
};

export default store;

// import * as ActionTypes from "./ActionTypes";

// export const favorites = (state = [], action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_MEDIA_TO_STARS:
//             if (state.includes(action.payload)) {
//                 return state;
//             }
//             return state.concat(action.payload);

//         case ActionTypes.REMOVE_MEDIA_FROM_STARS:
//             return state.filter(favorite => favorite !== action.payload);

//         default:
//             return state;
//     }
// };
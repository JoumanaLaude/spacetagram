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
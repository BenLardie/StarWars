import {
    FETCH_STARSHIPS_BEGIN,
    FETCH_STARSHIPS_SUCCESS,
    FETCH_STARSHIPS_FAILURE
} from "../actions/starshipActions";

const initialState = {
    starships: [],
    loading: false,
    url: 'https://swapi.co/api/starships',
    previous_url: null, 
    error: null
};

export default function productReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_STARSHIPS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_STARSHIPS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the people with the ones from the server
            return {
                ...state,
                loading: false,
                starships: [...state.starships, ...action.payload.starships.results],
                url: action.payload.starships.next,
                previous_url: action.payload.starships.previous,
            };

        case FETCH_STARSHIPS_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have people to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the people
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                people: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
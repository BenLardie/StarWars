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
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_STARSHIPS_SUCCESS:
            return {
                ...state,
                loading: false,
                starships: [...state.starships, ...action.payload.starships.results],
                url: action.payload.starships.next,
                previous_url: action.payload.starships.previous,
            };

        case FETCH_STARSHIPS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                people: []
            };

        default:
            return state;
    }
}
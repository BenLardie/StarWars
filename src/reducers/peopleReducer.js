import {
    FETCH_PEOPLE_BEGIN,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE
} from "../actions/peopleActions";

const initialState = {
    people: [],
    loading: false,
    url: 'https://swapi.dev/api/people/',
    previous_url: 'https://swapi.co/api/people/1', 
    error: null
};

export default function productReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_PEOPLE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                people: [...state.people, ...action.payload.people.results],
                url: action.payload.people.next,
                previous_url: action.payload.people.previous,
            };

        case FETCH_PEOPLE_FAILURE:
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

import {
    FETCH_PEOPLE_BEGIN,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE
  } from "../actions/peopleActions";
  
  const initialState = {
    people: [],
    loading: false,
    url: 'https://swapi.co/api/people/',
    error: null
  };
  
  export default function productReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FETCH_PEOPLE_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PEOPLE_SUCCESS:
        // All done: set loading "false".
        // Also, replace the people with the ones from the server
        console.log(action)
        return {
          ...state,
          loading: false,
          people: [...state.people, ...action.payload.people.results],
          url: action.payload.people.next
        };
  
      case FETCH_PEOPLE_FAILURE:
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
  
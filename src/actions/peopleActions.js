// import store from '../store'
// store.getState().otherReducer.url

function getPeople() {
    return fetch('https://swapi.co/api/people/')
        .then(handleErrors)
        .then(res => res.json());
}

function getMorePeople() {
    let i = 2
    return fetch(`https://swapi.co/api/people/?page=${i}`)
        .then(handleErrors)
        .then(res => res.json());
        
}

export function fetchPeople() {
    return dispatch => {
        dispatch(fetchPeopleBegin());
        return getPeople()
            .then(json => {
                console.log(json)
                dispatch(fetchPeopleSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchPeopleFailure(error))
            );
    };
}

export function fetchMorePeople() {
    return dispatch => {
        dispatch(fetchPeopleBegin());
        return getMorePeople()
            .then(json => {
                console.log(json)
                dispatch(fetchPeopleSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchPeopleFailure(error))
            );
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_PEOPLE_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PEOPLE_SUCCESS =
    "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PEOPLE_FAILURE =
    "FETCH_PEOPLE_FAILURE";

export const fetchPeopleBegin = () => ({
    type: FETCH_PEOPLE_BEGIN
});

export const fetchPeopleSuccess = people => ({
    type: FETCH_PEOPLE_SUCCESS,
    payload: { people }
});

export const fetchPeopleFailure = error => ({
    type: FETCH_PEOPLE_FAILURE,
    payload: { error }
});
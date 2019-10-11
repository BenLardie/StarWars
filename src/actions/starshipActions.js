function getStarships(url) {
    return fetch(url)
        .then(handleErrors)
        .then(res => res.json());
}


export function fetchStarships() {
    return (dispatch, getState) => {
        dispatch(fetchStarshipsBegin());
        const state = getState()
        const url = state.starships.url
        return getStarships(url)
            .then(json => {
                dispatch(fetchStarshipsSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchStarshipsFailure(error))
            );
            }
    };

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_STARSHIPS_BEGIN = "FETCH_STARSHIPS_BEGIN";
export const FETCH_STARSHIPS_SUCCESS =
    "FETCH_STARSHIPS_SUCCESS";
export const FETCH_STARSHIPS_FAILURE =
    "FETCH_STARSHIPS_FAILURE";

export const fetchStarshipsBegin = () => ({
    type: FETCH_STARSHIPS_BEGIN
});

export const fetchStarshipsSuccess = starships => ({
    type: FETCH_STARSHIPS_SUCCESS,
    payload: { starships }
});

export const fetchStarshipsFailure = error => ({
    type: FETCH_STARSHIPS_FAILURE,
    payload: { error }
});
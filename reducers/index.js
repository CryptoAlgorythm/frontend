// action types
import * as actions from '../constants/ActionTypes';

// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    wordFrequency: {}
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null
            }
            break;
        case actions.API_CALL_SUCCESS:
            console.log(payload)
            return {
                ...state,
                fetching: false,
                error: null,
                wordFrequency: payload
            }
            break;
        default:
            return state;
    }
}
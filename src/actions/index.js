import * as actions from '../constants/ActionTypes';

export const apiCallRequest = (data) => ({
    type: actions.API_CALL_REQUEST,
    payload: data
});

export const apiCallSuccess = (data) => ({
    type: actions.API_CALL_SUCCESS,
    payload: data
});

export const apiCallFailure = () => ({
    type: actions.API_CALL_FAILURE,
});
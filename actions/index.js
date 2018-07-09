import * as actions from '../constants/ActionTypes';

export const apiCallRequest = (data) => ({
    type: actions.API_CALL_REQUEST,
    payload: data
})
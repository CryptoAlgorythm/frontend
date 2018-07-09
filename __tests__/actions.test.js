import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

describe('actions', () => {
    const payload = 'data.txt'
    it('should create an action to set the uploaded file', () => {
        const expectedAction = {
            type: types.API_CALL_REQUEST,
            payload: payload
        }
        expect(actions.apiCallRequest(payload)).toEqual(expectedAction)
    });
})
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
    it('should indicate successful upload', () => {
        // const payload = 'data.txt'
        const payload = {
            0: { name: "hello", total: 3 },
            1: { name: "there", total: 1 },
            2: { name: "is", total: 1 },
            3: { name: "no", total: 1 },
            4: { name: "better", total: 1 },
            5: { name: "way", total: 1 },
            6: { name: "to", total: 1 },
            7: { name: "say", total: 1 },
            8: { name: "hello!", total: 1 },
            9: { name: "", total: 1 }
        }
        const expectedAction = {
            type: types.API_CALL_SUCCESS,
            payload: payload
        }
        expect(actions.apiCallSuccess(payload)).toEqual(expectedAction)
    })
})
import * as types from '../src/constants/ActionTypes';
import * as actions from '../src/actions';

describe('actions', () => {
    const payload = 'data.txt'
    it('should create an action to set the uploaded file', () => {
        const expectedAction = {
            type: types.API_CALL_REQUEST,
            payload: payload
        }
        expect(actions.apiCallRequest(payload)).toEqual(expectedAction);
    });

    it('should indicate successful upload', () => {
        const payload = {
            counts:
                {
                    hello: 4,
                    there: 1,
                    'is\'nt': 1,
                    any: 1,
                    better: 1,
                    way: 1,
                    to: 1,
                    say: 1,
                    'that\'s': 1,
                    amazing: 1,
                    'one-two': 1,
                    '2-1': 1
                },
            total: 15
        }
        const expectedAction = {
            type: types.API_CALL_SUCCESS,
            payload: payload
        }
        expect(actions.apiCallSuccess(payload)).toEqual(expectedAction);
    });

    it('should return an error that the upload was unsuccessful', () => {
        const expectedAction = {
            type: types.API_CALL_FAILURE,
        }
        expect(actions.apiCallFailure()).toEqual(expectedAction);
    });
});
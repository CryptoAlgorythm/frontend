import * as types from '../src/constants/ActionTypes';
import { reducer } from '../src/reducers';

describe('Reducers', () => {
    it('should return the initial state', () => {
        const initialState = {
            fetching: false,
            error: null,
            wordFrequency: {},
            total: 0
        }
        expect(reducer(undefined, {})).toEqual(initialState);
    })
    it('should handle API_CALL_SUCCESS', () => {
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

        const successAction = {
            fetching: false,
            error: null,
            wordFrequency: payload.counts,
            total: payload.total
        }
        expect(reducer(undefined,
            {
                type: types.API_CALL_SUCCESS,
                payload: payload
            })).toEqual(successAction);
    });

    it('should handle API_CALL_REQUEST', () => {
        const requestAction = {
            fetching: true,
            error: null,
            wordFrequency: {},
            total: 0
        }
        expect(reducer(undefined,
            {
                type: types.API_CALL_REQUEST,
                payload: 'data.txt'
            })).toEqual(requestAction);
    });

    it('should handle API_CALL_FAILURE', () => {
        const failedAction = {
            fetching: false,
            error: true,
            wordFrequency: {},
            total: 0
        }

        expect(reducer(undefined,
            {
                type: types.API_CALL_FAILURE,
            })).toEqual(failedAction);
    });
});
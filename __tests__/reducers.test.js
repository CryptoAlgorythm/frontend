import * as types from '../constants/ActionTypes';
import { reducer } from '../src/reducers';

describe('Reducers', () => {
    it('should return the initial state', () => {
        const initialState = {
            fetching: false,
            error: null,
            wordFrequency: {}
        }
        expect(reducer(undefined, {})).toEqual(initialState);
    })
    it('should handle API_CALL_SUCCESS', () => {
        const wordFrequency = {
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
        const successAction = {
            fetching: false,
            error: null,
            wordFrequency: wordFrequency
        }
        expect(reducer(undefined,
            {
                type: types.API_CALL_SUCCESS,
                payload: wordFrequency
            })).toEqual(successAction);
    });

    it('should handle API_CALL_REQUEST', () => {
        const requestAction = {
            fetching: true,
            error: null,
            wordFrequency: {}
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
            wordFrequency: {}
        }

        expect(reducer(undefined,
            {
                type: types.API_CALL_FAILURE,
            })).toEqual(failedAction);
    });
});
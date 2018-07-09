import * as actions from '../constants/ActionTypes';
import { reducer } from '../reducers';

describe('Reducers', () => {
    it('should return the initial state', () => {
        const initialState = {
            fetching: false,
            error: null,
            wordFrequency: {}
        }
        expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should handle API_CALL_REQUEST', () => {
        const requestAction = {
            fetching: true,
            error: null,
            wordFrequency: {}
        }
        expect(reducer(undefined,
            {
                type: actions.API_CALL_REQUEST,
                payload: 'data.txt'
            })).toEqual(requestAction)
    })
})
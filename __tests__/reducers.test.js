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
})
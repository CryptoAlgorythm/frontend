import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import App from '../src/App';

describe('App', () => {
    const state = {
        selectedfile: ''
    }
    let wrapper, store, container

    const mockStore = configureStore();

    beforeEach(() => {
        store = mockStore(state);
        wrapper = mount(<Provider store={store}><App /></Provider>);
    });

    it('App renders without crashing', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1)
    })

    it('should have an input field to upload file', () => {
        expect(wrapper.find('input[type="file"]').length).toBe(1);
    })
})
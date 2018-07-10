import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import App from '../src/components/App';

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
        let wrapper = shallow(<App />, { context: { store: mockStore() } });
        expect(wrapper.length).toEqual(1)
    })


    it('should have an input field to upload file', () => {
        expect(wrapper.find('input[type="file"]').length).toBe(1);
    })

    it('should display file selector after file input field clicked', () => {
        wrapper.find('input[type="file"]').simulate('change', {
            target: {
                files: [
                    'data.txt'
                ]
            }
        })
    })

    it('should have a button to upload file', () => {
        expect(wrapper.find('button').length).toBe(1);
    })
})
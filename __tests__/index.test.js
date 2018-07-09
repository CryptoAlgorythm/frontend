import React from 'react';
import App from '../src/App'

describe('App', () => {
    let wrapper, store, container

    it('App renders without crashing', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1)
    })

    it('should have an input field to upload file', () => {
        expect(wrapper.find('input[type="file"]').length).toBe(1);
    })
})
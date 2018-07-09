import React from 'react';

describe('App', () => {
    let wrapper, store, container

    it('App renders without crashing', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1)
    })
})
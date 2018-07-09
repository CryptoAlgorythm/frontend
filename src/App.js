import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <input type="file" />
            </div>
        )
    }
}

export default App;
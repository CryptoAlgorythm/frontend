import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <input type="file" />
                <button> Upload</button>
            </div>
        )
    }
}

export default App;
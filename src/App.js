import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { apiCallRequest } from './actions';

class App extends Component {
    state = {
        selectedFile: ''
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    render() {
        const { selectedFile } = this.state;
        const { fetching, error, fileUploadHandler, wordFrequency } = this.props;

        return (
            <div className="app container">
                <input type="file" />
                <button> Upload</button>
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { apiCallRequest } from '../actions';
import Table from './Table';

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
            <div className="App" className="container">
                <div className="jumbotron">
                    <h1>Welcome to Lateema's File Uploader</h1>
                    <p>Below you will upload a file to recieve the word count of each of the words in that file</p>
                </div>

                <input type="file" onChange={this.fileSelectedHandler} className="col-form-label col-5" />
                <button onClick={() => fileUploadHandler(selectedFile)} className="button btn-primary"> Upload</button>

                {
                    wordFrequency &&
                    <Table wordFrequency={wordFrequency} />
                }
                {
                    error &&
                    <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        error: state.error,
        wordFrequency: state.wordFrequency
    }
};

const mapDispatchToProps = dispatch => ({
    fileUploadHandler: selectedFile =>
        dispatch(apiCallRequest(selectedFile))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
import { takeLatest, call, put } from 'redux-saga/effects'
import { API_CALL_REQUEST } from '../constants/ActionTypes'
import { apiCallRequest, apiCallSuccess, apiCallFailure } from '../actions'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store,
// triggered in workerSaga
/*
takeLatest:
will trigger a new workerSaga 
when it sees an API_CALL_REQUEST,
while cancelling any previous triggered workerSaga still
in process to help avoid too frequent or unnecessary API calls
*/
export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, upload)
}

// function that makes the api request and returns a Promise
// for response
// worker saga: 
// makes the api call when watcher saga sees the action
/*
attempts to upload file, using another redux-saga helper function call
and stores the result (a resolved or failed Promise)
in a response variable
1. If the upload was a success,
we extract the parsed file data from the response
and dispatch an API_CALL_SUCCESS action
with the file data in the payload to the store,
using ANOTHER redux-saga helper function put
2. If there was an error with uploading the file,
we let the store know about it by dispatching an
API_CALL_FAILURE action with the error
*/
function* upload({ payload }) {
    try {
        const response = yield call(axios.post, 'http://localhost:3000/upload', payload)
        const { data } = response
        yield put(apiCallSuccess(data))

    } catch (e) {
        yield put(apiCallFailure())
    }
}

/*
function* creates a special kind of function called a generator
Generators can pause and restart - be exited and re-entered
and actually remember the context/state of the function 
over time
*/
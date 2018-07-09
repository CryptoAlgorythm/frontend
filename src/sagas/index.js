import { takeLatest, call, put } from 'redux-saga/effects';
import { API_CALL_REQUEST } from '../constants/ActionTypes';
import * as actions from '../actions';

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

function* upload({ payload }) {

}
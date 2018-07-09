import React from 'react';
import { render } from 'react-dom'
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import sagaMiddlewareFactory from 'redux-saga';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middlware
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)

// run the saga
sagaMiddleware.run(watcherSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
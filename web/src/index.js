import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux-starter-kit';
import goalModalReducers from './GoalModal/ducks/reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import mapComponentReducers from './Maps/ducks/reducers';

export function getStore() {
    const rootRoducer = combineReducers({
        goalModal: goalModalReducers,
        mapComponent: mapComponentReducers
    });

    const middleware = applyMiddleware(thunk);
    return createStore(rootRoducer, middleware);
}

ReactDOM.render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

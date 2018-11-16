import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import todosReducer from "./store/reducers/todos";
import visibilityFilterReducer from "./store/reducers/visibilityFilter";
import counterReducer from "./store/reducers/counters"

const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer,
    counters: counterReducer
});


const logger = state => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching action', action);
            const result = next(action);
            console.log('[Middleware] Next State', state.getState());
            return result;
        }
    }
}

const store = createStore( rootReducer , applyMiddleware(logger, thunk));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();

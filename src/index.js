import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { createStore, combineReducers } from 'redux';

import todosReducer from './store/reducers/todos';
import visibilityFilterReducer from './store/reducers/visibilityFilter';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});

const store = createStore( rootReducer );



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();

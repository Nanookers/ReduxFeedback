import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const  reviewList = (state=[], action) => {
    switch (action.type) {
        case 'SET_REVIEW_LIST':
            return action.payload;

        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        reviewList
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

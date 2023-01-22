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



const reviewInProgress = (state={}, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return {...state, feeling: action.payload}
        
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload}
        
        case 'SET_SUPPORT':
            return {...state, support: action.payload}
        
        case 'SET_COMMENT':
            return {...state, comments: action.payload}

        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        reviewList,
        reviewInProgress
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

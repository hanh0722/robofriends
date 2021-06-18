import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './container/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { setRobots, requestRobots } from './reducer';
import {createLogger} from 'redux-logger';

const logger = createLogger();

// we combine all reducers in rootReducers
const rootReducers = combineReducers({setRobots, requestRobots});
// thunkMiddleware using for returning a function not an object => waiting for a function
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));
// go to thunkMiddleware first 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

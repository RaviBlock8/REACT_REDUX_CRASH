import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import rootReducer from './reducers/index'

//STORE

//error:reducer is undefined.. whyyy????
const store=createStore(rootReducer)


//DISPATCH



ReactDOM.render(<App />, document.getElementById('root'));


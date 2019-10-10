import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'



function reducer(state, action){
    switch (action.type) {
        case 'ADD_CHARACTERS':
            return {
                ...state,
                characters: action.characters,
                url: action.url ,
            }
            default:
                return state
    }
  }
  
  const INITIAL_STATE = {
      characters: [],
      url: 'https://swapi.co/api/people/',
  }
  
  const store = createStore(reducer, INITIAL_STATE)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

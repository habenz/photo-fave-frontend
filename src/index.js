import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import './index.css'

import reducers from './redux'; // no need to specify index.js
import App from './App';

const oldState = JSON.parse(localStorage.getItem("state"));
let store;
if (oldState){
	store = createStore(reducers, oldState, compose(applyMiddleware(thunk)));

} else {
	store = createStore(reducers, compose(applyMiddleware(thunk)));
}


store.subscribe(() => {
	console.log(store.getState());
	localStorage.setItem("state", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
	    <App />
	  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

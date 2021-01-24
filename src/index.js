import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
const redux = require('redux')
const {combineReducers, createStore} = redux
import productsReducer from './reducers'

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer)
store.subscribe(()=> {
  console.log(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

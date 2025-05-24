// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import for redux-thunk
import rootReducer from './reducers';  // Import the combined reducers

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply redux-thunk middleware to the store

export default store;

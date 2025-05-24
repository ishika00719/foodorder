// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';  // Ensure cartReducer is imported
import authReducer from './authReducer';  // Use default import for authReducer

const rootReducer = combineReducers({
  auth: authReducer,  // Combine the authReducer
  cart: cartReducer,  // Combine the cartReducer
});

export default rootReducer;

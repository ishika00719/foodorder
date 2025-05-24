
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` instead of `react-dom`
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';


// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App inside the root container
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

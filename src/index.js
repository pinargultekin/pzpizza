import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App/App.jsx";
import { Provider } from 'react-redux';
import store from './store';


store.subscribe(() => console.log("the current state", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

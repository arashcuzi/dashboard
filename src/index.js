import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './modules/create-store';
import App from './containers/app';
import { makeClock } from './containers/clock';
import createConnection from './modules/create-connection';

import 'sanitize.css/sanitize.css';
import './index.css';

// Get the app root.
const target = document.querySelector('#root');

// Create the store
const store = getStore();

// Setup the websocket connection
const wsc = createConnection(actions, store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);

setTimeout(() => {
  document.getElementById('bangalore');
  new makeClock('bangalore');
  new makeClock('milwaukee');
  new makeClock('new_york');
}, 1000);

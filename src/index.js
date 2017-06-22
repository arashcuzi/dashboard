// Modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createConnection from './modules/create-connection';

// Redux
import { rootReducer, actions } from './reducers';
import createStore from './modules/create-store';

// Components
import App from './components/app';

// Styles
import 'sanitize.css/sanitize.css';
import './index.css';

// Get the app root.
const target = document.querySelector('#root');

// Create the store
const store = createStore(rootReducer);

// Setup the websocket connection
createConnection(actions, store);

// Initial View render
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  target
);

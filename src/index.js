// Modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import createConnection from './modules/create-connection';
import createSagaMiddleware from 'redux-saga'
import { watchPostAnything } from './sagas/clearMessage'

// Redux
import { rootReducer, actions } from './reducers';
import createStore from './modules/create-store';

// Components
import App from './containers/app';

// Styles
import 'sanitize.css/sanitize.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware()

// Get the app root.
const target = document.querySelector('#root');

// Create the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchPostAnything)

// Setup the websocket connection
createConnection(actions, store);

// Initial View render
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  target
);

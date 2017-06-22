import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/app'
import { makeClock } from './components/clock';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'sanitize.css/sanitize.css'
import './index.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)

setTimeout(() => {
  document.getElementById('bangalore');
  new makeClock('bangalore');
  new makeClock('milwaukee');
  new makeClock('new_york');
}, 1000)

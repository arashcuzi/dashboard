import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../home'

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
)

export default App

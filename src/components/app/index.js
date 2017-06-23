import React from 'react';
import Clock from '../clocks';
import PostAnything from '../post-anything';
import BuildStatus from '../build-status';

const App = () => (
  <div>
    <Clock />
    <PostAnything />
    <BuildStatus />
  </div>
)

export default App;

import React from 'react';
import Clocks from '../clocks';
import PostAnything from '../post-anything';
import BuildStatus from '../build-status';
import './styles.css';

const App = () => (
  <div>
    <Clocks />
    <div className="row">
      <div style={{ marginRight: '5px' }}>
        <BuildStatus />
      </div>
      <div>
        <BuildStatus />
      </div>
      <div style={{ marginLeft: '5px' }}>
        <BuildStatus />
      </div>
    </div>
    <div className="row">
      <PostAnything />
    </div>
  </div>
)

export default App;

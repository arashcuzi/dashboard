import React from 'react';
import Clock from '../clock';
import PostAnything from '../post-anything';
import BuildStatus from '../build-status';

import styles from './styles.css';

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

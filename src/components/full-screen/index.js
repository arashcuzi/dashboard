import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';

import jesse from './jesse.jpg';
import shawn from './shawn.jpg';

import './styles.css';

const getUserPic = (user) => {
  if (user === 'sch8134') {
    return jesse;
  } else {
    return shawn;
  }
};

const FullScreen = ({ status, user, show = true }) => {
  let result = <div />;

  if (show) {
    result = (
      <div className="full-screen-wrapper">
        <h1>You Broke It!</h1>
        <img src={getUserPic(user)} className="full-screen-img" />
        <h2>Culprit:</h2>
        <p>{ user }</p>
      </div>
    );
  }
  
  return result;
};

const mapStateToProps = state => ({
  status: state.buildStatus.status,
  user: state.buildStatus.user,
  show: state.fullScreen,
});

export default connect(mapStateToProps)(FullScreen);

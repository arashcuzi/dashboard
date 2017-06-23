import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';
import logo from './headshot.png';

import './styles.css';

const getColor = (status) => {
  if (status === 'FAIL') {
    return 'rgba(118, 0, 0, 0.9)';
  } else {
    return 'rgba(0, 0, 0, 0.65)';
  }
}

const Content = ({ status }) => (
  <p className="content">{ status }!</p>
);

const E2EStatus = ({status}) => {
  const avatar = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    opacity: 0.2,
  };

  const bg = {
    backgroundColor: getColor(status),
  };

  return (
    <Card title={'Build Status'} avatar={avatar} background={bg}>
      <Content status={status} />
    </Card>
  );
};

const mapStateToProps = state => ({
  status: state.e2eStatus.status,
});

export default connect(mapStateToProps)(E2EStatus);

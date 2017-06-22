import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';

const Content = ({ status, pic, user, repo, branch }) => (
  <div>
    <p><strong>Status:</strong>{ user }&nbsp;</p>
    {
      status === 'FAIL' ?
        <p><strong>Pic:</strong>{ pic }&nbsp;</p>
      : null
    }    
    <p><strong>User:</strong>{ user }&nbsp;</p>
    <p><strong>Repository:</strong>{ repo }&nbsp;</p>
    <p><strong>Branch:</strong>{ branch }&nbsp;</p>
  </div>
);

const BuildStatus = (props) => (
  <Card title={'Build Status'} avatar={'images/jenkins.jpeg'}>
    <Content {...props} />
  </Card>
);

const mapStateToProps = state => ({
  status: state.buildStatus.status,
  pic: state.buildStatus.pic,
  user: state.buildStatus.user,
  repo: state.buildStatus.repo,
  branch: state.buildStatus.branch,
});

export default connect(mapStateToProps)(BuildStatus);

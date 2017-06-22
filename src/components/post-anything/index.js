import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';

const Content = ({ message }) => (
  <p>{ message }</p>
);

const PostAnything = ({ message = '' }) => (
  <Card title={'Post Anything'}>
    <Content message={message} />
  </Card>
);

const mapStateToProps = state => ({
  message: state.postAnything.message,
});

export default connect(mapStateToProps)(PostAnything);

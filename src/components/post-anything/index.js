import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';

const Content = ({ message, user }) => (
  <p>{ message && user ? `${user}: ${message}` : '' }</p>
);

const PostAnything = ({ message = '', user = '' }) => (
  <Card title={'Post Anything'}>
    <Content message={message} user={user} />
  </Card>
);

const mapStateToProps = state => ({
  message: state.postAnything.message,
  user: state.postAnything.user
});

export default connect(mapStateToProps)(PostAnything);

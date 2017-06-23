import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';

const Content = ({ message, user }) => (
  <p>{ message && user ? `${user}: ${message}` : '' }</p>
);

const PostAnything = ({ messages = [] }) => (
  <Card title={'Post Anything'}>
    {
      messages.map(m => <Content message={m.message} user={m.user} />)
    }
  </Card>
);

const mapStateToProps = state => ({
  messages: state.postAnything.messages
});

export default connect(mapStateToProps)(PostAnything);

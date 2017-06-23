import React from 'react';
import { connect } from 'react-redux';
import Card from '../card';
import './postAnything.css';

const Content = ({ message, user }) => (
  <div className='post-anything'>
    <p className='user'>{ user }</p>
    <p className='message'>{ message }</p>
  </div>
);

const PostAnything = ({ messages = [] }) => (
  <Card title={'Post Anything'}>
    {
      messages.map((m, i) => <Content message={m.message} user={m.user} key={i} />)
    }
  </Card>
);

const mapStateToProps = state => ({
  messages: state.postAnything.messages
});

export default connect(mapStateToProps)(PostAnything);

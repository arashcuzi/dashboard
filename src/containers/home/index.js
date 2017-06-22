import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import { postAnything } from '../../modules/postAnything';

import CardContainer from '../cardContainer'

import Clock from '../../components/clock'
import PostAnything from '../../components/postAnything'

const Home = props => (
  <div>
    <Clock />
    <CardContainer>
      <PostAnything />
      <PostAnything />
      <PostAnything />
      <PostAnything />
      <PostAnything />
      <PostAnything />
      <PostAnything />
      <PostAnything />
    </CardContainer>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  postAnything
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

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
  <div className='container'>
    <Clock />
    <CardContainer>
      <PostAnything title="Jenkins" subtitle="Build Status" image="images/jenkins.jpeg" text={props.message} />
      <PostAnything title="Twitter" subtitle="@_ericelliott" text="I'm stepping up ongoing 1:1 mentorships..." />
      <PostAnything title="Shawn Petros" subtitle="Lunch?" text="LET'S GO!!! I'M STARVING!!!" />
      <PostAnything title="WeatherBot2000" subtitle="Current Weather" text="It is 69 degrees and sunny!" />
    </CardContainer>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  message: state.postAnything.message,
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

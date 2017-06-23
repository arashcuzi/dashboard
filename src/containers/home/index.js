import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postAnything } from '../../reducers/post-anything';

import CardContainer from '../cardContainer'

import Clock from '../../components/clock'
import Card from '../../components/postAnything'

const hiddenStyle = {
  display: 'none'
}

const Home = ({user, message}) => (
  <div className='container'>
    <Clock />
    <CardContainer>
      <Card title="Jenkins" subtitle="Build Status" image="images/jenkins.jpeg" text="Your build status, sir..." />
      <Card title="Twitter" subtitle="@_ericelliott" text="I'm stepping up ongoing 1:1 mentorships..." />
      <Card title={user} subtitle="" text={message} style={ message === '' ? hiddenStyle : '' } />
      <Card title="WeatherBot2000" subtitle="Current Weather" text="It is 69 degrees and sunny!" />
    </CardContainer>
  </div>
)

const mapStateToProps = state => ({
  message: state.postAnything.message,
  user: state.postAnything.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  postAnything
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

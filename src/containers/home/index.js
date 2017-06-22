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
import Clock from '../clock'
import PostAnything from '../postAnything'

const Home = props => (
  <div>
    <Clock />

    <PostAnything />

    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={() => props.postAnything('hello world!')}>Post Anything</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
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

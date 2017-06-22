import { combineReducers } from 'redux'
import counter from './counter'
import postAnything from './postAnything'

export default combineReducers({
  counter,
  postAnything
})

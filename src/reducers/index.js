import { combineReducers } from 'redux'
import { POST_ANYTHING, postAnything } from './post-anything'

export const rootReducer = () => combineReducers({
  postAnything
});

export const actions = [
  POST_ANYTHING,
];
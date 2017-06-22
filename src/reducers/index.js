import { combineReducers } from 'redux';
import { POST_ANYTHING, postAnything } from './post-anything';
import { BUILD_STATUS, buildStatus } from './build-status';

export const rootReducer = combineReducers({
  postAnything,
  buildStatus,
});

export const actions = [
  POST_ANYTHING,
  BUILD_STATUS,
];
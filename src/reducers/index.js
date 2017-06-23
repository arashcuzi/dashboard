import { combineReducers } from 'redux';
import { POST_ANYTHING, postAnything } from './post-anything';
import { BUILD_STATUS, buildStatus } from './build-status';
import { E2E_STATUS, e2eStatus } from './e2e-status';
import { FULL_SCREEN, fullScreen } from './full-screen';

export const rootReducer = combineReducers({
  postAnything,
  buildStatus,
  e2eStatus,
  fullScreen,
})

export const actions = [
  POST_ANYTHING,
  BUILD_STATUS,
  E2E_STATUS,
  FULL_SCREEN,
]

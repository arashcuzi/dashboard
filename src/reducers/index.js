import { combineReducers } from 'redux'
import { POST_ANYTHING, postAnything } from './post-anything'
import { BUILD_STATUS, buildStatus } from './build-status'
import { E2E_STATUS, e2eStatus } from './e2e-status'

export const rootReducer = combineReducers({
  postAnything,
  buildStatus,
  e2eStatus,
})

export const actions = [
  POST_ANYTHING,
  BUILD_STATUS,
  E2E_STATUS,
]

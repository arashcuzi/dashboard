import { put, takeLatest } from 'redux-saga/effects';
import { POST_ANYTHING } from '../../reducers/post-anything'; 

// Our worker Saga: will perform the delay task
function* thing() {
  debugger;
  
  yield put({ type: 'CLEAR_MESSAGE' });
}

// Our watcher Saga: spawn a new postAnything task on each POST_ANYTHING
function* watchPostAnything() {
  yield takeLatest(POST_ANYTHING, thing);
}

export default watchPostAnything;
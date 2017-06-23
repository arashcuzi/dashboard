import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { BUILD_STATUS } from '../../reducers/build-status'; 

// Our worker Saga: will perform the delay task
function* fullScreen(action) {
  if (action.payload.status === 'FAIL') {
    yield put({ type: 'FULL_SCREEN', payload: true });
    yield delay(10000);
    yield put({ type: 'FULL_SCREEN', payload: false });
  } 
}

// Our watcher Saga: spawn a new postAnything task on each POST_ANYTHING
function* watchPostAnything() {
  yield takeLatest(BUILD_STATUS, fullScreen);
}

export default watchPostAnything;
import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

// Our worker Saga: will perform the delay task
function* postAnything() {
  console.log('postAnything fired')
  yield delay(1000)
  yield put({ type: 'CLEAR_MESSAGE' })
}

// Our watcher Saga: spawn a new postAnything task on each POST_ANYTHING
export function* watchPostAnything() {
  yield takeEvery('POST_ANYTHING', postAnything)
}

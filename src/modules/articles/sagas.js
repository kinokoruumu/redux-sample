import {
  put,
  call,
  fork,
  takeLatest
} from 'redux-saga/effects'

import * as api from './api'
import { ActionTypes } from './constants'
import {
  successGetArticles,
  failureGetArticles
} from './actions'

function* requestArticles() {
  try {
    const response = yield call(api.getArticles)
    yield put(successGetArticles(response.data))
  } catch (error) {
    yield put(failureGetArticles(error))
  }
}

export function* watchRequestArticles() {
  yield takeLatest(ActionTypes.REQUEST_GET_ARTICLES, requestArticles)
}

export default [
  fork(watchRequestArticles)
]

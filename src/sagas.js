import { all } from 'redux-saga/effects'

import articlesSagas from './modules/articles/sagas'

export default function* sagas() {
  yield all([
    ...articlesSagas,
  ])
}

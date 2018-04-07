import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducer'
import sagas from '../sagas'
import history from '../router/history'

// setting middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
  logger,
  routerMiddleware(history),
  sagaMiddleware,
)

// create store
const store = createStore(
  reducer,
  middleware
)

// create store before run sagas.
sagaMiddleware.run(sagas)

export default store

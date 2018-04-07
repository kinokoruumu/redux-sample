import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import articlesReducer from '../modules/articles/reducer'

// combine reducers
export default combineReducers({
  routerReducer,
  articlesReducer
})

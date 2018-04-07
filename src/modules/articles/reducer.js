import updateObject from '../../helpers/updateObject'
import createReducer from '../../helpers/createReducer'
import { ActionTypes } from './constants'

const initialState = {
  articles: []
}

// 記事一覧の取得
const getArticles = (state, action) => {
  const articleObjects = action.payload.map(article => ({
    id: article.id,
    title: article.title,
    text: article.text
  }))
  return updateObject(state, {articles: articleObjects})
}

export default createReducer(initialState, {
  [ActionTypes.SUCCESS_GET_ARTICLES]: getArticles
})

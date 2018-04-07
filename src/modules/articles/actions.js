// 記事一覧の取得
import { ActionTypes } from "./constants";

export const requestGetArticles = () => ({
  type: ActionTypes.REQUEST_GET_ARTICLES
})

export const successGetArticles = payload => ({
    type: ActionTypes.SUCCESS_GET_ARTICLES,
    payload
})

export const failureGetArticles = errors => ({
  type: ActionTypes.FAILURE_GET_ARTICLES,
  errors: errors
})

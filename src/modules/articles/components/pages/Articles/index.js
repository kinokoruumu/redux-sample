import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ArticlesAction from '../../../actions'
import Article from '../../molecules/Article'

import './style.css'

class ArticlesPage extends Component {
  componentDidMount() {
    this.props.articlesAction.requestGetArticles()
  }

  render() {
    const {
      articles
    } = this.props.articlesReducerData
    return (
      <div>
        <h1>Articles</h1>
        <ul className="articles-container">
          {articles.map(article =>
            <li key={article.id} className="list">
              <Article
                title={article.title}
                text={article.text}
              />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articlesReducerData: state.articlesReducer
})

const mapDispatchToProps = dispatch => ({
  articlesAction: bindActionCreators(ArticlesAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage)

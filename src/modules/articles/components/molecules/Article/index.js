import React from 'react'
import Card from "../../atoms/Card/index";
import './style.css'

const Article = props =>(
  <Card>
    <div className="article">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  </Card>
)

export default Article

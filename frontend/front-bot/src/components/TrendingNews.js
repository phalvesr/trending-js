import React from 'react';
import './TrendingNews.css';

export default function TrendingNews(props) {
  const {link, name} = props
  return (
    <article className="news-wrapper">
      <img alt="article" src="https://via.placeholder.com/218x125.png?text=News+Image+Placeholder/" className="image"/>
      <span></span>
      <div className="news-text-info">
        <h3>{name}</h3>
        <a href={props.link}>Link for the trending ({link})</a>
      </div>
    </article>
  )
}
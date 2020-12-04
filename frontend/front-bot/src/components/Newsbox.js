import React from 'react';
import './Newsbox.css';
import TrendingNews from '../components/TrendingNews';

export default function Newsbox() {
  return (
    <div className="newsbox">
      <TrendingNews name="Pedro" link="https://www.youtube.com.br"/>
    </div>
  )
}
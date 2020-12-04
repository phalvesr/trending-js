import React from 'react';
import './App.css';
import Navbar from '../components/Navbar.js';
import Newsbox from '../components/Newsbox';
import SearchInput from '../components/SearchInput';
import RequestButton from '../components/RequestButton';

export default function App() {
  return (
    <main className="background">
      <Navbar />
      <div className="request-area">
        <SearchInput />
        <span></span>
        <RequestButton />
      </div>
      <div className="newsbox-wrapper">
        <Newsbox />
      </div>

    </main>
  )
}
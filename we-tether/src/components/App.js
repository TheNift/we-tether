/*
File Purpose: Basic webapp frontpage
Author: Jack Kill
Created: 2024-01-25
*/
import logo from '../assets/logo.svg';
import '../style/App.css';
// import { useState, useMemo } from 'react';

function App() {

  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="header-wrapper">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <div className="front-layer"></div>
        <div className="mountains-front"></div>
        <div className="mountains-back"></div>
        <div className="mountains-sun"></div>
        <div className="back-layer"></div>
      </div>
    </div>
  );
}

export default App;

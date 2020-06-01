import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build your <code>frontend</code> application with ReactJS!
        </p>
        <a
          className="App-link"
          href="http://localhost:1337"
          target="_self"
          rel="noopener noreferrer"
        >
          Here you set-up the API with Strapi.io
        </a>
      </header>
    </div>
  );
}

export default App;

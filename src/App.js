import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '50px', textAlign: 'center' }}>
        <h1 style={{ color: '#2e7d32' }}>Grassland Verein e.V. Berlin</h1>
        <p>Digital platform for Deutsch-Kamerunischer Kulturverein Grassland e.V. Berlin.</p>
        <hr style={{ width: '50%', margin: '20px auto' }} />
        <div className="contact-info">
          <h3>Developed by Frank Fru</h3>
          <p>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer">Website</a> | 
            <a href="https://github.com/chifru19" target="_blank" rel="noreferrer"> GitHub</a> | 
            <a href="https://www.linkedin.com/in/frankfru/" target="_blank" rel="noreferrer"> LinkedIn</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
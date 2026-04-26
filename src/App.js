import React from 'react';

function App() {
  const containerStyle = {
    backgroundColor: '#1a4731',
    color: '#fbbf24',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '3rem', margin: 0, textTransform: 'uppercase' }}>
        Deutsch-Kamerunischer
      </h1>
      <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>
        Grassland Kulturverein e.V.
      </h2>
      <div style={{ width: '60px', height: '4px', backgroundColor: '#fbbf24', margin: '20px auto' }}></div>
      <p style={{ color: 'white', fontSize: '1.2rem' }}>Kultur • Erbe • Solidarität</p>
      <footer style={{ marginTop: '50px', opacity: 0.5, fontSize: '10px', letterSpacing: '2px' }}>
        ENGINEERING BY FRANK FRU • 2026
      </footer>
    </div>
  );
}

export default App;
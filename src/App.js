import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        
        {/* Titel-Sektion */}
        <section style={{ marginBottom: '40px' }}>
          <h1 style={{ color: '#2e7d32', fontSize: '2.5rem' }}>Deutsch-Kamerunischer Kulturverein Grassland e.V.</h1>
          <p style={{ fontStyle: 'italic', color: '#666' }}>Digital Platform / Plateforme Digitale</p>
        </section>

        {/* Mehrsprachige Sektion */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', textAlign: 'left', marginBottom: '40px' }}>
          
          {/* Deutsch */}
          <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #de0000' }}>
            <h2 style={{ color: '#de0000' }}>Deutsch</h2>
            <p><strong>Zweck:</strong> Förderung der deutsch-kamerunischen Kultur und Zusammenarbeit in Berlin.</p>
            <p><strong>Status:</strong> Aktiv</p>
            <p><strong>Anschrift:</strong> Aroser Allee 110, 13407 Berlin</p>
          </div>

          {/* English */}
          <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #002366' }}>
            <h2 style={{ color: '#002366' }}>English</h2>
            <p><strong>Purpose:</strong> Promoting German-Cameroonian culture and cooperation in Berlin.</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Address:</strong> Aroser Allee 110, 13407 Berlin, Germany</p>
          </div>

          {/* Français */}
          <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #009b3a' }}>
            <h2 style={{ color: '#009b3a' }}>Français</h2>
            <p><strong>Objectif:</strong> Promotion de la culture et de la coopération germano-camerounaise à Berlin.</p>
            <p><strong>Statut:</strong> Actif</p>
            <p><strong>Adresse:</strong> Aroser Allee 110, 13407 Berlin, Allemagne</p>
          </div>
        </div>

        {/* Handelsregister Informationen */}
        <section style={{ background: '#fff', border: '1px solid #ddd', padding: '30px', borderRadius: '10px', textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '10px' }}>Offizielle Registerdaten / Official Registry Data</h2>
          <table style={{ width: '100%', maxWidth: '600px', margin: '20px auto', textAlign: 'left', borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Gericht / Court:</td><td>Amtsgericht Charlottenburg (Berlin)</td></tr>
              <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Register-Nummer:</td><td>VR 23156</td></tr>
              <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>OH-Nummer:</td><td>C-25329540</td></tr>
              <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Gründung / Founded:</td><td>05.02.2004 (Aktiv seit 22 Jahren)</td></tr>
              <tr><td style={{ padding: '8px', fontWeight: 'bold' }}>Sitz:</td><td>Berlin, Deutschland</td></tr>
            </tbody>
          </table>
        </section>

        {/* Entwickler Sektion */}
        <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <h3>Developed by Frank Fru</h3>
          <p>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#2e7d32', textDecoration: 'none' }}>Website</a> | 
            <a href="https://github.com/chifru19" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#2e7d32', textDecoration: 'none' }}>GitHub</a> | 
            <a href="https://www.linkedin.com/in/frankfru/" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#2e7d32', textDecoration: 'none' }}>LinkedIn</a>
          </p>
        </footer>

      </header>
    </div>
  );
}

export default App;
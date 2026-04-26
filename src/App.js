import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: 'Culture' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Merci / Thank you / Danke ${formData.name}! Registration successful.`);
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <header style={{ backgroundColor: '#1b5e20', color: '#fff', padding: '80px 20px', textAlign: 'center', borderBottom: '10px solid #f9a825' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Deutsch-Kamerunischer Kulturverein Grassland e.V.
        </h1>
        <p style={{ fontSize: '1.4rem', marginTop: '10px', fontWeight: '300' }}>
          Berlin Highlands: Preserving Tradition, Inspiring Youth
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- TRILINGUAL MISSION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '60px' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderTop: '6px solid #de0000', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#de0000' }}>Deutsch</h2>
            <p style={{ lineHeight: '1.6' }}>
              Förderung der deutsch-kamerunischen Kultur und Zusammenarbeit in Berlin. 
              Wir erhalten das kulturelle Erbe der Grassland-Region durch Tanz, Sprache und Gemeinschaft.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderTop: '6px solid #002366', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#002366' }}>English</h2>
            <p style={{ lineHeight: '1.6' }}>
              Promoting German-Cameroonian culture and cooperation in Berlin. 
              We preserve the cultural heritage of the Grassland region through dance, language, and community.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderTop: '6px solid #009b3a', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#009b3a' }}>Français</h2>
            <p style={{ lineHeight: '1.6' }}>
              Promotion de la culture et de la coopération germano-camerounaise à Berlin. 
              Nous préservons le patrimoine culturel de la région de Grassland par la danse, la langue et la communauté.
            </p>
          </div>
        </section>

        {/* --- SPECIAL GROUPS SECTION --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          {/* NGOTEH */}
          <section style={{ background: '#1b5e20', color: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2rem' }}>Ngoteh Dance Group</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              Our premier dance ensemble brings the rhythms of the Cameroon Highlands to the streets of Berlin. 
              Authentic costumes, traditional percussion, and high-energy performances.
            </p>
            <div style={{ marginTop: '20px', padding: '15px', border: '1px dashed #f9a825', borderRadius: '10px' }}>
              <p>📍 Rehearsals: Weekly in Berlin</p>
            </div>
          </section>

          {/* KIDS */}
          <section style={{ background: '#fffbe6', padding: '40px', borderRadius: '20px', border: '2px solid #f9a825' }}>
            <h2 style={{ color: '#e65100', fontSize: '2rem' }}>Grassland Kids Corner</h2>
            <p style={{ color: '#5d4037', fontSize: '1.1rem' }}>Building a bridge for the next generation:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '10px 0' }}>✅ Language Storytelling</li>
              <li style={{ margin: '10px 0' }}>✅ Traditional Arts & Crafts</li>
              <li style={{ margin: '10px 0' }}>✅ Youth Cultural Exchange</li>
            </ul>
          </section>
        </div>

        {/* --- OFFICIAL REGISTRY DATA --- */}
        <section style={{ background: '#f1f1f1', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '1px solid #ddd', marginBottom: '60px' }}>
          <h3 style={{ margin: '0 0 15px 0' }}>Official Information / Informationen</h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <span><strong>Court:</strong> Amtsgericht Charlottenburg</span>
            <span><strong>VR:</strong> 23156</span>
            <span><strong>Founded:</strong> 05.02.2004</span>
            <span><strong>Status:</strong> Aktiv</span>
          </div>
          <p style={{ marginTop: '15px' }}>📍 Aroser Allee 110, 13407 Berlin</p>
        </section>

        {/* --- REGISTRATION FORM --- */}
        <section style={{ backgroundColor: '#4e342e', color: '#fff', padding: '50px', borderRadius: '25px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem' }}>Join the Association</h2>
          <p>Register online to become a member or volunteer for activities.</p>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', maxWidth: '450px', margin: '30px auto', gap: '15px' }}>
            <input type="text" placeholder="Full Name" required style={{ padding: '15px', borderRadius: '8px', border: 'none' }} />
            <input type="email" placeholder="Email Address" required style={{ padding: '15px', borderRadius: '8px', border: 'none' }} />
            <select style={{ padding: '15px', borderRadius: '8px', border: 'none' }}>
              <option>General Membership</option>
              <option>Join Ngoteh Dance</option>
              <option>Kids Program Volunteer</option>
            </select>
            <button type="submit" style={{ backgroundColor: '#f9a825', color: '#4e342e', fontWeight: 'bold', padding: '15px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
              Submit Registration
            </button>
          </form>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#eee', borderTop: '1px solid #ddd' }}>
        <h3>Developed by Frank Fru</h3>
        <p>
          <a href="https://frankfru.com" style={{ color: '#1b5e20', margin: '0 10px', textDecoration: 'none', fontWeight: 'bold' }}>frankfru.com</a> | 
          <a href="https://github.com/chifru19" style={{ color: '#1b5e20', margin: '0 10px', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a> | 
          <a href="https://www.linkedin.com/in/frankfru/" style={{ color: '#1b5e20', margin: '0 10px', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>
        </p>
        <p style={{ marginTop: '20px', color: '#888' }}>© 2026 Grassland Verein e.V. Berlin</p>
      </footer>
    </div>
  );
}

export default App;
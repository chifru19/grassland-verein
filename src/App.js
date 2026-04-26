import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: 'Culture' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Merci / Thank you / Danke ${formData.name}!`);
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* HERO SECTION */}
      <header style={{ backgroundColor: '#1b5e20', color: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '8px solid #f9a825' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Deutsch-Kamerunischer Kulturverein Grassland e.V.</h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>Culture – Dance – Community | Berlin</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* TRILINGUAL INTRODUCTION */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #de0000', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#de0000' }}>Deutsch</h3>
            <p>Förderung der deutsch-kamerunischen Kultur und Zusammenarbeit in Berlin. Erhaltung des kulturellen Erbes der Grassland-Region.</p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #002366', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#002366' }}>English</h3>
            <p>Promoting German-Cameroonian culture and cooperation in Berlin. Preserving the cultural heritage of the Grassland region.</p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #009b3a', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#009b3a' }}>Français</h3>
            <p>Promotion de la culture et de la coopération germano-camerounaise à Berlin. Préservation du patrimoine culturel de la région de Grassland.</p>
          </div>
        </section>

        {/* NGOTEH & KIDS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' }}>
          <section style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderLeft: '8px solid #1b5e20' }}>
            <h2 style={{ color: '#1b5e20' }}>Dance Group: Ngoteh</h2>
            <p>Representing traditional rhythms and authentic costumes of the Grassland region in the heart of Berlin.</p>
          </section>
          <section style={{ background: '#fffbe6', padding: '30px', borderRadius: '15px', borderLeft: '8px solid #f9a825' }}>
            <h2 style={{ color: '#e65100' }}>Kids Activities</h2>
            <p>Educational programs, language storytelling, and traditional arts for the next generation.</p>
          </section>
        </div>

        {/* REGISTRY INFO */}
        <section style={{ background: '#eee', padding: '20px', borderRadius: '10px', textAlign: 'center', marginBottom: '50px' }}>
          <p><strong>Registry:</strong> Amtsgericht Charlottenburg | <strong>VR 23156</strong> | <strong>Founded:</strong> 05.02.2004</p>
          <p>Aroser Allee 110, 13407 Berlin</p>
        </section>

        {/* REGISTRATION FORM */}
        <section style={{ backgroundColor: '#4e342e', color: '#fff', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
          <h2>Join Us / Rejoignez-nous / Mitmachen</h2>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '20px auto', gap: '10px' }}>
            <input type="text" placeholder="Name" required style={{ padding: '10px', borderRadius: '5px' }} />
            <input type="email" placeholder="Email" required style={{ padding: '10px', borderRadius: '5px' }} />
            <button type="submit" style={{ backgroundColor: '#f9a825', padding: '12px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Register Now</button>
          </form>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '30px', fontSize: '0.9rem' }}>
        <p>Developed by Frank Fru | <a href="https://frankfru.com">frankfru.com</a></p>
      </header>
    </div>
  );
}

export default App;
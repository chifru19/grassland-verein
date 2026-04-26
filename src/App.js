import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: 'Culture' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! The President will review your registration for ${formData.interest}.`);
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh' }}>
      
      {/* HERO SECTION */}
      <header style={{ backgroundColor: '#1b5e20', color: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '8px solid #f9a825' }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Grassland Verein e.V. Berlin</h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>Preserving Heritage, Building Community | Culture – Dance – Future</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* NGOTEH DANCE GROUP */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '10px solid #f9a825', paddingLeft: '15px' }}>Dance Group: Ngoteh</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            <div style={{ flex: '1', minWidth: '300px', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                The <strong>Ngoteh Dance Group</strong> is the heartbeat of our association. Representing the traditional rhythms of the Grassland region, Ngoteh brings the energy of our ancestors to Berlin through authentic costumes, drums, and movement.
              </p>
              <button style={{ backgroundColor: '#1b5e20', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer' }}>Book a Performance</button>
            </div>
            <div style={{ flex: '1', minWidth: '300px', height: '250px', backgroundColor: '#e0e0e0', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#666' }}></span>
            </div>
          </div>
        </section>

        {/* KIDS ACTIVITIES */}
        <section style={{ marginBottom: '60px', backgroundColor: '#fffbe6', padding: '40px', borderRadius: '20px' }}>
          <h2 style={{ color: '#e65100' }}>Grassland Kids Corner</h2>
          <p>We believe our culture lives on through our children. Our kids' program focuses on:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', listStyle: 'none', padding: 0 }}>
            <li style={{ background: '#fff', padding: '15px', borderRadius: '10px' }}>🎨 Traditional Arts & Crafts</li>
            <li style={{ background: '#fff', padding: '15px', borderRadius: '10px' }}>🥁 Introduction to Drumming</li>
            <li style={{ background: '#fff', padding: '15px', borderRadius: '10px' }}>🌍 Language & Storytelling</li>
            <li style={{ background: '#fff', padding: '15px', borderRadius: '10px' }}>⚽ Community Youth Sports</li>
          </ul>
        </section>

        {/* GALLERY PLACEHOLDER */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#1b5e20' }}>Cultural Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ aspectRatio: '1/1', backgroundColor: '#d7ccc8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5d4037' }}>
                Event Photo {i}
              </div>
            ))}
          </div>
        </section>

        {/* REGISTRATION FORM */}
        <section id="register" style={{ backgroundColor: '#4e342e', color: '#fff', padding: '50px', borderRadius: '20px', textAlign: 'center' }}>
          <h2>Become a Member</h2>
          <p>Join the Deutsch-Kamerunischer Kulturverein Grassland e.V. today.</p>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '30px auto', gap: '15px' }}>
            <input type="text" placeholder="Full Name" required style={{ padding: '12px', borderRadius: '5px', border: 'none' }} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email Address" required style={{ padding: '12px', borderRadius: '5px', border: 'none' }} />
            <select style={{ padding: '12px', borderRadius: '5px', border: 'none' }}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}>
              <option value="General">General Membership</option>
              <option value="Ngoteh">Join Ngoteh Dance Group</option>
              <option value="Kids">Kids Activities Volunteer</option>
            </select>
            <button type="submit" style={{ backgroundColor: '#f9a825', color: '#4e342e', fontWeight: 'bold', border: 'none', padding: '15px', borderRadius: '5px', cursor: 'pointer' }}>
              Submit Registration
            </button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f1f1f1', borderTop: '1px solid #ddd' }}>
        <p>VR 23156 | Amtsgericht Charlottenburg</p>
        <p><strong>Developed by Frank Fru</strong></p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://frankfru.com" style={{ color: '#1b5e20', margin: '0 10px' }}>Website</a>
          <a href="https://linkedin.com/in/frankfru" style={{ color: '#1b5e20', margin: '0 10px' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
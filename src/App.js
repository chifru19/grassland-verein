import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration for the Grassland Verein has been received.`);
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* --- TOP BRANDING SECTION --- */}
      <header style={{ backgroundColor: '#fff', padding: '20px 0', textAlign: 'center', borderBottom: '5px solid #1b5e20' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img 
            src="/images/logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '180px', 
              width: '180px', 
              borderRadius: '50%', 
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              border: '4px solid #f9a825'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '2.8rem', color: '#1b5e20', margin: '15px 0 5px 0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- NAVIGATION --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '15px', color: 'white', display: 'flex', justifyContent: 'center', gap: '30px', fontWeight: 'bold', sticky: 'top', zIndex: 10 }}>
        <span style={{ cursor: 'pointer' }}>Home</span>
        <span style={{ cursor: 'pointer' }}>Meetings</span>
        <span style={{ cursor: 'pointer' }}>Ngoteh Group</span>
        <span style={{ cursor: 'pointer' }}>Support</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MONTHLY MEETING & EVENT GALLERY --- */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2rem' }}>
            Monthly Meeting Sessions & Event Gallery
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
            Our community meets every month to discuss cultural preservation, youth empowerment, and upcoming festivals.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>[Meeting Photo]</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#1b5e20', marginTop: 0 }}>Community Dialogue</h3>
                <p>Discussing the roadmap for the 2026 Cultural Festival and youth integration programs.</p>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px', backgroundColor: '#d7ccc8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>[Ngoteh Dance Photo]</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#1b5e20', marginTop: 0 }}>Ngoteh Rehearsals</h3>
                <p>Weekly sessions practicing the traditional rhythms and dances of the Grassland highlands.</p>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '200px', backgroundColor: '#fff9c4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>[Kids Corner Photo]</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#1b5e20', marginTop: 0 }}>Cultural Education</h3>
                <p>Engaging the next generation with language, fables, and traditional arts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BANKING & DONATIONS SECTION --- */}
        <section style={{ marginBottom: '80px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2.2rem', marginBottom: '20px' }}>Support Our Association</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Your financial contributions help us maintain our center in Berlin and fund our cultural workshops. 
              We are grateful for your support.
            </p>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ margin: '5px 0' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p style={{ margin: '5px 0' }}><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p style={{ margin: '5px 0' }}><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '220px', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '20px', display: 'inline-block' }}>
              <p style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '10px' }}>Scan to Donate</p>
              <img 
                src="/images/qr-code.jpg" 
                alt="Donation QR Code" 
                style={{ width: '180px', borderRadius: '10px' }} 
              />
            </div>
          </div>
        </section>

        {/* --- REGISTRATION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#1b5e20' }}>Become a Member</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} 
              />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', border: 'none', padding: '18px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem' }}>
                Join Grassland Verein
              </button>
            </form>
          </div>
          
          <div style={{ padding: '40px', backgroundColor: '#f0f0f0', borderRadius: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Association Registry</h3>
            <p><strong>Official Name:</strong> Deutsch-Kamerunischer Grassland Kulturverein e.V.</p>
            <p><strong>Register:</strong> Amtsgericht Charlottenburg (Berlin)</p>
            <p><strong>VR Number:</strong> 23156</p>
            <p><strong>Location:</strong> Berlin, Germany</p>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd', marginTop: '60px', backgroundColor: '#fff' }}>
        <p style={{ fontWeight: 'bold', color: '#1b5e20' }}>© 2026 Grassland Kulturverein e.V. Berlin</p>
        <p>Managed by Frank Fru</p>
        <div style={{ marginTop: '10px' }}>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#2c3e50' }}>Website</a> | 
            <a href="https://github.com/chifru19" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#2c3e50' }}>GitHub</a> | 
            <a href="https://www.linkedin.com/in/frankfru/" target="_blank" rel="noreferrer" style={{ margin: '0 10px', color: '#2c3e50' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
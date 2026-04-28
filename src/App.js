import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Function to handle Registration Form
  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration for Grassland Verein has been received.`);
    setFormData({ name: '', email: '' });
  };

  // --- REACTIVE CLICKABLE NAVIGATION LOGIC ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItemStyle = {
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background 0.3s'
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '6px solid #1b5e20' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img 
            src="/images/logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '200px', 
              width: '200px', 
              borderRadius: '50%', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              border: '4px solid #f9a825',
              backgroundColor: 'white'
            }} 
            onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Check+Public/Images"; }}
          />
        </div>
        <h1 style={{ fontSize: '2.8rem', color: '#1b5e20', margin: '20px 0 5px 0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- CLICKABLE NAVIGATION BAR --- */}
      <nav style={{ 
        backgroundColor: '#1b5e20', 
        padding: '10px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        fontWeight: 'bold', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)' 
      }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('ngoteh')} style={navItemStyle}>Ngoteh Group</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MONTHLY MEETINGS SECTION --- */}
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2.2rem' }}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginTop: '20px', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', fontSize: '1.6rem', marginTop: 0 }}>📅 Meeting Schedule</h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              We meet <strong>every second Saturday of the month</strong> to discuss cultural activities, community support, and member integration.
            </p>
            <div style={{ marginTop: '20px', padding: '20px', background: '#f9f9f9', borderRadius: '15px', border: '1px dashed #1b5e20' }}>
              <p style={{ fontSize: '1.2rem', margin: 0 }}><strong>📍 Location:</strong> Sprengelstr. 15, 13353 Berlin</p>
            </div>
          </div>
        </section>

        {/* --- NGOTEH GROUP SECTION --- */}
        <section id="ngoteh" style={{ marginBottom: '100px', scrollMarginTop: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2.2rem' }}>Ngoteh Cultural Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '25px' }}>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
              <div style={{ height: '220px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1b5e20', fontWeight: 'bold' }}>[Ngoteh Dance Photo]</div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#1b5e20', marginTop: 0 }}>Rhythms of Grassland</h3>
                <p>Preserving the traditional drumming and dance heritage of the Cameroon Highlands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER SECTION --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '80px', backgroundColor: '#fffbe6', padding: '50px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.2rem' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Teaching the next generation about their roots through storytelling, language workshops, and traditional crafts.
          </p>
        </section>

        {/* --- SUPPORT / BANKING SECTION --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '80px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2.5rem', marginBottom: '20px' }}>Support Our Association</h2>
            <p style={{ fontSize: '1.2rem' }}>Your contributions help us fund cultural workshops and maintain our community center in Berlin.</p>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ margin: '8px 0' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p style={{ margin: '8px 0' }}><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p style={{ margin: '8px 0' }}><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '220px', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', display: 'inline-block' }}>
              <p style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '10px' }}>Scan to Donate</p>
              <img 
                src="/images/qr-code.jpg" 
                alt="Donation QR Code" 
                style={{ width: '180px', height: '180px', objectFit: 'contain' }} 
                onError={(e) => { e.target.src = "https://via.placeholder.com/180?text=QR+Missing"; }}
              />
            </div>
          </div>
        </section>

        {/* --- REGISTRATION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#1b5e20' }}>Register as a Member</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} 
              />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', border: 'none', padding: '18px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem' }}>
                Join the Association
              </button>
            </form>
          </div>
          <div style={{ padding: '40px', backgroundColor: '#f0f0f0', borderRadius: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Registry Details</h3>
            <p><strong>Official Name:</strong> Deutsch-Kamerunischer Grassland Kulturverein e.V.</p>
            <p><strong>Register:</strong> Amtsgericht Charlottenburg (Berlin)</p>
            <p><strong>VR Number:</strong> 23156</p>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd', marginTop: '60px', backgroundColor: '#fff' }}>
        <p style={{ fontWeight: 'bold', color: '#1b5e20' }}>© 2026 Grassland Kulturverein e.V. Berlin</p>
        <p>Managed by Frank Fru</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://frankfru.com" style={{ margin: '0 10px', color: '#2c3e50' }}>Website</a> | 
          <a href="https://github.com/chifru19" style={{ margin: '0 10px', color: '#2c3e50' }}>GitHub</a> | 
          <a href="https://www.linkedin.com/in/frankfru/" style={{ margin: '0 10px', color: '#2c3e50' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // --- REACTIVE NAVIGATION LOGIC ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration has been received.`);
    setFormData({ name: '', email: '' });
  };

  const navItemStyle = {
    cursor: 'pointer',
    padding: '10px 15px',
    transition: '0.3s',
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '6px solid #1b5e20' }}>
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="/images/logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '180px', 
              width: '180px', 
              borderRadius: '50%', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              border: '4px solid #f9a825',
              backgroundColor: 'white'
            }} 
            onError={(e) => { e.target.src = "https://via.placeholder.com/180?text=Logo+In+Public/Images"; }}
          />
        </div>
        <h1 style={{ fontSize: '2.5rem', color: '#1b5e20', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>Sprengelstr. 15, 13353 Berlin</p>
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
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginTop: '20px' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              We invite all members to join our monthly gathering for community dialogue and cultural planning.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1b5e20' }}>
              📍 Location: Sprengelstr. 15, 13353 Berlin
            </p>
          </div>
        </section>

        {/* --- NGOTEH GROUP SECTION --- */}
        <section id="ngoteh" style={{ marginBottom: '100px', scrollMarginTop: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>Ngoteh Cultural Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '150px', backgroundColor: '#e8f5e9', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Traditional Dance</div>
              <p>Preserving Grassland heritage through dance and drumming.</p>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER SECTION --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '80px', backgroundColor: '#fffbe6', padding: '40px', borderRadius: '20px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>Cultural workshops, storytelling, and youth integration programs.</p>
        </section>

        {/* --- SUPPORT / BANKING SECTION --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '80px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825' }}>Support Our Mission</h2>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
              <p><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <div style={{ background: '#fff', padding: '15px', borderRadius: '15px', display: 'inline-block' }}>
              <p style={{ color: '#1b5e20', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' }}>Scan to Donate</p>
              <img 
                src="/images/qr-code.jpg" 
                alt="Donation QR" 
                style={{ width: '160px', height: '160px', objectFit: 'contain' }} 
              />
            </div>
          </div>
        </section>

        {/* --- REGISTRATION SECTION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#1b5e20' }}>Join the Association</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} 
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} 
              />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '15px', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '30px' }}>
            <h3>Registry Information</h3>
            <p>Amtsgericht Charlottenburg (Berlin)</p>
            <p>VR Number: 23156</p>
            <p>Managed by Frank Fru</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd' }}>
        <p>© 2026 Grassland Kulturverein e.V. Berlin</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}>frankfru.com</a> | 
          <a href="https://github.com/chifru19" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
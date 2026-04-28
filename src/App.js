import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // --- REACTIVE NAVIGATION LOGIC ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for the sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration for Grassland Verein has been received.`);
    setFormData({ name: '', email: '' });
  };

  const sectionHeaderStyle = {
    color: '#1b5e20',
    borderLeft: '8px solid #f9a825',
    paddingLeft: '15px',
    fontSize: '2.4rem',
    marginBottom: '30px'
  };

  const navItemStyle = {
    cursor: 'pointer',
    padding: '10px 15px',
    fontWeight: 'bold',
    transition: '0.3s'
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
              height: '200px', 
              width: '200px', 
              borderRadius: '50%', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              border: '4px solid #f9a825',
              backgroundColor: 'white'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '3rem', color: '#1b5e20', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- CLICKABLE REACTIVE NAVIGATION --- */}
      <nav style={{ 
        backgroundColor: '#1b5e20', 
        padding: '10px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>Gallery</span>
        <span onClick={() => scrollTo('ngoteh')} style={navItemStyle}>Ngoteh Group</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MONTHLY MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Our regular sessions take place at **Sprengelstr. 15, 13353 Berlin**. Join us for community dialogue and planning.
            </p>
          </div>
        </section>

        {/* --- MONTHLY GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ height: '220px', backgroundColor: '#e0e0e0', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc' }}>
                <span style={{ color: '#777' }}>[Meeting/Event Photo {i}]</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- NGOTEH GROUP & VIDEO --- */}
        <section id="ngoteh" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Ngoteh Cultural Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#1b5e20' }}>Dance & Performance</h3>
              <p>Showcasing the traditional dance and drumming heritage of the Grassland highlands.</p>
            </div>
            
            {/* VIDEO PLAYER SPACE */}
            <div style={{ backgroundColor: '#000', borderRadius: '20px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.8rem' }}>🎥</p>
                <p>Ngoteh Dance Group Video</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>(Link your MP4 or YouTube here)</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#fffbe6', padding: '50px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.5rem' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Pass down storytelling, language, and arts to the next generation.</p>
        </section>

        {/* --- SUPPORT / BANKING --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2.5rem' }}>Support Our Mission</h2>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', display: 'inline-block' }}>
              <p style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '10px' }}>Scan to Donate</p>
              <img 
                src="/images/qr-code.jpg" 
                alt="Donation QR Code" 
                style={{ width: '180px', height: '180px', objectFit: 'contain' }} 
              />
            </div>
          </div>
        </section>

        {/* --- REGISTRATION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2>Join the Association</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '15px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '40px' }}>
            <h3>Registry Info</h3>
            <p><strong>Amtsgericht Charlottenburg (Berlin)</strong> | VR 23156</p>
            <p>Managed by Frank Fru</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd' }}>
        <p>© 2026 Grassland Kulturverein e.V. Berlin</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://frankfru.com" style={{ margin: '0 10px' }}>frankfru.com</a> | 
          <a href="https://github.com/chifru19" style={{ margin: '0 10px' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
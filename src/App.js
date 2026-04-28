import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // --- REACTIVE NAVIGATION LOGIC ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
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

  const galleryImages = [
    '/images/ngoteh-01.jpg',
    '/images/ngoteh-02.jpg',
    '/images/ngoteh-03.jpg',
    '/images/ngoteh-04.jpg',
    '/images/ngoteh-05.jpg',
    '/images/ngoteh-06.jpg',
    '/images/ngoteh-07.jpg'
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ 
        position: 'relative',
        background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('/images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px', 
        textAlign: 'center', 
        color: 'white',
        borderBottom: '6px solid #f9a825' 
      }}>
        <div style={{ marginBottom: '20px' }}>
          <img src="/images/verein-logo.png" alt="Logo" style={{ height: '180px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', borderRadius: '12px', backgroundColor: 'white', padding: '10px' }} />
        </div>
        <h1 style={{ fontSize: '3rem', margin: '0', fontWeight: '800' }}>Deutsch-Kamerunischer Grassland Kulturverein e.V.</h1>
        <p style={{ fontSize: '1.2rem', color: '#f9a825', marginTop: '10px', fontWeight: 'bold' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      <nav style={{ backgroundColor: '#1b5e20', padding: '10px', color: 'white', display: 'flex', justifyContent: 'center', gap: '20px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>Gallery</span>
        <span onClick={() => scrollTo('ngoteh')} style={navItemStyle}>Ngoteh Group</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Our regular sessions take place at **Sprengelstr. 15, 13353 Berlin**. Join us for community dialogue.</p>
          </div>
        </section>

        <section id="gallery" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src={src} alt="Event" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </section>

        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '60px', borderRadius: '30px', textAlign: 'center' }}>
          <h2 style={{ color: '#f9a825', fontSize: '2.5rem' }}>Support Our Mission</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '15px' }}>
              <img src="/images/qr-code.png" alt="QR Code" style={{ width: '200px', height: '200px' }} />
              <p style={{ color: '#333', margin: '10px 0 0', fontWeight: 'bold' }}>Scan to Donate</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
            </div>
          </div>
        </section>

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
            <p>Amtsgericht Charlottenburg | VR 23156</p>
            <p>Built by Frank Fru | frankfru.com</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd' }}>
        <p>© 2026 Grassland Kulturverein e.V. Berlin. All Rights Reserved.</p>
        <div style={{ marginTop: '15px' }}>
          <a href="https://frankfru.com" style={{ margin: '0 10px', color: '#1b5e20', textDecoration: 'none' }}>frankfru.com</a> | 
          <a href="https://github.com/chifru19" style={{ margin: '0 10px', color: '#1b5e20', textDecoration: 'none' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
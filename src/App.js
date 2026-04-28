import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

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
    alert(`Thank you, ${formData.name}! Your registration has been received.`);
    setFormData({ name: '', email: '' });
  };

  // Your renamed community images
  const galleryImages = [
    '/images/ngoteh-01.jpg',
    '/images/ngoteh-02.jpg',
    '/images/ngoteh-03.jpg',
    '/images/ngoteh-04.jpg',
    '/images/ngoteh-05.jpg',
    '/images/ngoteh-06.jpg'
  ];

  const navItemStyle = { cursor: 'pointer', padding: '10px 15px', fontWeight: 'bold', transition: '0.3s' };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO SECTION WITH NGOTEH BACKGROUND --- */}
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
          <img 
            src="/images/verein-logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '180px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              borderRadius: '12px',
              backgroundColor: 'white',
              padding: '10px'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '2.8rem', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#f9a825', marginTop: '10px', fontWeight: 'bold' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- STICKY NAVIGATION --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '10px', color: 'white', display: 'flex', justifyContent: 'center', gap: '20px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>Gallery</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>Every Second Saturday</h3>
            <p>Join us at <strong>Sprengelstr. 15, 13353 Berlin</strong> for community dialogue.</p>
          </div>
        </section>

        {/* --- COMMUNITY GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', marginBottom: '30px' }}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src={src} alt={`Community ${idx}`} style={{ width: '100%', display: 'block', transition: '0.3s' }} />
              </div>
            ))}
          </div>
        </section>

        {/* --- SUPPORT / BANKING --- */}
        <section id="support" style={{ backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '25px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '2' }}>
            <h2 style={{ color: '#f9a825' }}>Support Our Mission</h2>
            <p><strong>Bank:</strong> BERLINER VOLKSBANK</p>
            <p><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
          </div>
          <div style={{ flex: '1', textAlign: 'center', background: '#fff', padding: '15px', borderRadius: '15px' }}>
             <p style={{ color: '#1b5e20', fontWeight: 'bold' }}>Scan to Donate</p>
             <img src="/images/qr-code.jpg" alt="QR Code" style={{ width: '160px' }} />
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#888' }}>
        <p>© 2026 Grassland Kulturverein e.V. | Berlin</p>
        <p>Infrastructure Engineered by <strong>Frank Fru</strong></p>
      </footer>
    </div>
  );
}
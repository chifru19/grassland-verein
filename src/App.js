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

  const sectionHeaderStyle = {
    color: '#1b5e20',
    borderLeft: '8px solid #f9a825',
    paddingLeft: '15px',
    fontSize: '2.4rem',
    marginBottom: '30px',
    fontWeight: '700'
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
      
      {/* --- HERO SECTION --- */}
      <header id="home" style={{ 
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        borderBottom: '6px solid #f9a825',
        background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('/images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px' 
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/verein-logo.png" 
            alt="Logo" 
            style={{ height: '180px', borderRadius: '15px', backgroundColor: 'white', padding: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} 
          />
        </div>
        <h1 style={{ fontSize: '3.2rem', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#f9a825', marginTop: '15px', fontWeight: 'bold' }}>
          Sprengelstr. 15, 13353 Berlin
        </p>
      </header>

      {/* --- NAVIGATION --- */}
      <nav style={{ 
        backgroundColor: '#1b5e20', 
        padding: '15px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px',
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>Gallery</span>
        <span onClick={() => scrollTo('ngoteh')} style={navItemStyle}>Ngoteh Group</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* --- MEETINGS SECTION --- */}
        <section id="meetings" style={{ marginBottom: '120px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', fontSize: '1.8rem', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              Our regular community sessions take place at **Sprengelstr. 15, 13353 Berlin**. 
              We invite all members to join us for cultural dialogue and highland heritage preservation.
            </p>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section id="gallery" style={{ marginBottom: '120px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                <img 
                  src={src} 
                  alt={`Grassland Culture ${idx + 1}`} 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block', transition: '0.4s' }} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- NGOTEH GROUP SECTION --- */}
        <section id="ngoteh" style={{ marginBottom: '120px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Ngoteh Cultural Group</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '25px', border: '1px solid #eee' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
              The Ngoteh Group showcases the traditional dance, rhythm, and highland drumming heritage 
              of the Grassland highlands, bringing authentic Cameroonian culture to the heart of Berlin.
            </p>
          </div>
        </section>

        {/* --- KIDS CORNER SECTION --- */}
        <section id="kids" style={{ marginBottom: '120px', scrollMarginTop: '100px', backgroundColor: '#fffbe6', padding: '60px', borderRadius: '40px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.8rem', marginBottom: '20px' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
            Investing in the future by passing down storytelling, language, and traditional arts 
            to the next generation of our community through interactive workshops.
          </p>
        </section>

        {/* --- SUPPORT & DONATION SECTION --- */}
        <section id="support" style={{ marginBottom: '120px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '80px 20px', borderRadius: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#f9a825', fontSize: '3rem', marginBottom: '40px' }}>Support Our Mission</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
              <img src="/images/qr-code.png" alt="Donate QR Code" style={{ width: '220px', height: '220px' }} />
              <p style={{ color: '#333', fontWeight: '800', marginTop: '15px', fontSize: '1.1rem' }}>SCAN TO DONATE</p>
            </div>
            <div style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              <p style={{ margin: '5px 0' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p style={{ margin: '5px 0' }}><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p style={{ margin: '5px 0' }}><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
        </section>

        {/* --- REGISTRATION & INFO SECTION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', marginTop: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginBottom: '25px' }}>Become a Member</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '18px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '18px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '18px', fontWeight: '800', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '1.1rem' }}>Submit Registration</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#1b5e20' }}>Association Registry</h3>
            <p style={{ fontSize: '1.1rem' }}><strong>Amtsgericht Charlottenburg (Berlin)</strong> | VR 23156</p>
            <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>Infrastructure Architecture by <strong>Frank Fru</strong></p>
            <div style={{ marginTop: '30px' }}>
              <a href="https://linkedin.com/in/frankfru" target="_blank" rel="noreferrer" style={{ color: '#1b5e20', textDecoration: 'none', fontWeight: '800', fontSize: '1.2rem', borderBottom: '2px solid #f9a825' }}>View LinkedIn Profile</a>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer style={{ textAlign: 'center', padding: '80px 20px', borderTop: '1px solid #eee', marginTop: '60px', backgroundColor: '#fff' }}>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>© 2026 Grassland Kulturverein e.V. Berlin. All Rights Reserved.</p>
        <div style={{ marginTop: '20px' }}>
          <a href="https://frankfru.com" style={{ margin: '0 15px', color: '#1b5e20', textDecoration: 'none', fontWeight: '600' }}>frankfru.com</a>
          <a href="https://github.com/chifru19" style={{ margin: '0 15px', color: '#1b5e20', textDecoration: 'none', fontWeight: '600' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = 
        element.getBoundingClientRect().top + 
        window.pageYOffset + 
        yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration has been received.`);
    setFormData({ name: '', email: '' });
  };

  // --- STYLES ---
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
    transition: '0.3s',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap'
  };

  const gridStyle = {
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '20px'
  };

  const imgCardStyle = {
    overflow: 'hidden', 
    borderRadius: '20px', 
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  };

  // --- IMAGE REPOSITORIES (Upload links here) ---
  const mainGalleryImages = [
    'images/ngoteh-leadership.jpg', 'images/ngoteh-01.jpg', 'images/ngoteh-02.jpg', 'images/ngoteh-03.jpg'
  ];

  const meetingGalleryImages = [
    'images/meeting-01.jpg', 'images/meeting-02.jpg', 'images/meeting-03.jpg', 'images/meeting-04.jpg'
  ];

  const kidsGalleryImages = [
    'images/kids-01.jpg', 'images/kids-02.jpg', 'images/kids-03.jpg', 'images/kids-04.jpg'
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO --- */}
      <header id="home" style={{ 
        textAlign: 'center', color: 'white', borderBottom: '6px solid #f9a825',
        background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '80px 20px' 
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img src="images/verein-logo.png" alt="Logo" style={{ height: '180px', borderRadius: '15px', backgroundColor: 'white', padding: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 style={{ fontSize: '2.8rem', margin: '0', fontWeight: '800' }}>Deutsch-Kamerunischer Kultur-Vereins</h1>
        <p style={{ fontSize: '1.2rem', color: '#f9a825', marginTop: '15px', fontWeight: 'bold' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- REACTIVE NAV --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '10px', color: 'white', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', position: 'sticky', top: 0, zIndex: 1000 }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('meeting-gallery')} style={{...navItemStyle, color: '#f9a825'}}>Meeting Gallery</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Section</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>General Gallery</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', border: '1px solid #eee', marginBottom: '30px' }}>
            <h3 style={{ color: '#e65100' }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem' }}>Join us for community dialogue at <strong>Sprengelstr. 15, 13353 Berlin</strong>.</p>
          </div>

          <div id="meeting-gallery" style={{ scrollMarginTop: '120px' }}>
            <h4 style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '20px' }}>Recent Meeting Highlights</h4>
            <div style={gridStyle}>
              {meetingGalleryImages.map((src, idx) => (
                <div key={idx} style={imgCardStyle}>
                  <img src={src} alt="Meeting" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- KIDS SECTION --- */}
        <section id="kids" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Kids & Youth Section</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '25px', marginBottom: '30px', border: '1px solid #eee' }}>
            <p style={{ fontSize: '1.1rem' }}>Preserving our heritage for the next generation through language, dance, and storytelling.</p>
          </div>
          <div style={gridStyle}>
            {kidsGalleryImages.map((src, idx) => (
              <div key={idx} style={imgCardStyle}>
                <img src={src} alt="Kids Section" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* --- GENERAL GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>General Event Gallery</h2>
          <div style={gridStyle}>
            {mainGalleryImages.map((src, idx) => (
              <div key={idx} style={imgCardStyle}>
                <img src={src} alt="Gallery" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* --- SUPPORT --- */}
        <section id="support" style={{ marginBottom: '80px', backgroundColor: '#1b5e20', color: 'white', padding: '60px 20px', borderRadius: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#f9a825', fontSize: '2.5rem', marginBottom: '30px' }}>Support Our Mission</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '20px' }}>
              <img src="images/qr-code.jpg" alt="Donate" style={{ width: '180px', height: '180px' }} />
              <p style={{ color: '#333', fontWeight: '800', marginTop: '10px' }}>SCAN TO DONATE</p>
            </div>
            <div style={{ fontSize: '1.2rem' }}>
              <p><strong>Bank: BERLINER VOLKSBANK</strong></p>
              <p>IBAN: DE27 1009 0000 7218 2980 06</p>
            </div>
          </div>
        </section>

        {/* --- FOOTER CONTENT --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3>Become a Member</h3>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '15px', fontWeight: '800', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <p><strong>Amtsgericht Charlottenburg</strong> | VR 23156</p>
            <p style={{ marginTop: '20px' }}><strong>Website Admin:</strong></p>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ color: '#1b5e20', textDecoration: 'none', fontWeight: '800', borderBottom: '2px solid #f9a825' }}>frankfru.com</a>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <p>© 2026 Deutsch-Kamerunischer Kultur-Vereins. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
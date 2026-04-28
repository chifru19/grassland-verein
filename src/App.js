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
    setFormData({
      name: '',
      email: ''
    });
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
    'images/ngoteh-leadership.jpg',
    'images/ngoteh-01.jpg',
    'images/ngoteh-02.jpg',
    'images/ngoteh-03.jpg',
    'images/ngoteh-04.jpg',
    'images/ngoteh-05.jpg',
    'images/ngoteh-06.jpg',
    'images/ngoteh-07.jpg'
  ];

  return (
    <div className="App" style={{ 
      backgroundColor: '#fdfbf7', 
      color: '#2c3e50', 
      minHeight: '100vh', 
      fontFamily: 'Segoe UI, sans-serif' 
    }}>
      
      {/* --- HERO SECTION: LOGO CENTERED --- */}
      <header id="home" style={{ 
        textAlign: 'center', 
        color: 'white', 
        borderBottom: '6px solid #f9a825',
        background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        padding: '100px 20px' 
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="images/verein-logo.png" 
            alt="Logo" 
            style={{ 
              height: '220px', 
              borderRadius: '15px', 
              backgroundColor: 'white', 
              padding: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)' 
            }} 
          />
        </div>
        <h1 style={{ fontSize: '3.2rem', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Kultur-Vereins
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#f9a825', marginTop: '15px', fontWeight: 'bold' }}>
          Sprengelstr. 15, 13353 Berlin
        </p>
      </header>

      <nav style={{ 
        backgroundColor: '#1b5e20', 
        padding: '15px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '25px', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000 
      }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>Gallery</span>
        <span onClick={() => scrollTo('activities')} style={navItemStyle}>Activities</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '25px', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100' }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.25rem' }}>
              Join us for community dialogue at <strong>Sprengelstr. 15, 13353 Berlin</strong>.
            </p>
          </div>
        </section>

        <section id="gallery" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Event Gallery</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                <img 
                  src={src} 
                  alt="Gallery" 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            ))}
          </div>
        </section>

        <section id="activities" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Upcoming Activities</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '25px', border: '1px solid #eee', textAlign: 'center' }}>
            <img 
              src="images/ngoteh-event-01.jpg" 
              alt="Activity" 
              style={{ width: '100%', maxWidth: '800px', borderRadius: '20px', marginBottom: '20px' }} 
            />
            <p style={{ fontSize: '1.2rem' }}>Stay tuned for our upcoming cultural performances and community festivals.</p>
          </div>
        </section>

        <section id="support" style={{ 
          marginBottom: '100px', 
          backgroundColor: '#1b5e20', 
          color: 'white', 
          padding: '80px 20px', 
          borderRadius: '40px', 
          textAlign: 'center' 
        }}>
          <h2 style={{ color: '#f9a825', fontSize: '3rem', marginBottom: '40px' }}>Support Our Mission</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px' }}>
              <img src="images/qr-code.png" alt="Donate" style={{ width: '220px', height: '220px' }} />
              <p style={{ color: '#333', fontWeight: '800', marginTop: '15px' }}>SCAN TO DONATE</p>
            </div>
            <div style={{ fontSize: '1.4rem' }}>
              <p><strong>Bank: BERLINER VOLKSBANK</strong></p>
              <p>IBAN: DE27 1009 0000 7218 2980 06</p>
              <p>BIC: BEVODEBBXXX</p>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
          <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2>Become a Member</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '18px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '18px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '18px', fontWeight: '800', border: 'none', borderRadius: '10px' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <h3>Association Registry</h3>
            <p><strong>Amtsgericht Charlottenburg</strong> | VR 23156</p>
            <p style={{ marginTop: '40px', fontWeight: 'bold' }}>Website Administrator:</p>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ color: '#1b5e20', textDecoration: 'none', fontWeight: '800', borderBottom: '2px solid #f9a825' }}>frankfru.com</a>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px 20px', borderTop: '1px solid #eee' }}>
        <p>© 2026 Deutsch-Kamerunischer Kultur-Vereins. All Rights Reserved.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://github.com/chifru19" style={{ color: '#1b5e20', margin: '0 10px' }}>GitHub</a>
          <a href="https://linkedin.com" style={{ color: '#1b5e20', margin: '0 10px' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
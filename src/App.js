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
    alert(`Thank you, ${formData.name}! Your registration has been received.`);
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

  // Reorganized Gallery: Leadership first, followed by numbered images
  const galleryImages = [
    '/images/ngoteh-leadership.jpg',
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
      
      {/* --- HERO / LOGO SECTION: CENTERED LOGO --- */}
      <header id="home" style={{ 
        position: 'relative',
        background: `linear-gradient(rgba(27, 94, 32, 0.8), rgba(27, 94, 32, 0.8)), url('/images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white',
        borderBottom: '6px solid #f9a825' 
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/verein-logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '200px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              borderRadius: '12px',
              backgroundColor: 'white',
              padding: '12px'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '3rem', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#f9a825', marginTop: '10px', fontWeight: 'bold' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- CLICKABLE NAVIGATION --- */}
      <nav style={{ 
        backgroundColor: '#1b5e20', 
        padding: '15px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '25px', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>Gallery</span>
        <span onClick={() => scrollTo('activities')} style={navItemStyle}>Activities</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* --- MONTHLY MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Our regular sessions take place at **Sprengelstr. 15, 13353 Berlin**. Join us for community dialogue and heritage preservation.
            </p>
          </div>
        </section>

        {/* --- DYNAMIC GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img 
                  src={src} 
                  alt={`Grassland Event ${idx + 1}`} 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- ACTIVITIES SECTION --- */}
        <section id="activities" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Upcoming Activities</h2>
          <div style={{ textAlign: 'center', background: '#fff', padding: '40px', borderRadius: '20px' }}>
            <img 
              src="/images/ngoteh-event-01.jpg" 
              alt="Upcoming Event" 
              style={{ width: '100%', maxWidth: '700px', borderRadius: '15px', marginBottom: '20px' }} 
            />
            <p style={{ fontSize: '1.2rem' }}>Experience the traditional rhythms and dance of the Ngoteh group at our next festival.</p>
          </div>
        </section>

        {/* --- KIDS CORNER --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#fffbe6', padding: '60px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.5rem' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Pass down storytelling, language, and arts to the next generation of our community.</p>
        </section>

        {/* --- SUPPORT / BANKING --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '60px', borderRadius: '30px', textAlign: 'center' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2.8rem', marginBottom: '30px' }}>Support Our Mission</h2>
            <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '15px', borderRadius: '15px', marginBottom: '30px' }}>
              <img src="/images/qr-code.png" alt="Donate QR" style={{ width: '200px', height: '200px' }} />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
              <p>Bank: BERLINER VOLKSBANK</p>
              <p>IBAN: DE27 1009 0000 7218 2980 06</p>
            </div>
        </section>

        {/* --- REGISTRATION & ADMIN --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2>Join the Association</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '15px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Register Now</button>
            </form>
          </div>
          <div style={{ padding: '40px' }}>
            <h3>Registry Info</h3>
            <p><strong>Amtsgericht Charlottenburg (Berlin)</strong> | VR 23156</p>
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Website Administrator:</p>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ color: '#1b5e20', fontSize: '1.2rem', fontWeight: '800' }}>frankfru.com</a>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd', backgroundColor: '#fff' }}>
        <p>© 2026 Grassland Kulturverein e.V. Berlin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
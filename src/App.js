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
    alert(`Thank you, ${formData.name}! Your registration for Grassland Verein has been received.`);
    setFormData({ name: '', email: '' });
  };

  const sectionHeaderStyle = {
    color: '#1b5e20',
    borderLeft: '8px solid #f9a825',
    paddingLeft: '20px',
    fontSize: '2.5rem',
    marginBottom: '35px',
    fontWeight: '800',
    textTransform: 'uppercase'
  };

  const galleryImages = [
    '/images/ngoteh-01.jpg',
    '/images/ngoteh-02.jpg',
    '/images/ngoteh-03.jpg',
    '/images/ngoteh-04.jpg',
    '/images/ngoteh-05.jpg',
    '/images/ngoteh-06.jpg'
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <header id="home" style={{ 
        background: `linear-gradient(rgba(27, 94, 32, 0.8), rgba(27, 94, 32, 0.8)), url('/images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        padding: '120px 20px', 
        textAlign: 'center', 
        color: 'white', 
        borderBottom: '10px solid #f9a825' 
      }}>
        <div style={{ marginBottom: '40px' }}>
          <img 
            src="/images/verein-logo.png" 
            alt="Grassland Logo" 
            style={{ height: '220px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderRadius: '20px', backgroundColor: 'white', padding: '20px' }} 
          />
        </div>
        <h1 style={{ fontSize: '3.8rem', margin: '0', fontWeight: '900', textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.6rem', color: '#f9a825', marginTop: '25px', fontWeight: 'bold', letterSpacing: '2px' }}>
          Sprengelstr. 15, 13353 Berlin | Unity and Heritage
        </p>
      </header>

      {/* --- STICKY NAVIGATION --- */}
      <nav style={{ 
        backgroundColor: '#1b5e20', 
        padding: '20px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
      }}>
        {['Home', 'Meetings', 'Gallery', 'Ngoteh', 'Kids', 'Support'].map((item) => (
          <span key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ cursor: 'pointer', fontWeight: '900', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            {item}
          </span>
        ))}
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* --- MEETINGS SECTION --- */}
        <section id="meetings" style={{ marginBottom: '120px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Sessions</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', fontSize: '2rem' }}>Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              We gather at Sprengelstr. 15, 13353 Berlin, to foster social integration, share mutual support, 
              and plan cultural festivities that showcase our rich Cameroon Grassland heritage to the public. 
              Our sessions are open to all community members seeking cultural connection and growth.
            </p>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section id="gallery" style={{ marginBottom: '120px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Community Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src={src} alt="Community" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* --- NGOTEH SECTION --- */}
        <section id="ngoteh" style={{ marginBottom: '120px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Ngoteh Dance Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
            <div style={{ background: '#fff', padding: '45px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                The Ngoteh Group preserves authentic Cameroon Grassland music and dance. Our performances 
                bring ancestral rhythms and vibrant traditional highland costumes to the city of Berlin. 
                We represent the heartbeat of our heritage through every drumbeat and movement.
              </p>
            </div>
            <div style={{ backgroundColor: '#000', borderRadius: '30px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '3rem' }}>🎥</p>
                <p style={{ fontWeight: 'bold' }}>Performance Video</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER SECTION --- */}
        <section id="kids" style={{ marginBottom: '120px', scrollMarginTop: '100px', backgroundColor: '#fffbe6', padding: '80px', borderRadius: '40px', border: '3px dashed #f9a825' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '3rem' }}>Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto' }}>
            Investing in the next generation by passing down storytelling, language, and cultural arts 
            to ensure our children grow up with a strong sense of identity and highland heritage. 
            Education is the foundation of our community's enduring future in Germany.
          </p>
        </section>

        {/* --- SUPPORT SECTION --- */}
        <section id="support" style={{ marginBottom: '120px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '80px', borderRadius: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#f9a825', fontSize: '3rem' }}>Support Our Mission</h2>
          <div style={{ marginTop: '30px', fontSize: '1.5rem', lineHeight: '2' }}>
            <p><strong>Bank:</strong> Berliner Volksbank</p>
            <p><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
            <p><strong>BIC:</strong> BEVODEBBXXX</p>
          </div>
        </section>

        {/* --- REGISTRATION SECTION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginBottom: '30px' }}>Join Us</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '18px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '18px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ background: '#f9a825', color: '#1b5e20', padding: '18px', fontWeight: '900', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ color: '#1b5e20', fontSize: '2rem' }}>Impressum</h3>
            <p><strong>Amtsgericht Charlottenburg</strong> | VR 23156</p>
            <p>Managing Director: Frank Fru | Berlin</p>
            <p style={{ marginTop: '40px', fontStyle: 'italic' }}>"Unity in Culture, Strength in Community."</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '80px', borderTop: '2px solid #eee', backgroundColor: '#fff' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>© 2026 Grassland Kulturverein e.V. Berlin</p>
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <a href="https://frankfru.com" style={{ textDecoration: 'none', color: '#1b5e20' }}>frankfru.com</a>
          <a href="https://github.com/chifru19" style={{ textDecoration: 'none', color: '#1b5e20' }}>GitHub</a>
          <a href="https://linkedin.com/in/frankfru" style={{ textDecoration: 'none', color: '#1b5e20' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
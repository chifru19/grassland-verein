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
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const navItemStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '1.1rem'
  };

  // Image Paths based on your public/images folder
  const galleryImages = [
    '/images/ngoteh-01.jpg',
    '/images/ngoteh-02.jpg',
    '/images/ngoteh-03.jpg',
    '/images/ngoteh-04.jpg',
    '/images/ngoteh-05.jpg',
    '/images/ngoteh-06.jpg'
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ 
        position: 'relative',
        background: `linear-gradient(rgba(27, 94, 32, 0.8), rgba(27, 94, 32, 0.8)), url('/images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white',
        borderBottom: '8px solid #f9a825' 
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/verein-logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '200px', 
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
              borderRadius: '15px',
              backgroundColor: 'white',
              padding: '12px'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '3.5rem', margin: '0', fontWeight: '900', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#f9a825', marginTop: '15px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Sprengelstr. 15, 13353 Berlin | Unity in Diversity
        </p>
      </header>

      {/* --- CLICKABLE REACTIVE NAVIGATION --- */}
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
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
      }}>
        {['Home', 'Meetings', 'Gallery', 'Ngoteh', 'Kids', 'Support'].map((item) => (
          <span key={item} onClick={() => scrollTo(item.toLowerCase())} style={navItemStyle}>{item}</span>
        ))}
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* --- MONTHLY MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', fontSize: '1.8rem', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Our regular sessions serve as a bridge for the community. We gather at **Sprengelstr. 15, 13353 Berlin** to discuss community welfare, cultural integration, and future projects. Everyone is welcome to join our dialogue.
            </p>
          </div>
        </section>

        {/* --- DYNAMIC EVENT GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <h2 style={sectionHeaderStyle}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.12)', border: '4px solid white' }}>
                <img 
                  src={src} 
                  alt={`Grassland Event ${idx + 1}`} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- NGOTEH GROUP & VIDEO --- */}
        <section id="ngoteh" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <h2 style={sectionHeaderStyle}>Ngoteh Cultural Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
            <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#1b5e20', fontSize: '1.7rem' }}>Dance & Performance</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                The Ngoteh Group represents the soul of our highland heritage. Through drumming and dance, 
                we preserve the stories of our ancestors and share them with the vibrant city of Berlin.
              </p>
            </div>
            <div style={{ backgroundColor: '#000', borderRadius: '25px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '2.5rem' }}>🎥</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Ngoteh Dance Group Video</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Experience the rhythm of the Grasslands</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER --- */}
        <section id="kids" style={{ marginBottom: '120px', scrollMarginTop: '120px', backgroundColor: '#fffbe6', padding: '60px', borderRadius: '40px', border: '2px dashed #f9a825' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.8rem', marginBottom: '20px' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Investing in the next generation through language lessons, traditional storytelling, and cultural arts. 
            We ensure our children grow up with a strong sense of identity.
          </p>
        </section>

        {/* --- SUPPORT / BANKING --- */}
        <section id="support" style={{ marginBottom: '120px', scrollMarginTop: '120px', backgroundColor: '#1b5e20', color: 'white', padding: '70px', borderRadius: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#f9a825', fontSize: '2.8rem', marginBottom: '30px' }}>Support Our Mission</h2>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-block', textAlign: 'left' }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '15px' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
            <p style={{ fontSize: '1.5rem', marginBottom: '15px' }}><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
            <p style={{ fontSize: '1.5rem' }}><strong>BIC:</strong> BEVODEBBXXX</p>
          </div>
        </section>

        {/* --- REGISTRATION & LEGAL --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', marginBottom: '50px' }}>
          <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
            <h2 style={{ marginBottom: '25px' }}>Join the Association</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '18px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '18px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '18px', fontWeight: '900', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '1.1rem', textTransform: 'uppercase' }}>Register Now</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ color: '#1b5e20', fontSize: '1.8rem' }}>Registry Information</h3>
            <p style={{ fontSize: '1.1rem', margin: '15px 0' }}><strong>Amtsgericht Charlottenburg (Berlin)</strong></p>
            <p style={{ fontSize: '1.1rem', margin: '15px 0' }}><strong>Vereinsregisternummer:</strong> VR 23156</p>
            <p style={{ fontSize: '1.1rem', margin: '15px 0' }}><strong>Board Management:</strong> Frank Fru</p>
            <p style={{ marginTop: '30px', opacity: 0.7, fontStyle: 'italic' }}>
              "Preserving our heritage, empowering our future."
            </p>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer style={{ textAlign: 'center', padding: '80px 20px', borderTop: '2px solid #eee', backgroundColor: '#fff' }}>
        <p style={{ fontWeight: 'bold', color: '#1b5e20' }}>© 2026 Deutsch-Kamerunischer Grassland Kulturverein e.V. Berlin</p>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <a href="https://frankfru.com" style={{ color: '#666', textDecoration: 'none' }}>frankfru.com</a>
          <a href="https://github.com/chifru19" style={{ color: '#666', textDecoration: 'none' }}>GitHub</a>
          <a href="https://linkedin.com/in/frankfru" style={{ color: '#666', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
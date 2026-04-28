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
    letterSpacing: '1px',
    fontWeight: '700'
  };

  const navItemStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '1.1rem',
    textTransform: 'uppercase'
  };

  // Image Paths based on your successfully uploaded public/images folder
  const galleryImages = [
    '/images/ngoteh-01.jpg',
    '/images/ngoteh-02.jpg',
    '/images/ngoteh-03.jpg',
    '/images/ngoteh-04.jpg',
    '/images/ngoteh-05.jpg',
    '/images/ngoteh-06.jpg'
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      
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
              height: '210px', 
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
              borderRadius: '15px',
              backgroundColor: 'white',
              padding: '15px'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '3.6rem', margin: '0', fontWeight: '900', textShadow: '2px 2px 10px rgba(0,0,0,0.5)', letterSpacing: '-1px' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#f9a825', marginTop: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Sprengelstr. 15, 13353 Berlin | Unity & Heritage
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
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        {['Home', 'Meetings', 'Gallery', 'Ngoteh', 'Kids', 'Support'].map((item) => (
          <span key={item} onClick={() => scrollTo(item.toLowerCase())} style={navItemStyle}>{item}</span>
        ))}
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* --- MONTHLY MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', fontSize: '1.9rem', marginTop: 0 }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.35rem', lineHeight: '1.9' }}>
              Our monthly gatherings are the heartbeat of our association. We meet at **Sprengelstr. 15, 13353 Berlin** to foster 
              social integration, provide mutual support, and plan cultural festivities that showcase our rich Cameroon Grassland 
              traditions to the Berlin public. All registered members and interested visitors are welcome.
            </p>
          </div>
        </section>

        {/* --- DYNAMIC EVENT GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <h2 style={sectionHeaderStyle}>Community Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {galleryImages.map((src, idx) => (
              <div key={idx} style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 12px 25px rgba(0,0,0,0.15)', border: '5px solid white' }}>
                <img 
                  src={src} 
                  alt={`Grassland Community Event ${idx + 1}`} 
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- NGOTEH GROUP & VIDEO --- */}
        <section id="ngoteh" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
          <h2 style={sectionHeaderStyle}>Ngoteh Cultural Performance Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
            <div style={{ background: '#fff', padding: '45px', borderRadius: '30px', boxShadow: '0 12px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#1b5e20', fontSize: '1.8rem', marginBottom: '20px' }}>Preserving Highland Rhythms</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                The Ngoteh Group is dedicated to the preservation and exhibition of authentic Cameroon Grassland music and 
                dance. Our performances feature traditional drumming and vibrant costumes that bring the energy of our 
                ancestral highlands to the multicultural landscape of Germany.
              </p>
            </div>
            <div style={{ backgroundColor: '#000', borderRadius: '30px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '3rem', marginBottom: '15px' }}>🎥</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Ngoteh Group In Action</p>
                <p style={{ fontSize: '1rem', opacity: 0.7, padding: '0 20px' }}>Authentic Highland Dance and Percussion Performance Video</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER --- */}
        <section id="kids" style={{ marginBottom: '120px', scrollMarginTop: '120px', backgroundColor: '#fffbe6', padding: '70px', borderRadius: '45px', border: '3px dashed #f9a825' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '3rem', marginBottom: '25px' }}>Grassland Kids & Youth Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.45rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7', color: '#5d4037' }}>
            We believe our children are the carriers of our light. Our youth programs focus on teaching native dialects, 
            traditional storytelling, and highland arts, ensuring that the second generation stays connected to their roots 
            while thriving in their German environment.
          </p>
        </section>

        {/* --- SUPPORT / BANKING --- */}
        <section id="support" style={{ marginBottom: '120px', scrollMarginTop: '120px', backgroundColor: '#1b5e20', color: 'white', padding: '80px 20px', borderRadius: '45px', textAlign: 'center' }}>
          <h2 style={{ color: '#f9a825', fontSize: '3rem', marginBottom: '35px' }}>Support Our Cultural Mission</h2>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '45px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.3)', display: 'inline-block', textAlign: 'left' }}>
            <p style={{ fontSize: '1.6rem', marginBottom: '15px', letterSpacing: '1px' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
            <p style={{ fontSize: '1.6rem', marginBottom: '15px', letterSpacing: '1px' }}><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
            <p style={{ fontSize: '1.6rem', letterSpacing: '1px' }}><strong>BIC:</strong> BEVODEBBXXX</p>
          </div>
        </section>

        {/* --- REGISTRATION & LEGAL --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          <div style={{ backgroundColor: '#fff', padding: '55px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '30px', fontSize: '2.2rem' }}>Become a Member</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <input type="text" placeholder="Full Legal Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '20px', borderRadius: '15px', border: '1px solid #ddd', fontSize: '1.1rem' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '20px', borderRadius: '15px', border: '1px solid #ddd', fontSize: '1.1rem' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '20px', fontWeight: '900', border: 'none', borderRadius: '15px', cursor: 'pointer', fontSize: '1.2rem', textTransform: 'uppercase', boxShadow: '0 5px 15px rgba(249,168,37,0.4)' }}>Submit Registration</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ color: '#1b5e20', fontSize: '2rem', marginBottom: '25px' }}>Impressum & Registry</h3>
            <p style={{ fontSize: '1.2rem', margin: '15px 0' }}><strong>Amtsgericht Charlottenburg (Berlin)</strong></p>
            <p style={{ fontSize: '1.2rem', margin: '15px 0' }}><strong>Vereinsregisternummer:</strong> VR 23156</p>
            <p style={{ fontSize: '1.2rem', margin: '15px 0' }}><strong>Board of Directors:</strong> Frank Fru</p>
            <p style={{ fontSize: '1.2rem', margin: '15px 0' }}><strong>Location:</strong> Sprengelstr. 15, 13353 Berlin, Germany</p>
            <p style={{ marginTop: '40px', opacity: 0.8, fontStyle: 'italic', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
              "Preserving our cultural heritage, empowering our community, and building a united future."
            </p>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer style={{ textAlign: 'center', padding: '100px 20px', borderTop: '3px solid #f9a825', backgroundColor: '#fff' }}>
        <p style={{ fontWeight: '800', color: '#1b5e20', fontSize: '1.2rem', marginBottom: '25px' }}>
          © 2026 Deutsch-Kamerunischer Grassland Kulturverein e.V. Berlin
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <a href="https://frankfru.com" style={{ color: '#555', textDecoration: 'none', fontWeight: '600' }}>Official Website</a>
          <a href="https://github.com/chifru19" style={{ color: '#555', textDecoration: 'none', fontWeight: '600' }}>GitHub Profile</a>
          <a href="https://linkedin.com/in/frankfru" style={{ color: '#555', textDecoration: 'none', fontWeight: '600' }}>LinkedIn Connect</a>
        </div>
      </footer>
    </div>
  );
}
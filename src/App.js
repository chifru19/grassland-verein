import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // --- REACTIVE NAVIGATION LOGIC ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Registration received.`);
    setFormData({ name: '', email: '' });
  };

  const sectionHeaderStyle = {
    color: '#1b5e20',
    borderLeft: '8px solid #f9a825',
    paddingLeft: '15px',
    fontSize: '2.2rem',
    marginBottom: '30px'
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '6px solid #1b5e20' }}>
        <img 
          src="/images/Logo.png" 
          alt="Grassland Verein Logo" 
          style={{ height: '180px', width: '180px', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '4px solid #f9a825', backgroundColor: 'white' }} 
        />
        <h1 style={{ fontSize: '2.8rem', color: '#1b5e20', margin: '20px 0 0 0', fontWeight: '800' }}>Grassland Kulturverein e.V.</h1>
      </header>

      {/* --- CLICKABLE NAVIGATION --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '10px', color: 'white', display: 'flex', justifyContent: 'center', gap: '20px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <span onClick={() => scrollTo('home')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Meetings</span>
        <span onClick={() => scrollTo('gallery')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Gallery</span>
        <span onClick={() => scrollTo('ngoteh')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Ngoteh Group</span>
        <span onClick={() => scrollTo('kids')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ cursor: 'pointer', fontWeight: 'bold', color: '#f9a825' }}>Support</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MEETINGS SECTION --- */}
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>📅 Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem' }}>Join us at <strong>Sprengelstr. 15, 13353 Berlin</strong> for our community gatherings.</p>
          </div>
        </section>

        {/* --- EVENT GALLERY SECTION --- */}
        <section id="gallery" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ height: '200px', backgroundColor: '#eee', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd' }}>
                <span style={{ color: '#888' }}>[Gallery Image {i}]</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- NGOTEH GROUP & VIDEO SECTION --- */}
        <section id="ngoteh" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={sectionHeaderStyle}>Ngoteh Dance Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#1b5e20' }}>Our Performances</h3>
              <p>Experience the authentic rhythms and traditional dance of the Grassland highlands.</p>
            </div>
            
            {/* VIDEO PLACEHOLDER */}
            <div style={{ background: '#000', borderRadius: '20px', overflow: 'hidden', height: '300px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
               <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <p>🎥 Ngoteh Performance Video</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>(Add Video Link Here)</p>
               </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#fffbe6', padding: '50px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.2rem' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center' }}>Passing heritage to the next generation through storytelling and arts.</p>
        </section>

        {/* --- SUPPORT SECTION --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2.5rem' }}>Support Us</h2>
            <p><strong>Bank:</strong> BERLINER VOLKSBANK | <strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <div style={{ background: '#fff', padding: '15px', borderRadius: '15px', display: 'inline-block' }}>
              <img src="/images/qr-code.jpg" alt="QR" style={{ width: '150px' }} />
            </div>
          </div>
        </section>

        {/* --- REGISTRATION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h2>Join the Association</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Name" required style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email" required style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '15px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '40px' }}>
            <p><strong>Amtsgericht Charlottenburg (Berlin)</strong> | VR 23156</p>
            <p>Managed by Frank Fru</p>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd' }}>
        <p>© 2026 Grassland Kulturverein e.V. Berlin</p>
      </footer>
    </div>
  );
}
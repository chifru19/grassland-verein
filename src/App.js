import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration for the Grassland Verein has been received.`);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '6px solid #1b5e20' }}>
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="/images/logo.png" 
            alt="Grassland Verein Logo" 
            style={{ 
              height: '200px', 
              width: '200px', 
              borderRadius: '50%', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              border: '4px solid #f9a825',
              backgroundColor: 'white'
            }} 
          />
        </div>
        <h1 style={{ fontSize: '3rem', color: '#1b5e20', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#666', marginTop: '10px' }}>Preserving Heritage | Empowering the Future</p>
      </header>

      {/* --- CLICKABLE NAVIGATION --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '15px', color: 'white', display: 'flex', justifyContent: 'center', gap: '25px', fontWeight: 'bold', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <span onClick={() => scrollToSection('home')} style={{ cursor: 'pointer', hover: { color: '#f9a825' } }}>Home</span>
        <span onClick={() => scrollToSection('meetings')} style={{ cursor: 'pointer' }}>Meetings</span>
        <span onClick={() => scrollToSection('ngoteh')} style={{ cursor: 'pointer' }}>Ngoteh Group</span>
        <span onClick={() => scrollToSection('kids')} style={{ cursor: 'pointer' }}>Kids Corner</span>
        <span onClick={() => scrollToSection('support')} style={{ cursor: 'pointer', color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MONTHLY MEETINGS SECTION --- */}
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2.4rem' }}>
            Monthly Meeting Sessions
          </h2>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginTop: '20px', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', fontSize: '1.6rem' }}>📅 Schedule & Location</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              We invite all members and interested community participants to our regular gatherings. 
              Meetings are held **every second Saturday of the month**.
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1b5e20' }}>
              📍 Location: Sprengelstr. 15, 13353 Berlin
            </p>
          </div>
        </section>

        {/* --- NGOTEH GROUP SECTION --- */}
        <section id="ngoteh" style={{ marginBottom: '100px', scrollMarginTop: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2.4rem' }}>
            Ngoteh Cultural Group
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '20px' }}>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '250px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1b5e20' }}>[Traditional Dance Photo]</div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ color: '#1b5e20' }}>Dance & Rhythm</h3>
                <p>Authentic performances showcasing the rich artistic traditions of the Grassland highlands.</p>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '250px', backgroundColor: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e65100' }}>[Drumming Workshop Photo]</div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ color: '#1b5e20' }}>Weekly Rehearsals</h3>
                <p>Join our performers every week as we practice drumming and preserve our oral history.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER SECTION --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '80px', backgroundColor: '#fffbe6', padding: '40px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.4rem' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px auto' }}>
            Passing our values, language, and stories to the next generation through fun and engaging activities.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
              <h4>Storytelling</h4>
              <p>Traditional Highland fables and history.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
              <h4>Traditional Arts</h4>
              <p>Beadwork and mask-making workshops.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
              <h4>Sports</h4>
              <p>Youth soccer and community teamwork.</p>
            </div>
          </div>
        </section>

        {/* --- SUPPORT & BANKING SECTION --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '80px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825', fontSize: '2.5rem' }}>Support Our Association</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Your donations directly fund our community center and cultural workshops.</p>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ margin: '8px 0' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p style={{ margin: '8px 0' }}><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p style={{ margin: '8px 0' }}><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '220px', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', display: 'inline-block' }}>
              <p style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '10px' }}>Scan to Donate</p>
              <img 
                src="/images/qr-code.jpg" 
                alt="Donation QR Code" 
                style={{ width: '180px', height: '180px', objectFit: 'contain' }} 
              />
            </div>
          </div>
        </section>

        {/* --- REGISTRATION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#1b5e20' }}>Become a Member</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email Address" required style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', border: 'none', padding: '18px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem' }}>Register Now</button>
            </form>
          </div>
          <div style={{ padding: '40px', backgroundColor: '#f0f0f0', borderRadius: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Official Registry</h3>
            <p><strong>Verein:</strong> Deutsch-Kamerunischer Grassland Kulturverein e.V.</p>
            <p><strong>Register:</strong> Amtsgericht Charlottenburg (Berlin)</p>
            <p><strong>VR Number:</strong> 23156</p>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd', marginTop: '60px', backgroundColor: '#fff' }}>
        <p style={{ fontWeight: 'bold', color: '#1b5e20' }}>© 2026 Grassland Kulturverein e.V. Berlin</p>
        <p>Platform Managed by Frank Fru</p>
        <div style={{ marginTop: '15px' }}>
          <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ margin: '0 15px', color: '#2c3e50' }}>Website</a>
          <a href="https://github.com/chifru19" target="_blank" rel="noreferrer" style={{ margin: '0 15px', color: '#2c3e50' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/frankfru/" target="_blank" rel="noreferrer" style={{ margin: '0 15px', color: '#2c3e50' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
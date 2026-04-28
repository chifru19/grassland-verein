import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your registration for the Grassland Verein has been received.`);
  };

  // --- CLICKABLE NAVIGATION LOGIC ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO / LOGO SECTION --- */}
      <header id="home" style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderBottom: '6px solid #1b5e20' }}>
        <img 
          src={process.env.PUBLIC_URL + "/images/logo.png"} 
          alt="Grassland Logo" 
          style={{ height: '220px', width: '220px', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '4px solid #f9a825', marginBottom: '20px', backgroundColor: '#fff' }} 
          onError={(e) => { e.target.src = "https://via.placeholder.com/220?text=Check+Public+Images+Folder"; }}
        />
        <h1 style={{ fontSize: '2.8rem', color: '#1b5e20', margin: '0', fontWeight: '800' }}>
          Deutsch-Kamerunischer Grassland Kulturverein e.V.
        </h1>
      </header>

      {/* --- CLICKABLE NAVIGATION BAR --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '15px', color: 'white', display: 'flex', justifyContent: 'center', gap: '30px', fontWeight: 'bold', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <span onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={{ cursor: 'pointer' }}>Meetings</span>
        <span onClick={() => scrollTo('ngoteh')} style={{ cursor: 'pointer' }}>Ngoteh Group</span>
        <span onClick={() => scrollTo('kids')} style={{ cursor: 'pointer' }}>Kids Corner</span>
        <span onClick={() => scrollTo('support')} style={{ cursor: 'pointer', color: '#f9a825' }}>Support</span>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MONTHLY MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginTop: '20px', border: '1px solid #eee' }}>
            <h3 style={{ color: '#e65100', marginTop: 0 }}>📅 Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem' }}>
              <strong>📍 Location:</strong> Sprengelstr. 15, 13353 Berlin
            </p>
            <p>Join us for our monthly dialogue on culture and community integration.</p>
          </div>
        </section>

        {/* --- NGOTEH GROUP --- */}
        <section id="ngoteh" style={{ marginBottom: '100px', scrollMarginTop: '100px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>Ngoteh Cultural Group</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '25px' }}>
            <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', padding: '20px' }}>
                <div style={{ height: '150px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>[Dance Session]</div>
                <h3>Traditional Rhythms</h3>
            </div>
          </div>
        </section>

        {/* --- KIDS CORNER --- */}
        <section id="kids" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#fffbe6', padding: '50px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center' }}>Grassland Kids Corner</h2>
          <p style={{ textAlign: 'center' }}>Fostering heritage through stories and workshops for the youth.</p>
        </section>

        {/* --- SUPPORT / BANKING --- */}
        <section id="support" style={{ marginBottom: '100px', scrollMarginTop: '100px', backgroundColor: '#1b5e20', color: 'white', padding: '50px', borderRadius: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#f9a825' }}>Support Our Mission</h2>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p><strong>Bank:</strong> BERLINER VOLKSBANK</p>
              <p><strong>IBAN:</strong> DE27 1009 0000 7218 2980 06</p>
              <p><strong>BIC:</strong> BEVODEBBXXX</p>
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', display: 'inline-block' }}>
              <p style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '10px' }}>Scan to Donate</p>
              <img src={process.env.PUBLIC_URL + "/images/qr-code.jpg"} alt="QR Code" style={{ width: '180px' }} />
            </div>
          </div>
        </section>

        {/* --- REGISTRY --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ padding: '30px', background: '#fff', borderRadius: '20px' }}>
            <h3 style={{ color: '#1b5e20' }}>Member Registration</h3>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required style={{ padding: '12px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email" required style={{ padding: '12px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ background: '#f9a825', padding: '15px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Register</button>
            </form>
          </div>
          <div style={{ padding: '30px' }}>
            <h3>Association Registry</h3>
            <p>Amtsgericht Charlottenburg (Berlin) | VR 23156</p>
            <p>Managed by Frank Fru</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #ddd' }}>
        <p>
          <a href="https://frankfru.com">frankfru.com</a> | 
          <a href="https://github.com/chifru19">GitHub</a> | 
          <a href="https://linkedin.com/in/frankfru/">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
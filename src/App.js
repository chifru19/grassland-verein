import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Language state: 'de', 'en', 'fr'
  const [lang, setLang] = useState('de');

  // Localization Content
  const content = {
    de: {
      home: "Home", meetings: "Treffen", meetingGallery: "Treffen Galerie", kids: "Kinderbereich", 
      gallery: "Allgemeine Galerie", support: "Unterstützung", register: "Registrieren",
      upcoming: "Kommende Veranstaltungen", registerTitle: "Werden Sie Mitglied",
      flyerBtn: "Flyer Herunterladen"
    },
    en: {
      home: "Home", meetings: "Meetings", meetingGallery: "Meeting Gallery", kids: "Kids Section", 
      gallery: "General Gallery", support: "Support Us", register: "Register",
      upcoming: "Upcoming Events", registerTitle: "Become a Member",
      flyerBtn: "Download Flyer"
    },
    fr: {
      home: "Accueil", meetings: "Réunions", meetingGallery: "Galerie des réunions", kids: "Section Enfants", 
      gallery: "Galerie Générale", support: "Soutenez-nous", register: "S'inscrire",
      upcoming: "Événements à venir", registerTitle: "Devenir Membre",
      flyerBtn: "Télécharger le Flyer"
    }
  };

  const t = content[lang];

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

  const cardStyle = {
    overflow: 'hidden', 
    borderRadius: '20px', 
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease'
  };

  // --- ASSET REPOSITORIES ---
  const mainGalleryImages = [
    'images/ngoteh-leadership.jpg', 'images/ngoteh-01.jpg', 'images/ngoteh-02.jpg', 
    'images/ngoteh-03.jpg', 'images/ngoteh-04.jpg', 'images/ngoteh-05.jpg',
    'images/ngoteh-06.jpg', 'images/ngoteh-07.jpg'
  ];

  const meetingGalleryImages = [
    'assets/meeting-01.jpg', 'assets/meeting-02.jpg', 'assets/meeting-03.jpg', 
    'assets/meeting-04.jpg', 'assets/meeting-05.jpg', 'assets/meeting-06.jpg', 
    'assets/meeting-07.jpg', 'assets/meeting-08.jpg', 'assets/meeting-09.jpg', 
    'assets/meeting-10.jpg'
  ];

  // Updated to Videos for Kids Section
  const kidsVideos = [
    'videos/kids-01.mp4', 'videos/kids-02.mp4', 'videos/kids-03.mp4', 
    'videos/kids-04.mp4', 'videos/kids-05.mp4', 'videos/kids-06.mp4'
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <style>{`
        .video-card:hover { transform: scale(1.03); cursor: pointer; }
        .lang-btn { cursor: pointer; background: #f9a825; border: none; border-radius: 4px; padding: 5px 8px; margin: 0 4px; font-weight: bold; }
      `}</style>
      
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
        <span onClick={() => scrollTo('home')} style={navItemStyle}>{t.home}</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>{t.meetings}</span>
        <span onClick={() => scrollTo('events')} style={navItemStyle}>{t.upcoming}</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>{t.kids}</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>{t.gallery}</span>
        <div style={{ marginLeft: '20px' }}>
          <button className="lang-btn" onClick={() => setLang('de')}>DE</button>
          <button className="lang-btn" onClick={() => setLang('en')}>EN</button>
          <button className="lang-btn" onClick={() => setLang('fr')}>FR</button>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.meetings}</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', border: '1px solid #eee', marginBottom: '30px' }}>
            <h3 style={{ color: '#e65100' }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem' }}>Join us for community dialogue at <strong>Sprengelstr. 15, 13353 Berlin</strong>.</p>
          </div>

          <div id="meeting-gallery" style={{ scrollMarginTop: '120px' }}>
            <h4 style={{ color: '#1b5e20', fontWeight: 'bold', marginBottom: '20px' }}>Recent Meeting Highlights</h4>
            <div style={gridStyle}>
              {meetingGalleryImages.map((src, idx) => (
                <div key={idx} style={cardStyle}>
                  <img src={src} alt={`Meeting ${idx + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- UPCOMING EVENTS (NEW) --- */}
        <section id="events" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.upcoming}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', background: '#fff', padding: '30px', borderRadius: '25px', border: '1px solid #eee' }}>
            <video controls style={{ width: '100%', borderRadius: '15px', backgroundColor: '#000' }}>
              <source src="videos/upcoming-event.mp4" type="video/mp4" />
            </video>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3>Featured Event</h3>
              <p>Join us for our upcoming community gathering. See the flyer for full details.</p>
              <a href="assets/event-flyer.pdf" download style={{ padding: '15px', backgroundColor: '#f9a825', color: '#1b5e20', borderRadius: '10px', textDecoration: 'none', fontWeight: '800', textAlign: 'center', marginTop: '10px' }}>
                {t.flyerBtn}
              </a>
            </div>
          </div>
        </section>

        {/* --- KIDS SECTION (VIDEOS) --- */}
        <section id="kids" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.kids}</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '25px', marginBottom: '30px', border: '1px solid #eee' }}>
            <p style={{ fontSize: '1.1rem' }}>Preserving our heritage for the next generation through language, dance, and storytelling.</p>
          </div>
          <div style={gridStyle}>
            {kidsVideos.map((src, idx) => (
              <div key={idx} className="video-card" style={cardStyle}>
                <video src={src} controls style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* --- GENERAL GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.gallery}</h2>
          <div style={gridStyle}>
            {mainGalleryImages.map((src, idx) => (
              <div key={idx} style={cardStyle}>
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
            <h3>{t.registerTitle}</h3>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ backgroundColor: '#f9a825', color: '#1b5e20', padding: '15px', fontWeight: '800', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>{t.register}</button>
            </form>
          </div>
          <div style={{ padding: '20px' }}>
            <p><strong>Amtsgericht Charlottenburg</strong> | VR 23156</p>
            <p style={{ marginTop: '20px' }}><strong>Website Admin:</strong></p>
            <a href="https://frankfru.com" target="_blank" rel="noreferrer" style={{ color: '#1b5e20', textDecoration: 'none', fontWeight: '800', borderBottom: '2px solid #f9a825' }}>frankfru.com</a>
            <p style={{ marginTop: '10px' }}>
              <a href="https://github.com/chifru19" target="_blank" rel="noreferrer" style={{ color: '#2c3e50', fontSize: '0.9rem', marginRight: '10px', textDecoration: 'none' }}>GitHub</a> | 
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#2c3e50', fontSize: '0.9rem', marginLeft: '10px', textDecoration: 'none' }}>LinkedIn</a>
            </p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <p>© 2026 Deutsch-Kamerunischer Kultur-Vereins. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
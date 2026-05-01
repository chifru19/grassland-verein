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
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  // --- DATA REPOSITORIES (Added '/' prefix to fix pathing) ---

  const mainGalleryImages = [
    '/images/ngoteh-leadership.jpg', '/images/ngoteh-01.jpg', '/images/ngoteh-02.jpg', 
    '/images/ngoteh-03.jpg', '/images/ngoteh-04.jpg', '/images/ngoteh-05.jpg',
    '/images/ngoteh-06.jpg', '/images/ngoteh-07.jpg'
  ];

  const meetingGalleryImages = [
    '/assets/meeting-01.jpg', '/assets/meeting-02.jpg', '/assets/meeting-03.jpg', 
    '/assets/meeting-04.jpg', '/assets/meeting-05.jpg', '/assets/meeting-06.jpg', 
    '/assets/meeting-07.jpg', '/assets/meeting-08.jpg', '/assets/meeting-09.jpg', 
    '/assets/meeting-10.jpg'
  ];

  // Updated Kids Gallery: 2 Videos + 4 Images
  const kidsGalleryItems = [
    { type: 'video', src: '/videos/kids-activity-01.mp4' },
    { type: 'video', src: '/videos/kids-dance-event.mp4' },
    { type: 'image', src: '/images/kids-01.jpg' },
    { type: 'image', src: '/images/kids-03.jpg' },
    { type: 'image', src: '/images/kids-04.jpg' },
    { type: 'image', src: '/images/kids-05.jpg' }
  ];

  // New Upcoming Events Gallery
  const upcomingEvents = [
    { type: 'image', src: '/images/event-placeholder.jpg' }
  ];

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* --- HERO --- */}
      <header id="home" style={{ 
        textAlign: 'center', color: 'white', borderBottom: '6px solid #f9a825',
        background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('/images/ngoteh-event-01.jpg')`, 
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '80px 20px' 
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img src="/images/verein-logo.png" alt="Logo" style={{ height: '180px', borderRadius: '15px', backgroundColor: 'white', padding: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 style={{ fontSize: '2.8rem', margin: '0', fontWeight: '800' }}>Deutsch-Kamerunischer Kultur-Vereins</h1>
        <p style={{ fontSize: '1.2rem', color: '#f9a825', marginTop: '15px', fontWeight: 'bold' }}>Sprengelstr. 15, 13353 Berlin</p>
      </header>

      {/* --- NAV --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '10px', color: 'white', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', position: 'sticky', top: 0, zIndex: 1000 }}>
        <span onClick={() => scrollTo('home')} style={navItemStyle}>Home</span>
        <span onClick={() => scrollTo('meetings')} style={navItemStyle}>Meetings</span>
        <span onClick={() => scrollTo('kids')} style={navItemStyle}>Kids Section</span>
        <span onClick={() => scrollTo('events')} style={navItemStyle}>Upcoming Events</span>
        <span onClick={() => scrollTo('gallery')} style={navItemStyle}>General Gallery</span>
        <span onClick={() => scrollTo('support')} style={{ ...navItemStyle, color: '#f9a825' }}>Support Us</span>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- MEETINGS --- */}
        <section id="meetings" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>Monthly Meeting Sessions</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', border: '1px solid #eee', marginBottom: '30px' }}>
            <h3 style={{ color: '#e65100' }}>Every Second Saturday of the Month</h3>
            <p style={{ fontSize: '1.2rem' }}>Join us at <strong>Sprengelstr. 15, 13353 Berlin</strong>.</p>
          </div>
          <div style={gridStyle}>
            {meetingGalleryImages.map((src, idx) => (
              <div key={idx} style={imgCardStyle}>
                <img src={src} alt="Meeting" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* --- KIDS SECTION --- */}
        <section id="kids" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>Kids & Youth Section</h2>
          <div style={gridStyle}>
            {kidsGalleryItems.map((item, idx) => (
              <div key={idx} style={imgCardStyle}>
                {item.type === 'video' ? (
                  <video controls style={{ width: '100%', height: '220px', objectFit: 'cover' }}>
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.src} alt="Kids Section" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- UPCOMING EVENTS --- */}
        <section id="events" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>Upcoming Events</h2>
          <div style={gridStyle}>
            {upcomingEvents.map((item, idx) => (
              <div key={idx} style={imgCardStyle}>
                {item.type === 'video' ? (
                  <video controls style={{ width: '100%', height: '220px', objectFit: 'cover' }}>
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.src} alt="Event" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- GENERAL GALLERY --- */}
        <section id="gallery" style={{ marginBottom: '80px' }}>
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
          <div style={{ fontSize: '1.2rem' }}>
            <p><strong>Bank: BERLINER VOLKSBANK</strong></p>
            <p>IBAN: DE27 1009 0000 7218 2980 06</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <p>© 2026 Deutsch-Kamerunischer Kultur-Vereins.</p>
      </footer>
    </div>
  );
}
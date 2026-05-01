import React, { useState } from 'react';

/**
 * Deutsch-Kamerunischer Kulturverein Website
 * Complete implementation with Upcoming Events, Galleries, and Translation
 */

// --- 1. TRANSLATION DATA ---
const i18n = {
  en: {
    nav: { home: "Home", meetings: "Meetings", kids: "Kids", events: "Events", gallery: "Gallery", support: "Support" },
    title: "Deutsch-Kamerunischer Kulturverein",
    subtitle: "Sprengelstr. 15, 13353 Berlin",
    meetingTitle: "Monthly Meeting Sessions",
    meetingSub: "Every Second Saturday of the Month",
    meetingDesc: "Join us for community dialogue at Sprengelstr. 15, 13353 Berlin.",
    kidsTitle: "Kids & Youth Section",
    kidsDesc: "Preserving our heritage for the next generation through language, dance, and storytelling.",
    eventsTitle: "Upcoming Events",
    eventsDesc: "Stay tuned for our upcoming cultural gatherings and activities!",
    galleryTitle: "General Event Gallery",
    supportTitle: "Support Our Mission",
    registerTitle: "Become a Member",
    registerBtn: "Register"
  },
  de: {
    nav: { home: "Startseite", meetings: "Treffen", kids: "Kinder", events: "Events", gallery: "Galerie", support: "Unterstützung" },
    title: "Deutsch-Kamerunischer Kulturverein",
    subtitle: "Sprengelstr. 15, 13353 Berlin",
    meetingTitle: "Monatliche Treffen",
    meetingSub: "Jeden zweiten Samstag im Monat",
    meetingDesc: "Besuchen Sie uns zum Dialog in der Sprengelstr. 15, 13353 Berlin.",
    kidsTitle: "Kinder- und Jugendbereich",
    kidsDesc: "Bewahrung unseres Erbes für die nächste Generation durch Sprache, Tanz und Geschichten.",
    eventsTitle: "Kommende Veranstaltungen",
    eventsDesc: "Bleiben Sie informiert über unsere nächsten Treffen und Aktivitäten!",
    galleryTitle: "Allgemeine Galerie",
    supportTitle: "Unterstützen Sie uns",
    registerTitle: "Mitglied werden",
    registerBtn: "Registrieren"
  },
  fr: {
    nav: { home: "Accueil", meetings: "Réunions", kids: "Enfants", events: "Événements", gallery: "Galerie", support: "Soutien" },
    title: "Deutsch-Kamerunischer Kulturverein",
    subtitle: "Sprengelstr. 15, 13353 Berlin",
    meetingTitle: "Réunions Mensuelles",
    meetingSub: "Chaque deuxième samedi du mois",
    meetingDesc: "Rejoignez-nous pour le dialogue communautaire au 15, Sprengelstr., 13353 Berlin.",
    kidsTitle: "Section Enfants et Jeunes",
    kidsDesc: "Préserver notre héritage pour la prochaine génération à travers la langue, la danse et les récits.",
    eventsTitle: "Événements à Venir",
    eventsDesc: "Restez à l'écoute de nos prochaines rencontres et activités !",
    galleryTitle: "Galerie d'Événements",
    supportTitle: "Soutenez notre mission",
    registerTitle: "Devenir Membre",
    registerBtn: "S'inscrire"
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const t = i18n[lang];

  // --- REPOSITORIES ---
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

  const kidsGalleryItems = [
    { type: 'video', src: 'videos/kids-activity-01.mp4' },
    { type: 'video', src: 'videos/kids-dance-event.mp4' },
    { type: 'image', src: 'images/kids-01.jpg' },
    { type: 'image', src: 'images/kids-03.jpg' },
    { type: 'image', src: 'images/kids-04.jpg' },
    { type: 'image', src: 'images/kids-05.jpg' }
  ];

  // UPCOMING EVENTS - Add new items here when you have them!
  const upcomingEvents = [
    { type: 'image', src: 'images/event-placeholder.jpg' } 
  ];

  // --- FUNCTIONS ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}!`);
    setFormData({ name: '', email: '' });
  };

  // --- STYLES ---
  const sectionHeaderStyle = { color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2rem', marginBottom: '30px', fontWeight: '700' };
  const navItemStyle = { cursor: 'pointer', padding: '10px 15px', fontWeight: 'bold', color: 'white', fontSize: '0.9rem' };
  const imgCardStyle = { overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' };
  const mediaStyle = { width: '100%', height: '220px', objectFit: 'cover' };

  return (
    <div style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* LANGUAGE SWITCHER */}
      <div style={{ textAlign: 'right', padding: '15px', backgroundColor: '#fdfbf7' }}>
        {['en', 'de', 'fr'].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{ margin: '0 5px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: lang === l ? 'bold' : 'normal' }}>{l}</button>
        ))}
      </div>

      <header id="home" style={{ textAlign: 'center', color: 'white', borderBottom: '6px solid #f9a825', background: '#1b5e20', padding: '80px 20px' }}>
        <img src="images/verein-logo.png" alt="Logo" style={{ height: '150px', borderRadius: '15px', backgroundColor: 'white', padding: '10px', marginBottom: '20px' }} />
        <h1 style={{ margin: 0 }}>{t.title}</h1>
        <p style={{ color: '#f9a825', fontWeight: 'bold' }}>{t.subtitle}</p>
      </header>

      <nav style={{ backgroundColor: '#1b5e20', display: 'flex', justifyContent: 'center', padding: '10px', position: 'sticky', top: 0, zIndex: 1000 }}>
        {Object.entries(t.nav).map(([key, label]) => (
          <span key={key} onClick={() => scrollTo(key)} style={navItemStyle}>{label}</span>
        ))}
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* MEETINGS */}
        <section id="meetings" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.meetingTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {meetingGalleryImages.map((src, idx) => (
              <div key={idx} style={imgCardStyle}><img src={src} alt="Meeting" style={mediaStyle} /></div>
            ))}
          </div>
        </section>

        {/* KIDS */}
        <section id="kids" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.kidsTitle}</h2>
          <p style={{ marginBottom: '30px' }}>{t.kidsDesc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {kidsGalleryItems.map((item, idx) => (
              <div key={idx} style={imgCardStyle}>
                {item.type === 'video' ? (
                  <video controls style={mediaStyle}><source src={item.src} type="video/mp4" /></video>
                ) : (
                  <img src={item.src} alt="Kids" style={mediaStyle} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section id="events" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.eventsTitle}</h2>
          <p style={{ marginBottom: '30px' }}>{t.eventsDesc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {upcomingEvents.map((item, idx) => (
              <div key={idx} style={imgCardStyle}>
                {item.type === 'video' ? (
                  <video controls style={mediaStyle}><source src={item.src} type="video/mp4" /></video>
                ) : (
                  <img src={item.src} alt="Event" style={mediaStyle} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{t.galleryTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {mainGalleryImages.map((src, idx) => (
              <div key={idx} style={imgCardStyle}><img src={src} alt="Gallery" style={{ width: '100%', height: '280px', objectFit: 'cover' }} /></div>
            ))}
          </div>
        </section>

        {/* SUPPORT & FOOTER */}
        <section id="support" style={{ backgroundColor: '#1b5e20', color: 'white', padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
          <h2>{t.supportTitle}</h2>
          <p>IBAN: DE27 1009 0000 7218 2980 06</p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px' }}>
        <p>© 2026 Deutsch-Kamerunischer Kulturverein.</p>
      </footer>
    </div>
  );
}
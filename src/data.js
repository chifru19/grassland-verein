import React, { useState } from 'react';

/**
 * Deutsch-Kamerunischer Kulturverein Website
 * ------------------------------------------
 * Main application component.
 * Features: Trilingual Support, Gallery Management, Event Handling.
 */

// --- 1. TRANSLATION DATA ---
const i18n = {
  en: {
    nav: { home: "Home", meetings: "Meetings", kids: "Kids", events: "Events", gallery: "Gallery", support: "Support" },
    title: "Deutsch-Kamerunischer Kulturverein",
    subtitle: "Sprengelstr. 15, 13353 Berlin",
    about: "Our Mission",
    missionText: "We are a community-driven organization dedicated to fostering cultural exchange and preserving heritage for future generations.",
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
    about: "Unsere Mission",
    missionText: "Wir sind eine Gemeinschaft, die sich dem kulturellen Austausch und der Bewahrung unseres Erbes widmet.",
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
    about: "Notre Mission",
    missionText: "Nous sommes une organisation communautaire dédiée à favoriser l'échange culturel et à préserver l'héritage.",
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

  // --- 2. IMAGE & VIDEO REPOSITORIES ---
  // Paths use / prefix to support GitHub Pages routing
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

  const kidsGalleryItems = [
    { type: 'video', src: '/videos/kids-activity-01.mp4' },
    { type: 'video', src: '/videos/kids-dance-event.mp4' },
    { type: 'image', src: '/images/kids-01.jpg' },
    { type: 'image', src: '/images/kids-03.jpg' },
    { type: 'image', src: '/images/kids-04.jpg' },
    { type: 'image', src: '/images/kids-05.jpg' }
  ];

  const upcomingEvents = [
    { type: 'image', src: '/images/event-placeholder.jpg' } 
  ];

  // --- 3. FUNCTIONS ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ 
        top: element.getBoundingClientRect().top + window.pageYOffset - 80, 
        behavior: 'smooth' 
      });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}!`);
    setFormData({ name: '', email: '' });
  };

  // --- 4. STYLE DEFINITIONS ---
  const styles = {
    sectionHeader: { color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2rem', marginBottom: '30px', fontWeight: '700' },
    navItem: { cursor: 'pointer', padding: '10px 15px', fontWeight: 'bold', color: 'white', fontSize: '0.9rem' },
    imgCard: { overflow: 'hidden', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    media: { width: '100%', height: '220px', objectFit: 'cover' },
    container: { backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' },
    hero: { textAlign: 'center', color: 'white', borderBottom: '6px solid #f9a825', background: '#1b5e20', padding: '80px 20px' }
  };

  // --- 5. RENDER ---
  return (
    <div style={styles.container}>
      
      {/* LANGUAGE SWITCHER */}
      <div style={{ textAlign: 'right', padding: '15px', backgroundColor: '#fdfbf7' }}>
        {['en', 'de', 'fr'].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{ margin: '0 5px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: lang === l ? 'bold' : 'normal' }}>{l}</button>
        ))}
      </div>

      {/* HERO SECTION */}
      <header id="home" style={styles.hero}>
        <img src="/images/verein-logo.png" alt="Logo" style={{ height: '150px', borderRadius: '15px', backgroundColor: 'white', padding: '10px', marginBottom: '20px' }} />
        <h1 style={{ margin: 0 }}>{t.title}</h1>
        <p style={{ color: '#f9a825', fontWeight: 'bold' }}>{t.subtitle}</p>
      </header>

      {/* NAVIGATION BAR */}
      <nav style={{ backgroundColor: '#1b5e20', display: 'flex', justifyContent: 'center', padding: '10px', position: 'sticky', top: 0, zIndex: 1000 }}>
        {Object.entries(t.nav).map(([key, label]) => (
          <span key={key} onClick={() => scrollTo(key)} style={styles.navItem}>{label}</span>
        ))}
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* ABOUT SECTION */}
        <section style={{ marginBottom: '80px' }}>
            <h2 style={styles.sectionHeader}>{t.about}</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{t.missionText}</p>
        </section>

        {/* MEETINGS SECTION */}
        <section id="meetings" style={{ marginBottom: '80px' }}>
          <h2 style={styles.sectionHeader}>{t.meetingTitle}</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', border: '1px solid #eee', marginBottom: '30px' }}>
            <h3>{t.meetingSub}</h3>
            <p>{t.meetingDesc}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {meetingGalleryImages.map((src, idx) => (
              <div key={idx} style={styles.imgCard}><img src={src} alt="Meeting" style={styles.media} /></div>
            ))}
          </div>
        </section>

        {/* KIDS SECTION */}
        <section id="kids" style={{ marginBottom: '80px' }}>
          <h2 style={styles.sectionHeader}>{t.kidsTitle}</h2>
          <p style={{ marginBottom: '30px' }}>{t.kidsDesc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {kidsGalleryItems.map((item, idx) => (
              <div key={idx} style={styles.imgCard}>
                {item.type === 'video' ? (
                  <video controls style={styles.media}><source src={item.src} type="video/mp4" /></video>
                ) : (
                  <img src={item.src} alt="Kids Section" style={styles.media} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EVENTS SECTION */}
        <section id="events" style={{ marginBottom: '80px' }}>
          <h2 style={styles.sectionHeader}>{t.eventsTitle}</h2>
          <p style={{ marginBottom: '30px' }}>{t.eventsDesc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {upcomingEvents.map((item, idx) => (
              <div key={idx} style={styles.imgCard}>
                {item.type === 'video' ? (
                  <video controls style={styles.media}><source src={item.src} type="video/mp4" /></video>
                ) : (
                  <img src={item.src} alt="Event" style={styles.media} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" style={{ marginBottom: '80px' }}>
          <h2 style={styles.sectionHeader}>{t.galleryTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {mainGalleryImages.map((src, idx) => (
              <div key={idx} style={styles.imgCard}><img src={src} alt="Gallery" style={{ width: '100%', height: '280px', objectFit: 'cover' }} /></div>
            ))}
          </div>
        </section>

        {/* SUPPORT SECTION */}
        <section id="support" style={{ backgroundColor: '#1b5e20', color: 'white', padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
          <h2>{t.supportTitle}</h2>
          <p style={{ fontSize: '1.5rem' }}>IBAN: DE27 1009 0000 7218 2980 06</p>
        </section>

        {/* REGISTRATION FORM */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3>{t.registerTitle}</h3>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '15px', borderRadius: '10px' }} />
              <button type="submit" style={{ padding: '15px', backgroundColor: '#f9a825', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>{t.registerBtn}</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px' }}>
        <p>© 2026 Deutsch-Kamerunischer Kulturverein. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
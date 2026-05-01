import React, { useState } from 'react';

/**
 * Deutsch-Kamerunischer Kulturverein Website
 * ------------------------------------------
 * Version: 5.0.0
 * Features:
 * - Full Trilingual Support (EN/DE/FR)
 * - Dynamic Gallery (Meetings, Kids, Events, General)
 * - GitHub Pages Deployment Optimized
 * - All text elements tied to translation system
 */

// --- 1. FULL TRILINGUAL TRANSLATION DATA ---
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
    eventsDesc: "Stay tuned for our upcoming cultural gatherings, workshops, and festive activities.",
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
    eventsDesc: "Bleiben Sie informiert über unsere bevorstehenden Treffen, Workshops und Feste.",
    galleryTitle: "Allgemeine Galerie",
    supportTitle: "Unterstützen Sie uns",
    registerTitle: "Mitglied werden",
    registerBtn: "Registrieren"
  },
  fr: {
    nav: { home: "Accueil", meetings: "Réunions", kids: "Enfants", events: "Événements", gallery: "Galerie", support: "Soutien" },
    title: "Deutsch-Kamerunischer Kulturverein",
    subtitle: "15, Sprengelstr., 13353 Berlin",
    about: "Notre Mission",
    missionText: "Nous sommes une organisation communautaire dédiée à favoriser l'échange culturel et à préserver l'héritage.",
    meetingTitle: "Réunions Mensuelles",
    meetingSub: "Chaque deuxième samedi du mois",
    meetingDesc: "Rejoignez-nous pour le dialogue communautaire au 15, Sprengelstr., 13353 Berlin.",
    kidsTitle: "Section Enfants et Jeunes",
    kidsDesc: "Préserver notre héritage pour la prochaine génération à travers la langue, la danse et les récits.",
    eventsTitle: "Événements à Venir",
    eventsDesc: "Restez à l'écoute de nos prochaines rencontres, ateliers et activités festives.",
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

  // Helper: Ensures files load from /grassland-verein/
  const p = (path) => `${process.env.PUBLIC_URL}${path}`;

  // --- 2. DATA REPOSITORIES ---
  const mainGalleryImages = [
    p('/images/ngoteh-leadership.jpg'), p('/images/ngoteh-01.jpg'), p('/images/ngoteh-02.jpg'), 
    p('/images/ngoteh-03.jpg'), p('/images/ngoteh-04.jpg'), p('/images/ngoteh-05.jpg')
  ];

  const meetingGalleryImages = [
    p('/assets/meeting-01.jpg'), p('/assets/meeting-02.jpg'), p('/assets/meeting-03.jpg'), 
    p('/assets/meeting-04.jpg'), p('/assets/meeting-05.jpg')
  ];

  const kidsGalleryItems = [
    { type: 'video', src: p('/videos/kids-activity-01.mp4') },
    { type: 'video', src: p('/videos/kids-dance-event.mp4') },
    { type: 'image', src: p('/images/kids-01.jpg') },
    { type: 'image', src: p('/images/kids-03.jpg') },
    { type: 'image', src: p('/images/kids-04.jpg') },
    { type: 'image', src: p('/images/kids-05.jpg') }
  ];

  const upcomingEvents = [
    { type: 'image', src: p('/images/event-placeholder.jpg') }
  ];

  // --- 3. FUNCTIONS ---
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

  // --- 4. STYLES ---
  const styles = {
    hero: { textAlign: 'center', color: 'white', background: '#1b5e20', padding: '60px 20px', borderBottom: '6px solid #f9a825' },
    nav: { background: '#1b5e20', padding: '15px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 1000 },
    section: { padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
    card: { borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', backgroundColor: '#fff' },
    media: { width: '100%', height: '220px', objectFit: 'cover' },
    headerTitle: { color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2rem', marginBottom: '30px', fontWeight: '700' }
  };

  // --- 5. RENDER ---
  return (
    <div style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', paddingBottom: '50px', fontFamily: 'Segoe UI' }}>
      
      {/* LANGUAGE SWITCHER */}
      <div style={{ textAlign: 'right', padding: '10px' }}>
        {['en', 'de', 'fr'].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{ margin: '5px', cursor: 'pointer', background: lang === l ? '#f9a825' : '#eee' }}>{l.toUpperCase()}</button>
        ))}
      </div>

      <header id="home" style={styles.hero}>
        <img src={p('/images/verein-logo.png')} alt="Logo" style={{ height: '120px', borderRadius: '15px', background: 'white', padding: '10px' }} />
        <h1>{t.title}</h1>
        <p style={{ color: '#f9a825', fontWeight: 'bold' }}>{t.subtitle}</p>
      </header>

      {/* FIXED NAVIGATION - USES OBJECT.ENTRIES FOR ORDER */}
      <nav style={styles.nav}>
        {Object.entries(t.nav).map(([key, label]) => (
          <span key={key} onClick={() => scrollTo(key)} style={{ color: 'white', margin: '0 15px', cursor: 'pointer', fontWeight: 'bold' }}>{label}</span>
        ))}
      </nav>

      <main>
        {/* MEETINGS */}
        <section id="meetings" style={styles.section}>
          <h2 style={styles.headerTitle}>{t.meetingTitle}</h2>
          <div style={styles.grid}>{meetingGallery.map((src, i) => <div key={i} style={styles.card}><img src={src} style={styles.media} alt="Meeting" /></div>)}</div>
        </section>

        {/* KIDS */}
        <section id="kids" style={styles.section}>
          <h2 style={styles.headerTitle}>{t.kidsTitle}</h2>
          <div style={styles.grid}>
            {kidsGallery.map((item, i) => (
              <div key={i} style={styles.card}>
                {item.type === 'video' ? <video controls style={styles.media}><source src={item.src} type="video/mp4" /></video> : <img src={item.src} style={styles.media} alt="Kids" />}
              </div>
            ))}
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" style={styles.section}>
          <h2 style={styles.headerTitle}>{t.eventsTitle}</h2>
          <div style={styles.grid}>
            {upcomingEvents.map((item, i) => (
              <div key={i} style={styles.card}>
                {item.type === 'video' ? <video controls style={styles.media}><source src={item.src} type="video/mp4" /></video> : <img src={item.src} style={styles.media} alt="Event" />}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={styles.section}>
          <h2 style={styles.headerTitle}>{t.galleryTitle}</h2>
          <div style={styles.grid}>
            {mainGallery.map((src, i) => <div key={i} style={styles.card}><img src={src} style={{ width: '100%', height: '280px', objectFit: 'cover' }} alt="Gallery" /></div>)}
          </div>
        </section>

        {/* SUPPORT */}
        <section id="support" style={styles.section}>
          <div style={{ backgroundColor: '#1b5e20', color: 'white', padding: '40px', borderRadius: '25px', textAlign: 'center' }}>
            <h2>{t.supportTitle}</h2>
            <div style={{ margin: '20px' }}>
              <img src={p('/images/qr-code.jpg')} alt="QR Code" style={{ width: '150px', height: '150px', borderRadius: '10px' }} />
            </div>
            <p>IBAN: DE27 1009 0000 7218 2980 06</p>
            <form onSubmit={handleRegister} style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
              <input type="text" placeholder="Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '10px' }} />
              <button type="submit" style={{ padding: '10px', background: '#f9a825', border: 'none', cursor: 'pointer' }}>{t.registerBtn}</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <p>© 2026 Deutsch-Kamerunischer Kultur-Vereins.</p>
      </footer>
    </div>
  );
}
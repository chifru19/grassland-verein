import React, { useState } from 'react';

/**
 * Deutsch-Kamerunischer Kulturverein Website
 * ------------------------------------------
 * Features: Trilingual Support, Dynamic Gallery, Media Rendering.
 * Version: 2.2.0 (Expanded Architecture)
 */

// --- 1. TRANSLATION DATA ---
const i18n = {
  en: {
    nav: { home: "Home", meetings: "Meetings", kids: "Kids", events: "Events", gallery: "Gallery", support: "Support" },
    title: "Deutsch-Kamerunischer Kulturverein",
    subtitle: "Sprengelstr. 15, 13353 Berlin",
    about: "Our Mission",
    missionText: "Fostering cultural exchange and heritage preservation.",
    meetingTitle: "Monthly Meeting Sessions",
    meetingSub: "Every Second Saturday of the Month",
    meetingDesc: "Join us at Sprengelstr. 15, 13353 Berlin.",
    kidsTitle: "Kids & Youth Section",
    kidsDesc: "Heritage preservation through language and dance.",
    eventsTitle: "Upcoming Events",
    eventsDesc: "Check out our next cultural activities.",
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
    missionText: "Kultureller Austausch und Erhalt unseres Erbes.",
    meetingTitle: "Monatliche Treffen",
    meetingSub: "Jeden zweiten Samstag im Monat",
    meetingDesc: "Besuchen Sie uns in der Sprengelstr. 15, 13353 Berlin.",
    kidsTitle: "Kinder- und Jugendbereich",
    kidsDesc: "Bewahrung unseres Erbes für die Zukunft.",
    eventsTitle: "Kommende Veranstaltungen",
    eventsDesc: "Bleiben Sie informiert über unsere Termine.",
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
    missionText: "Échange culturel et préservation de l'héritage.",
    meetingTitle: "Réunions Mensuelles",
    meetingSub: "Chaque deuxième samedi du mois",
    meetingDesc: "Rejoignez-nous au 15, Sprengelstr., 13353 Berlin.",
    kidsTitle: "Section Enfants et Jeunes",
    kidsDesc: "Préserver notre héritage pour la prochaine génération.",
    eventsTitle: "Événements à Venir",
    eventsDesc: "Restez informés sur nos activités !",
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

  // Helper to ensure paths work on GitHub Pages
  const p = (path) => `${process.env.PUBLIC_URL}${path}`;

  // --- 2. DATA REPOSITORIES ---
  const mainGallery = [
    p('/images/ngoteh-leadership.jpg'), p('/images/ngoteh-01.jpg'), p('/images/ngoteh-02.jpg'), 
    p('/images/ngoteh-03.jpg'), p('/images/ngoteh-04.jpg'), p('/images/ngoteh-05.jpg')
  ];

  const meetingGallery = [
    p('/assets/meeting-01.jpg'), p('/assets/meeting-02.jpg'), p('/assets/meeting-03.jpg'), 
    p('/assets/meeting-04.jpg'), p('/assets/meeting-05.jpg')
  ];

  // Exactly 2 Videos + 4 Images
  const kidsGallery = [
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

  // --- 3. HELPER FUNCTIONS ---
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

  // --- 4. STYLING ---
  const styles = {
    header: { textAlign: 'center', color: 'white', background: '#1b5e20', padding: '60px 20px', borderBottom: '6px solid #f9a825' },
    nav: { background: '#1b5e20', padding: '15px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 1000 },
    section: { padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
    card: { borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', backgroundColor: '#fff' },
    media: { width: '100%', height: '220px', objectFit: 'cover' }
  };

  // --- 5. RENDER ---
  return (
    <div style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', paddingBottom: '50px', fontFamily: 'Segoe UI' }}>
      
      {/* LANGUAGE */}
      <div style={{ textAlign: 'right', padding: '10px' }}>
        {['en', 'de', 'fr'].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{ margin: '5px' }}>{l.toUpperCase()}</button>
        ))}
      </div>

      <header id="home" style={styles.header}>
        <img src={p('/images/verein-logo.png')} alt="Logo" style={{ height: '120px', borderRadius: '15px' }} />
        <h1>{t.title}</h1>
      </header>

      <nav style={styles.nav}>
        {Object.keys(t.nav).map(key => (
          <span key={key} onClick={() => scrollTo(key)} style={{ color: 'white', margin: '0 15px', cursor: 'pointer', fontWeight: 'bold' }}>{t.nav[key]}</span>
        ))}
      </nav>

      <main>
        {/* MEETINGS */}
        <section id="meetings" style={styles.section}>
          <h2>{t.meetingTitle}</h2>
          <div style={styles.grid}>
            {meetingGallery.map((src, i) => <div key={i} style={styles.card}><img src={src} style={styles.media} alt="Meeting" /></div>)}
          </div>
        </section>

        {/* KIDS */}
        <section id="kids" style={styles.section}>
          <h2>{t.kidsTitle}</h2>
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
          <h2>{t.eventsTitle}</h2>
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
          <h2>{t.galleryTitle}</h2>
          <div style={styles.grid}>
            {mainGallery.map((src, i) => <div key={i} style={styles.card}><img src={src} style={styles.media} alt="Gallery" /></div>)}
          </div>
        </section>

        {/* REGISTER */}
        <section id="support" style={styles.section}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3>{t.registerTitle}</h3>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '10px' }} />
              <button type="submit" style={{ padding: '10px', backgroundColor: '#f9a825', border: 'none' }}>{t.registerBtn}</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <p>© 2026 Deutsch-Kamerunischer Kulturverein.</p>
      </footer>
    </div>
  );
}
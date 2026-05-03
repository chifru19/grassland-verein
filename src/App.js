import React, { useState } from 'react';

/**
 * App.js - Deutsch-Kamerunischer Kulturverein Grassland e.V.
 * Full Production Version
 */

export default function App() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    membershipType: 'standard' 
  });
  const [lang, setLang] = useState('de');

  // --- TRILINGUAL CONTENT OBJECT ---
  const t = {
    de: {
      navHome: "Home", navExco: "Exco", navMeetings: "Treffen",
      navEvents: "Veranstaltungen", navKids: "Kinderbereich",
      navGallery: "Galerie", navSupport: "Unterstützung",
      navJoin: "Mitgliedschaft", heroTitle: "Deutsch-Kamerunischer Kulturverein",
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      excoTitle: "Vorstandsmitglieder & Ngoteh",
      meetingsTitle: "Monatliche Treffen",
      meetingsDesc: "Jeden zweiten Samstag im Monat – Kommen Sie vorbei für den gemeinschaftlichen Dialog.",
      eventsTitle: "Kommende Veranstaltungen",
      eventsDesc: "Besuchen Sie unsere nächste Zusammenkunft.",
      kidsTitle: "Kinder & Jugend",
      kidsDesc: "Bewahrung unseres Erbes für die nächste Generation.",
      galleryTitle: "General Event Gallery & Ngoteh",
      supportTitle: "Unterstützen Sie unsere Mission",
      donateText: "ZUM SPENDEN SCANNEN",
      registerTitle: "Jetzt Mitglied werden",
      registerBtn: "Antrag Absenden",
      namePlaceholder: "Vollständiger Name",
      emailPlaceholder: "E-Mail-Adresse",
      admin: "Website Admin"
    },
    en: {
      navHome: "Home", navExco: "Exco", navMeetings: "Meetings",
      navEvents: "Events", navKids: "Kids Section",
      navGallery: "Gallery", navSupport: "Support Us",
      navJoin: "Membership", heroTitle: "German-Cameroonian Cultural Association",
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      excoTitle: "Executive Committee & Ngoteh",
      meetingsTitle: "Monthly Meeting Sessions",
      meetingsDesc: "Every Second Saturday of the Month – Join us for our community dialogue.",
      eventsTitle: "Upcoming Events",
      eventsDesc: "Join us for our upcoming community gathering.",
      kidsTitle: "Kids & Youth Section",
      kidsDesc: "Preserving our heritage for the next generation.",
      galleryTitle: "General Event Gallery & Ngoteh",
      supportTitle: "Support Our Mission",
      donateText: "SCAN TO DONATE",
      registerTitle: "Become a Member",
      registerBtn: "Submit Application",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      admin: "Website Admin"
    },
    fr: {
      navHome: "Accueil", navExco: "Exco", navMeetings: "Réunions",
      navEvents: "Événements", navKids: "Section Enfants",
      navGallery: "Galerie", navSupport: "Soutenez-nous",
      navJoin: "Adhésion", heroTitle: "Association Culturelle Germano-Camerounaise",
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      excoTitle: "Membres du bureau exécutif & Ngoteh",
      meetingsTitle: "Réunions Mensuelles",
      meetingsDesc: "Chaque deuxième samedi du mois – Rejoignez-nous pour le dialogue communautaire.",
      eventsTitle: "Événements à Venir",
      eventsDesc: "Rejoignez-nous pour notre prochain rassemblement.",
      kidsTitle: "Section Enfants et Jeunes",
      kidsDesc: "Préserver notre héritage pour la prochaine génération.",
      galleryTitle: "Galerie Générale des Événements & Ngoteh",
      supportTitle: "Soutenez notre Mission",
      donateText: "SCANNEZ POUR DONNER",
      registerTitle: "Devenir Membre",
      registerBtn: "S'inscrire",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Adresse e-mail",
      admin: "Admin du site"
    }
  };

  const c = t[lang];

  // --- DATA REPOSITORIES ---
  const excoData = [
    { pos: "President", name: "Mr. CHENYE FREDERICK" },
    { pos: "Ngoteh Representative", name: "Ngoteh Leadership Team" },
    { pos: "Vice President", name: "Mr. NJAFUH BOBGA ROLAND" },
    { pos: "Secretary General", name: "DEACONESS THERESA EKPAKUEME" },
    { pos: "Vice Secretary General", name: "Ms. SEDONI ABAH" },
    { pos: "Financial Secretary", name: "Ms. LOVELINE MBETIJI FOMUSO" },
    { pos: "Treasurer", name: "Mr. NGASSA ERENRST" },
    { pos: "Social Secretary", name: ["MR. TEMBU FRANCIS", "MR. KANGKANG EVARISTUS", "MS RUTH YEBAH"] },
    { pos: "Protocol Officer", name: "Mr. NJI ERIC" }
  ];

  const kidsVideos = [
    'videos/kids-01.mp4', 'videos/kids-02.mp4', 'videos/kids-03.mp4', 'videos/kids-04.mp4', 
    'videos/kids-05.mp4', 'videos/kids-06.mp4', 'videos/kids-07.mp4', 'videos/kids-08.mp4', 
    'videos/kids-09.mp4', 'videos/kids-10.mp4', 'videos/kids-11.mp4', 'videos/kids-12.mp4'
  ];

  const meetingGalleryImages = [
    'assets/meeting-01.jpg', 'assets/meeting-02.jpg', 'assets/meeting-03.jpg', 
    'assets/meeting-04.jpg', 'assets/meeting-05.jpg', 'assets/meeting-06.jpg', 
    'assets/meeting-07.jpg', 'assets/meeting-08.jpg', 'assets/meeting-09.jpg', 'assets/meeting-10.jpg'
  ];

  // --- UTILS ---
  const getPath = (path) => `${process.env.PUBLIC_URL}/${path}`;
  const scrollTo = (id) => { 
    const el = document.getElementById(id); 
    if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'}); 
  };
  const handleRegister = (e) => { e.preventDefault(); alert("Application Sent!"); };

  return (
    <div style={{ backgroundColor: '#fdfbf7', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* HEADER SECTION */}
      <header id="home" style={{ textAlign: 'center', color: 'white', borderBottom: '6px solid #f9a825', padding: '80px 20px', background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('${getPath('images/ngoteh-event-01.jpg')}')`, backgroundSize: 'cover' }}>
        <img src={getPath('images/verein-logo.png')} alt="Logo" style={{ height: '180px', borderRadius: '15px', backgroundColor: 'white', padding: '15px' }} />
        <h1>{c.heroTitle}</h1>
        <p style={{ color: '#f9a825', fontWeight: 'bold' }}>{c.heroSubtitle}</p>
      </header>

      {/* NAVIGATION SECTION */}
      <nav style={{ background: '#1b5e20', padding: '15px', position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', gap: '15px', color: 'white', flexWrap: 'wrap' }}>
        {['home','exco','meetings','events','kids','gallery','join','support'].map(i => (
          <span key={i} onClick={() => scrollTo(i)} style={{cursor:'pointer', fontWeight:'bold'}}>{i.toUpperCase()}</span>
        ))}
        <button onClick={() => setLang('de')}>DE</button>
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('fr')}>FR</button>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* EXCO / LEADERSHIP SECTION */}
        <section id="exco" style={{ marginBottom: '80px', padding: '40px', background: '#e8f5e9', borderRadius: '30px' }}>
          <h2 style={{ color: '#1b5e20', borderBottom: '3px solid #f9a825', display: 'inline-block', marginBottom: '30px' }}>{c.excoTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {excoData.map((m, i) => <div key={i}><strong>{m.pos}:</strong> {Array.isArray(m.name) ? m.name.join(', ') : m.name}</div>)}
          </div>
        </section>

        {/* MEETINGS GALLERY */}
        <section id="meetings" style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>{c.meetingsTitle}</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', marginBottom: '30px' }}>{c.meetingsDesc}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {meetingGalleryImages.map((src, i) => <img key={i} src={getPath(src)} alt="Meeting" style={{ width: '100%', borderRadius: '20px', height: '220px', objectFit: 'cover' }} />)}
          </div>
        </section>

        {/* EVENTS SECTION */}
        <section id="events" style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>{c.eventsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <video controls style={{ width: '100%', borderRadius: '15px', background: '#000' }}><source src={getPath('videos/upcoming-event.mp4')} type="video/mp4" /></video>
            <a href={getPath('assets/event-flyer.pdf')} download><img src={getPath('images/flyer-preview.jpg')} alt="Flyer" style={{ width: '100%', borderRadius: '15px' }} /></a>
          </div>
        </section>

        {/* KIDS SECTION */}
        <section id="kids" style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px' }}>{c.kidsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {kidsVideos.map((src, i) => <video key={i} src={getPath(src)} controls style={{ width: '100%', borderRadius: '10px', height: '220px' }} />)}
          </div>
        </section>

        {/* JOIN MEMBERSHIP */}
        <section id="join" style={{ marginBottom: '80px', padding: '40px', background: '#fff', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1b5e20' }}>{c.registerTitle}</h2>
          <form onSubmit={handleRegister}>
            <input placeholder={c.namePlaceholder} style={{ width: '100%', padding: '15px', marginBottom: '10px' }} required />
            <input placeholder={c.emailPlaceholder} type="email" style={{ width: '100%', padding: '15px', marginBottom: '10px' }} required />
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#f9a825', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>{c.registerBtn}</button>
          </form>
        </section>

        {/* SUPPORT SECTION */}
        <section id="support" style={{ textAlign: 'center', padding: '60px', background: '#1b5e20', borderRadius: '40px', color: 'white' }}>
          <h2>{c.supportTitle}</h2>
          <img src={getPath('images/qr-code.jpg')} alt="Donate" style={{ width: '200px', borderRadius: '10px', marginBottom: '20px' }} />
          <p>{c.donateText}</p>
          <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', display: 'inline-block', textAlign: 'left' }}>
            <p style={{ margin: '5px 0' }}><strong>Account:</strong> Deutsch-Kamerunischer Kultur-</p>
            <p style={{ margin: '5px 0' }}><strong>IBAN:</strong> DE27100900007218298006</p>
            <p style={{ margin: '5px 0' }}><strong>BIC:</strong> BEVODEBBXXX</p>
            <p style={{ margin: '5px 0' }}><strong>Bank:</strong> BERLINER VOLKSBANK</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '40px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p><strong>Engineer & Admin: Frank Fru</strong> | <a href="https://frankfru.com">frankfru.com</a></p>
        <p><a href="https://github.com/chifru19">GitHub</a> | <a href="https://www.linkedin.com/in/frankfru/">LinkedIn</a></p>
      </footer>
    </div>
  );
}
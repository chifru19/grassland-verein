import React, { useState } from 'react';

/**
 * App.js - Deutsch-Kamerunischer Kulturverein Grassland e.V.
 * Full Production Version - Including Exco List, Labour Day Greeting, and Expanded Kids Section
 */

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [lang, setLang] = useState('de');

  // --- TRILINGUAL CONTENT OBJECT ---
  const t = {
    de: {
      navHome: "Home", navMeetings: "Treffen", navEvents: "Veranstaltungen", 
      navKids: "Kinderbereich", navGallery: "Galerie", navSupport: "Unterstützung",
      heroTitle: "Deutsch-Kamerunischer Kulturverein", 
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      labourDay: "Guten Abend und einen schönen Tag der Arbeit!",
      excoTitle: "Vorstandsmitglieder (Exco)",
      meetingsTitle: "Monatliche Treffen", 
      meetingsDesc: "Jeden zweiten Samstag im Monat – Kommen Sie vorbei für den gemeinschaftlichen Dialog.",
      meetingGalleryHighlights: "Aktuelle Meeting-Highlights",
      eventsTitle: "Kommende Veranstaltungen", featuredEvent: "Nächste Veranstaltung",
      eventsDesc: "Besuchen Sie unsere nächste Zusammenkunft. Laden Sie den Flyer für weitere Details herunter.",
      kidsTitle: "Kinder & Jugend", 
      kidsDesc: "Bewahrung unseres Erbes für die nächste Generation durch Sprache, Tanz und Geschichtenerzählen.",
      galleryTitle: "General Event Gallery",
      supportTitle: "Unterstützen Sie unsere Mission",
      donateText: "ZUM SPENDEN SCANNEN", bankText: "Bank: BERLINER VOLKSBANK",
      registerTitle: "Werden Sie Mitglied", registerBtn: "Registrieren", 
      namePlaceholder: "Vollständiger Name", emailPlaceholder: "E-Mail-Adresse",
      flyerBtn: "Flyer Herunterladen", footerText: "Alle Rechte vorbehalten.", admin: "Website Admin"
    },
    en: {
      navHome: "Home", navMeetings: "Meetings", navEvents: "Events", 
      navKids: "Kids Section", navGallery: "Gallery", navSupport: "Support Us",
      heroTitle: "German-Cameroonian Cultural Association", 
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      labourDay: "Good evening and happy Labour Day!",
      excoTitle: "Executive Committee (Exco)",
      meetingsTitle: "Monthly Meeting Sessions", 
      meetingsDesc: "Every Second Saturday of the Month – Join us for our community dialogue.",
      meetingGalleryHighlights: "Recent Meeting Highlights",
      eventsTitle: "Upcoming Events", featuredEvent: "Featured Event",
      eventsDesc: "Join us for our upcoming community gathering. Download the flyer for full details.",
      kidsTitle: "Kids & Youth Section", 
      kidsDesc: "Preserving our heritage for the next generation through language, dance, and storytelling.",
      galleryTitle: "General Event Gallery",
      supportTitle: "Support Our Mission",
      donateText: "SCAN TO DONATE", bankText: "Bank: BERLINER VOLKSBANK",
      registerTitle: "Become a Member", registerBtn: "Register", 
      namePlaceholder: "Full Name", emailPlaceholder: "Email Address",
      flyerBtn: "Download Flyer", footerText: "All Rights Reserved.", admin: "Website Admin"
    },
    fr: {
      navHome: "Accueil", navMeetings: "Réunions", navEvents: "Événements", 
      navKids: "Section Enfants", navGallery: "Galerie", navSupport: "Soutenez-nous",
      heroTitle: "Association Culturelle Germano-Camerounaise", 
      heroSubtitle: "Sprengelstr. 15, 13353 Berlin",
      labourDay: "Bonsoir et bonne Fête du Travail !",
      excoTitle: "Membres du bureau exécutif (Exco)",
      meetingsTitle: "Réunions Mensuelles", 
      meetingsDesc: "Chaque deuxième samedi du mois – Rejoignez-nous pour le dialogue communautaire.",
      meetingGalleryHighlights: "Faits saillants des réunions",
      eventsTitle: "Événements à Venir", featuredEvent: "Événement en vedette",
      eventsDesc: "Rejoignez-nous pour notre prochain rassemblement. Téléchargez le flyer pour plus de détails.",
      kidsTitle: "Section Enfants et Jeunes", 
      kidsDesc: "Préserver notre héritage pour la prochaine génération à travers la langue, la danse et les contes.",
      galleryTitle: "Galerie Générale des Événements",
      supportTitle: "Soutenez notre Mission",
      donateText: "SCANNEZ POUR DONNER", bankText: "Banque : BERLINER VOLKSBANK",
      registerTitle: "Devenir Membre", registerBtn: "S'inscrire", 
      namePlaceholder: "Nom complet", emailPlaceholder: "Adresse e-mail",
      flyerBtn: "Télécharger le Flyer", footerText: "Tous droits réservés.", admin: "Admin du site"
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

  const meetingGalleryImages = [
    'assets/meeting-01.jpg', 'assets/meeting-02.jpg', 'assets/meeting-03.jpg', 
    'assets/meeting-04.jpg', 'assets/meeting-05.jpg', 'assets/meeting-06.jpg', 
    'assets/meeting-07.jpg', 'assets/meeting-08.jpg', 'assets/meeting-09.jpg', 
    'assets/meeting-10.jpg'
  ];

  const mainGalleryImages = [
    'images/ngoteh-leadership.jpg', 'images/ngoteh-01.jpg', 'images/ngoteh-02.jpg', 
    'images/ngoteh-03.jpg', 'images/ngoteh-04.jpg', 'images/ngoteh-05.jpg',
    'images/ngoteh-06.jpg', 'images/ngoteh-07.jpg'
  ];

  const kidsVideos = [
    'videos/kids-01.mp4', 'videos/kids-02.mp4', 'videos/kids-03.mp4', 
    'videos/kids-04.mp4', 'videos/kids-05.mp4', 'videos/kids-06.mp4'
  ];

  const sectionHeaderStyle = { color: '#1b5e20', borderLeft: '8px solid #f9a825', paddingLeft: '15px', fontSize: '2.4rem', marginBottom: '30px' };
  const cardStyle = { borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', backgroundColor: '#fff', padding: '20px' };
  const navBtnStyle = { cursor: 'pointer', background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '4px', padding: '5px 8px', margin: '0 5px', fontWeight: 'bold' };

  const getPath = (path) => `${process.env.PUBLIC_URL}/${path}`;
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

  return (
    <div style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <style>{`.hover-card:hover { transform: scale(1.03); transition: 0.3s; cursor: pointer; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }`}</style>
      
      <header id="home" style={{ textAlign: 'center', color: 'white', borderBottom: '6px solid #f9a825', padding: '80px 20px', background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(27, 94, 32, 0.85)), url('${getPath('images/ngoteh-event-01.jpg')}')`, backgroundSize: 'cover' }}>
        <img src={getPath('images/verein-logo.png')} alt="Logo" style={{ height: '180px', borderRadius: '15px', backgroundColor: 'white', padding: '15px' }} />
        <h1 style={{ fontSize: '2.8rem', margin: '20px 0 0 0' }}>{c.heroTitle}</h1>
        <p style={{ color: '#f9a825', fontWeight: 'bold' }}>{c.heroSubtitle}</p>
      </header>

      <nav style={{ backgroundColor: '#1b5e20', padding: '15px', position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', gap: '15px', color: 'white', flexWrap: 'wrap' }}>
        <span onClick={() => scrollTo('home')} style={{cursor:'pointer', fontWeight:'bold'}}>{c.navHome}</span>
        <span onClick={() => scrollTo('exco')} style={{cursor:'pointer', fontWeight:'bold'}}>Exco</span>
        <span onClick={() => scrollTo('meetings')} style={{cursor:'pointer', fontWeight:'bold'}}>{c.navMeetings}</span>
        <span onClick={() => scrollTo('events')} style={{cursor:'pointer', fontWeight:'bold'}}>{c.navEvents}</span>
        <span onClick={() => scrollTo('kids')} style={{cursor:'pointer', fontWeight:'bold'}}>{c.navKids}</span>
        <span onClick={() => scrollTo('gallery')} style={{cursor:'pointer', fontWeight:'bold'}}>{c.navGallery}</span>
        <div style={{ marginLeft: '10px' }}>
          <button onClick={() => setLang('de')} style={navBtnStyle}>DE</button>
          <button onClick={() => setLang('en')} style={navBtnStyle}>EN</button>
          <button onClick={() => setLang('fr')} style={navBtnStyle}>FR</button>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <section id="exco" style={{ marginBottom: '80px', padding: '40px', background: '#e8f5e9', borderRadius: '30px' }}>
          <h3 style={{ color: '#1b5e20', marginBottom: '20px' }}>{c.labourDay} 🎉</h3>
          <h2 style={{ color: '#1b5e20', borderBottom: '3px solid #f9a825', display: 'inline-block', marginBottom: '30px' }}>{c.excoTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {excoData.map((m, i) => (
              <div key={i} style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
                <strong>{m.pos}:</strong> {Array.isArray(m.name) ? m.name.join(', ') : m.name}
              </div>
            ))}
          </div>
        </section>

        <section id="meetings" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{c.meetingsTitle}</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '25px', marginBottom: '30px', border: '1px solid #eee' }}>
            <p style={{fontSize:'1.2rem'}}>{c.meetingsDesc}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {meetingGalleryImages.map((src, i) => (
              <img key={i} src={getPath(src)} alt="Meeting" style={{ width: '100%', borderRadius: '20px', height: '220px', objectFit: 'cover' }} className="hover-card" />
            ))}
          </div>
        </section>

        <section id="events" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{c.eventsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', background: '#fff', padding: '30px', borderRadius: '25px', border: '1px solid #eee' }}>
            <video controls style={{ width: '100%', borderRadius: '15px', background: '#000' }}>
              <source src={getPath('videos/upcoming-event.mp4')} type="video/mp4" />
            </video>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{color:'#e65100'}}>{c.featuredEvent}</h3>
              <p>{c.eventsDesc}</p>
              <a href={getPath('assets/event-flyer.pdf')} download style={{ padding: '15px', backgroundColor: '#f9a825', color: '#1b5e20', borderRadius: '10px', textDecoration: 'none', fontWeight: '800', textAlign: 'center' }}>
                {c.flyerBtn}
              </a>
            </div>
          </div>
        </section>

        <section id="kids" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{c.kidsTitle}</h2>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '25px', marginBottom: '20px', border: '1px solid #eee' }}><p>{c.kidsDesc}</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {kidsVideos.map((src, i) => (
              <div key={i} className="hover-card" style={cardStyle}>
                <video src={getPath(src)} controls style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeaderStyle}>{c.galleryTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {mainGalleryImages.map((src, i) => (
              <img key={i} src={getPath(src)} alt="Gallery" style={{ width: '100%', borderRadius: '20px', height: '280px', objectFit: 'cover' }} className="hover-card" />
            ))}
          </div>
        </section>

        <section id="support" style={{ textAlign: 'center', padding: '60px', background: '#1b5e20', borderRadius: '40px', color: 'white', marginBottom: '80px' }}>
          <h2 style={{ color: '#f9a825' }}>{c.supportTitle}</h2>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', display: 'inline-block' }}>
            <img src={getPath('images/qr-code.jpg')} alt="Donate" style={{ width: '200px', height: '200px' }} />
            <p style={{ color: '#333', fontWeight: '800', marginTop: '10px' }}>{c.donateText}</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p><strong>{c.bankText}</strong></p>
            <p>IBAN: DE27 1009 0000 7218 2980 06</p>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #eee', fontSize: '0.9rem' }}>
        <p>© 2026 Deutsch-Kamerunischer Kulturverein. {c.footerText}</p>
      </footer>
    </div>
  );
}
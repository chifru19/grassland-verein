import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: 'General' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registration Received! Welcome to Grassland Verein, ${formData.name}.`);
  };

  return (
    <div className="App" style={{ backgroundColor: '#fdfbf7', color: '#2c3e50', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      
      {/* --- NAVIGATION BAR --- */}
      <nav style={{ backgroundColor: '#1b5e20', padding: '15px', color: 'white', display: 'flex', justifyContent: 'space-around', fontWeight: 'bold', borderBottom: '4px solid #f9a825' }}>
        <span>Home</span>
        <span>Ngoteh Group</span>
        <span>Kids Corner</span>
        <span>Gallery</span>
        <span>Register</span>
      </nav>

      {/* --- HERO SECTION --- */}
      <header style={{ backgroundColor: '#1b5e20', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.8rem', margin: '0', letterSpacing: '2px' }}>Grassland Verein e.V. Berlin</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '10px', color: '#f9a825' }}>Preserving Culture | Empowering Youth | Celebrating Heritage</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* --- TRILINGUAL SECTION --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '80px' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderLeft: '10px solid #de0000', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#de0000' }}>Deutsch</h2>
            <p>Unser Verein fördert den kulturellen Austausch und die Integration kamerunischer Traditionen in das Berliner Stadtleben.</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderLeft: '10px solid #002366', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#002366' }}>English</h2>
            <p>Our association promotes cultural exchange and the integration of Cameroonian traditions into Berlin's city life.</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', borderLeft: '10px solid #009b3a', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#009b3a' }}>Français</h2>
            <p>Notre association favorise les échanges culturels et l'intégration des traditions camerounaises dans la vie berlinoise.</p>
          </div>
        </section>

        {/* --- NGOTEH DANCE GROUP --- */}
        <section style={{ marginBottom: '80px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '350px' }}>
            <h2 style={{ color: '#1b5e20', fontSize: '2.5rem' }}>The Ngoteh Group</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              Ngoteh is more than a dance group; it is a living library of Grassland history. Our performers bring 
              authentic rhythms and traditional regalia to major festivals across Germany.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '10px 0' }}>🥁 Weekly Drumming Workshops</li>
              <li style={{ margin: '10px 0' }}>🎭 Costume Preservation</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '350px', height: '300px', backgroundColor: '#e0e0e0', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px dashed #1b5e20' }}>
            <p style={{ color: '#666' }}>[Upload Ngoteh Dance Image Here]</p>
          </div>
        </section>

        {/* --- CHILDREN & KIDS EVENTS --- */}
        <section style={{ marginBottom: '80px', backgroundColor: '#fffbe6', padding: '50px', borderRadius: '30px' }}>
          <h2 style={{ color: '#e65100', textAlign: 'center', fontSize: '2.5rem' }}>Grassland Kids Corner</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
              <h4 style={{ color: '#f9a825' }}>Cultural Storytelling</h4>
              <p>Passing down the oral traditions and fables of the Highlands to the next generation.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
              <h4 style={{ color: '#f9a825' }}>Traditional Arts</h4>
              <p>Workshops on beadwork, fabric arts, and creating traditional masks for children.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
              <h4 style={{ color: '#f9a825' }}>Youth Soccer</h4>
              <p>Engaging our youth through sports and community teamwork in Berlin.</p>
            </div>
          </div>
        </section>

        {/* --- PHOTO GALLERY --- */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#1b5e20', textAlign: 'center' }}>Event Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px', marginTop: '30px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ height: '200px', backgroundColor: '#d7ccc8', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #bbb' }}>
                <span style={{ color: '#5d4037' }}>Grassland Image {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- REGISTRATION & REGISTRY INFO --- */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          <div style={{ backgroundColor: '#4e342e', color: '#fff', padding: '40px', borderRadius: '20px' }}>
            <h2>Member Registration</h2>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required style={{ padding: '12px', borderRadius: '5px' }} />
              <input type="email" placeholder="Email" required style={{ padding: '12px', borderRadius: '5px' }} />
              <select style={{ padding: '12px', borderRadius: '5px' }}>
                <option>Interested in Dance Group</option>
                <option>Interested in Kids Events</option>
                <option>General Support</option>
              </select>
              <button type="submit" style={{ backgroundColor: '#f9a825', border: 'none', padding: '15px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }}>Join Now</button>
            </form>
          </div>
          <div style={{ padding: '40px', backgroundColor: '#eee', borderRadius: '20px' }}>
            <h3>Impressum / Registry</h3>
            <p><strong>Verein:</strong> Deutsch-Kamerunischer Kulturverein Grassland e.V.</p>
            <p><strong>Register:</strong> Amtsgericht Charlottenburg (Berlin)</p>
            <p><strong>VR Number:</strong> 23156</p>
            <p><strong>Address:</strong> Aroser Allee 110, 13407 Berlin</p>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #ddd', marginTop: '40px' }}>
        <h3>Platform Managed by Frank Fru</h3>
        <p><a href="https://frankfru.com">frankfru.com</a> | <a href="https://www.linkedin.com/in/frankfru/">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
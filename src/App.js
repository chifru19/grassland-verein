import React from 'react';

function App() {
  const galleryImages = [
    { title: "Kulturfest", category: "Tradition", color: "bg-green-200" },
    { title: "Language Lab", category: "Éducation", color: "bg-yellow-200" },
    { title: "Youth Meetup", category: "Communauté", color: "bg-red-200" },
    { title: "Tanzgruppe", category: "Culture", color: "bg-green-300" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-yellow-200">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold shadow-inner">G</div>
              <span className="text-xl font-bold tracking-tighter">
                Grassland <span className="text-yellow-600 italic text-sm">Culture e.V.</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-6 items-center font-semibold text-xs uppercase tracking-widest">
              <a href="#about" className="hover:text-green-600 transition">About</a>
              <a href="#galerie" className="hover:text-green-600 transition">Galerie</a>
              <a href="#registration" className="hover:text-green-600 transition">Mitgliedschaft</a>
              <a href="#contact" className="hover:text-green-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#052e16] py-32 px-4 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
              Unity in <span className="text-yellow-400">Diversity.</span> <br />
              <span className="text-red-500">L'union</span> fait la force.
            </h1>
            <p className="text-xl text-green-50/90 mb-10 max-w-2xl leading-relaxed italic">
              "Connecting the roots of Cameroon with the heart of Germany." <br />
              <span className="text-sm font-light mt-2 block">— Deutsch-Kamerunischer Kulturverein Grassland e.V.</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#registration" className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400 transition shadow-xl">
                Become a Member / Devenir Membre
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-red-600/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-yellow-500/10 blur-[100px]"></div>
      </header>

      {/* Pillars of the Association */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 border-b border-gray-100">
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl mb-4">🇩🇪</div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-green-800">Integration</h3>
            <p className="text-gray-500 text-sm">Supporting the Cameroonian community in Berlin through cultural dialogue and networking.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl mb-4">🇨🇲</div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-green-800">Kulturerbe</h3>
            <p className="text-gray-500 text-sm">Célébrer nos racines à travers la musique, la danse et les traditions du Grassland.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-green-800">Community</h3>
            <p className="text-gray-500 text-sm">L'union fait la force — Building a strong bridge for future generations.</p>
          </div>
      </section>

      {/* Map & Office Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-96 border-8 border-gray-50">
            <iframe 
              title="Verein Location"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.965876352934!2d13.34963531589623!3d52.56113947982218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a853bc6e66014f%3A0x6e2c3a502787884!2sAroser%20Allee%20110%2C%2013407%20Berlin!5e0!3m2!1sen!2sde!4v1680000000000!5m2!1sen!2sde"
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs">Our Office / Unser Sitz</span>
            <h2 className="text-4xl font-black mt-2 mb-6 text-gray-900 leading-tight">Visit us in <br/>Berlin-Reinickendorf</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our headquarters is located at <strong>Aroser Allee 110</strong>. We welcome all members and friends of the association to join our regular cultural meetings.
            </p>
            <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
              <p className="text-yellow-800 font-bold">Grassland e.V. Office</p>
              <p className="text-yellow-700">Aroser Allee 110, 13407 Berlin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-widest text-xs italic underline decoration-red-600 underline-offset-8">Impressum</h4>
          <p className="text-sm text-gray-400">Deutsch-Kamerunischer Kulturverein Grassland e.V.</p>
          <p className="text-sm text-gray-400 mb-8">Amtsgericht Charlottenburg: VR 23156</p>
          <div className="flex justify-center gap-6">
             <a href="https://frankfru.com" className="text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">frankfru.com</a>
             <a href="https://github.com/chifru19" className="text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-gray-700 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
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
              <a href="#about" className="hover:text-green-600 transition">Über uns / About</a>
              <a href="#galerie" className="hover:text-green-600 transition">Galerie</a>
              <a href="#registration" className="hover:text-green-600 transition">Registration</a>
              <a href="#contact" className="hover:text-green-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#052e16] py-32 px-4 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] animate-fade-in">
              Unity in <span className="text-yellow-400">Diversity.</span> <br />
              <span className="text-red-500">L'union</span> fait la force.
            </h1>
            <p className="text-xl text-green-50/90 mb-10 max-w-2xl leading-relaxed italic">
              "Connecting the roots of Cameroon with the heart of Germany." <br />
              <span className="text-sm font-light mt-2 block">— Deutsch-Kamerunischer Kulturverein Grassland e.V.</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#registration" className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400 transition shadow-xl">
                Join Us / Devenir Membre
              </a>
              <a href="#galerie" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition">
                Discover / Découvrir
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-red-600/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-yellow-500/10 blur-[100px]"></div>
      </header>

      {/* Registration & Bank Section */}
      <section id="registration" className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Registration / Anmeldung</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Download */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">01</div>
              <h3 className="font-bold text-xl mb-4">Download Form</h3>
              <p className="text-gray-500 text-sm mb-6">Laden Sie den offiziellen Mitgliedsantrag herunter (PDF).</p>
              <a href="/membership-form.pdf" download className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition text-center">
                Download PDF
              </a>
            </div>

            {/* Step 2: Payment */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">02</div>
              <h3 className="font-bold text-xl mb-4">Bank Details</h3>
              <div className="text-left w-full space-y-2 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p><strong>Bank:</strong> Berliner Sparkasse</p>
                <p className="break-all font-mono"><strong>IBAN:</strong> DE89 1005 0000 XXXX XXXX XX</p>
                <p className="text-[10px] text-gray-400 mt-2 italic">Ref: Membership + Your Name</p>
              </div>
            </div>

            {/* Step 3: Contact */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6">03</div>
              <h3 className="font-bold text-xl mb-4">Send & Confirm</h3>
              <p className="text-gray-500 text-sm mb-2 italic">Aroser Allee 110, 13407 Berlin</p>
              <p className="text-green-700 font-bold">kontakt@frankfru.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🇩🇪</div>
            <h3 className="text-xl font-bold mb-2">Integration</h3>
            <p className="text-gray-500 text-sm">Unterstützung bei der Integration und Förderung des deutsch-kamerunischen Dialogs.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🇨🇲</div>
            <h3 className="text-xl font-bold mb-2">Héritage Culturel</h3>
            <p className="text-gray-500 text-sm">Célébrer nos racines à travers la musique et les traditions du Grassland.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-500 text-sm">Empowering the youth and building a strong network for future generations.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase">Galerie / Gallery</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-square shadow-md">
              <div className={`w-full h-full ${img.color} transition-transform duration-700 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold tracking-widest">{img.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Multilingual Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <h4 className="text-yellow-500 font-bold mb-4 uppercase text-xs tracking-widest">Grassland e.V.</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aroser Allee 110, 13407 Berlin<br />
              VR 23156 | Active since 2004
            </p>
          </div>
          <div>
            <h4 className="text-green-500 font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#registration" className="hover:text-white transition">Become a Member</a></li>
              <li><a href="https://frankfru.com" className="hover:text-white transition underline decoration-green-600">frankfru.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <div className="flex space-x-4">
               <a href="https://linkedin.com/in/frankfru" className="text-xs border border-white/20 px-3 py-2 rounded hover:bg-blue-600 transition">LinkedIn</a>
               <a href="https://github.com/chifru19" className="text-xs border border-white/20 px-3 py-2 rounded hover:bg-gray-700 transition">GitHub</a>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-8 tracking-widest uppercase">
           Deutsch-Kamerunischer Kulturverein Grassland e.V. — Berlin 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';

function App() {
  const galleryImages = [
    { title: "Kulturfest", category: "Tradition", color: "bg-green-200" },
    { title: "Language Lab", category: "Éducation", color: "bg-yellow-200" },
    { title: "Youth Meetup", category: "Communauté", color: "bg-red-200" },
    { title: "Tanzgruppe", category: "Culture", color: "bg-green-300" },
  ];

  const boardMembers = [
    { name: "Name Hier", role: "1. Vorsitzender / President", lang: "DE/EN/FR" },
    { name: "Name Hier", role: "Schatzmeister / Treasurer", lang: "DE/EN" },
    { name: "Name Hier", role: "Schriftführer / Secretary", lang: "DE/FR" },
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
              <a href="#registration" className="hover:text-green-600 transition">Mitgliedschaft</a>
              <a href="#team" className="hover:text-green-600 transition">Team</a>
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
              "Connecting the roots of Cameroon with the heart of Germany."
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-red-600/10 blur-[100px]"></div>
      </header>

      {/* Board Members Section */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Unser Vorstand / Our Board</h2>
          <p className="text-gray-500">Leadership dedicated to cultural exchange.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {boardMembers.map((member, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-xl transition">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center text-green-700 font-bold text-2xl">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-green-700 text-sm font-medium mb-2">{member.role}</p>
              <span className="text-[10px] bg-gray-200 px-2 py-1 rounded text-gray-600 uppercase font-bold">{member.lang}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-24 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Membership / Anmeldung</h2>
            <p className="text-gray-600 mb-8">
              Join the Deutsch-Kamerunischer Kulturverein Grassland e.V. and become part of our trilingual community in Berlin. 
              Fill out the form and send it to our office.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                <p className="text-sm"><strong>Download:</strong> Get the PDF registration form.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                <p className="text-sm"><strong>Payment:</strong> Transfer membership fee (IBAN: DE89...)</p>
              </div>
            </div>
            <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition">
              Download Membership PDF
            </button>
          </div>
          
          {/* Map Integration */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-80 border-4 border-white">
            <iframe 
              title="Verein Location"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Aroser%20Allee%20110,%2013407%20Berlin&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-widest text-xs">Contact / Impressum</h4>
          <p className="text-sm text-gray-400">Deutsch-Kamerunischer Kulturverein Grassland e.V.</p>
          <p className="text-sm text-gray-400 mb-6">Aroser Allee 110, 13407 Berlin | VR 23156</p>
          <div className="flex justify-center gap-4">
             <a href="https://frankfru.com" className="text-xs border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition">frankfru.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
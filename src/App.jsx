import React from 'react';
import Navbar from './components/Navbar';
import CosmicCanvas from './components/CosmicCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Research from './components/Research';
import AgentTerminal from './components/AgentTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#06080d] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Interactive Starlight / Orbital Canvas Background */}
      <CosmicCanvas />

      {/* Modern Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Research />
        <AgentTerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


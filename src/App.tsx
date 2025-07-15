import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
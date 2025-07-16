import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import StructuredData from './components/StructuredData';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />;
  }

  if (showTermsOfService) {
    return <TermsOfService onClose={() => setShowTermsOfService(false)} />;
  }

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-slate-900">
        <Hero />
        <About />
        <Features />
        <Services />
        <CTA />
        <Footer 
          onShowPrivacyPolicy={() => setShowPrivacyPolicy(true)}
          onShowTermsOfService={() => setShowTermsOfService(true)}
        />
        <CookieConsent />
      </div>
    </>
  );
}

export default App;
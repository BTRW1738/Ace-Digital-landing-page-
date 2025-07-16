import React from 'react';
import { ArrowRight, Spade } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      {/* Starry sky animated blue dots */}
      <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60" style={{animation: 'pulse 3s ease-in-out infinite'}}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40" style={{animation: 'pulse 4s ease-in-out infinite 0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-300 rounded-full opacity-50" style={{animation: 'pulse 5s ease-in-out infinite 1s'}}></div>
      <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-45" style={{animation: 'pulse 3.5s ease-in-out infinite 1.5s'}}></div>
      <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-55" style={{animation: 'pulse 4.5s ease-in-out infinite 2s'}}></div>
      <div className="absolute bottom-60 right-10 w-1 h-1 bg-blue-400 rounded-full opacity-35" style={{animation: 'pulse 6s ease-in-out infinite 0.8s'}}></div>
      <div className="absolute top-1/3 left-16 w-1 h-1 bg-cyan-300 rounded-full opacity-50" style={{animation: 'pulse 3.8s ease-in-out infinite 2.5s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-40" style={{animation: 'pulse 5.2s ease-in-out infinite 1.2s'}}></div>
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-45" style={{animation: 'pulse 4.2s ease-in-out infinite 3s'}}></div>
      <div className="absolute bottom-20 right-16 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 3.2s ease-in-out infinite 0.3s'}}></div>
      
      {/* Additional starry sky dots for enhanced effect */}
      <div className="absolute top-16 right-32 w-1 h-1 bg-cyan-300 rounded-full opacity-40" style={{animation: 'pulse 4.8s ease-in-out infinite 2.2s'}}></div>
      <div className="absolute top-80 left-32 w-1 h-1 bg-blue-400 rounded-full opacity-55" style={{animation: 'pulse 3.6s ease-in-out infinite 1.8s'}}></div>
      <div className="absolute top-96 right-16 w-1 h-1 bg-cyan-400 rounded-full opacity-45" style={{animation: 'pulse 5.5s ease-in-out infinite 0.7s'}}></div>
      <div className="absolute bottom-80 left-40 w-1 h-1 bg-blue-300 rounded-full opacity-35" style={{animation: 'pulse 4.3s ease-in-out infinite 2.8s'}}></div>
      <div className="absolute bottom-96 right-40 w-1 h-1 bg-cyan-400 rounded-full opacity-50" style={{animation: 'pulse 3.9s ease-in-out infinite 1.4s'}}></div>
      <div className="absolute top-24 left-3/4 w-1 h-1 bg-blue-400 rounded-full opacity-40" style={{animation: 'pulse 5.8s ease-in-out infinite 3.2s'}}></div>
      <div className="absolute top-72 right-1/4 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 4.1s ease-in-out infinite 0.9s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 3.4s ease-in-out infinite 2.1s'}}></div>
      <div className="absolute top-48 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-35" style={{animation: 'pulse 6.2s ease-in-out infinite 1.6s'}}></div>
      <div className="absolute bottom-48 right-1/2 w-1 h-1 bg-blue-300 rounded-full opacity-55" style={{animation: 'pulse 4.7s ease-in-out infinite 2.9s'}}></div>
      <div className="absolute top-64 left-20 w-1 h-1 bg-cyan-300 rounded-full opacity-40" style={{animation: 'pulse 3.7s ease-in-out infinite 0.4s'}}></div>
      <div className="absolute bottom-64 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-45" style={{animation: 'pulse 5.1s ease-in-out infinite 2.6s'}}></div>
      <div className="absolute top-88 right-8 w-1 h-1 bg-cyan-400 rounded-full opacity-50" style={{animation: 'pulse 4.4s ease-in-out infinite 1.1s'}}></div>
      <div className="absolute bottom-88 left-8 w-1 h-1 bg-blue-300 rounded-full opacity-35" style={{animation: 'pulse 3.3s ease-in-out infinite 3.5s'}}></div>
      <div className="absolute top-52 right-12 w-1 h-1 bg-cyan-400 rounded-full opacity-45" style={{animation: 'pulse 5.9s ease-in-out infinite 0.6s'}}></div>
      <div className="absolute bottom-52 left-12 w-1 h-1 bg-blue-400 rounded-full opacity-40" style={{animation: 'pulse 4.6s ease-in-out infinite 2.4s'}}></div>
      <div className="absolute top-36 left-2/3 w-1 h-1 bg-cyan-300 rounded-full opacity-50" style={{animation: 'pulse 3.1s ease-in-out infinite 1.9s'}}></div>
      <div className="absolute bottom-36 right-2/3 w-1 h-1 bg-blue-400 rounded-full opacity-35" style={{animation: 'pulse 5.4s ease-in-out infinite 2.7s'}}></div>
      <div className="absolute top-28 right-1/5 w-1 h-1 bg-cyan-400 rounded-full opacity-45" style={{animation: 'pulse 4.9s ease-in-out infinite 0.2s'}}></div>
      <div className="absolute bottom-28 left-1/5 w-1 h-1 bg-blue-300 rounded-full opacity-40" style={{animation: 'pulse 3.8s ease-in-out infinite 3.1s'}}></div>
      
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
      {/* Social Media Links - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col space-y-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/acexdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700/50 hover:border-cyan-400/50"
            aria-label="Follow us on Instagram"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.087 4.73.222 4.058.42a5.916 5.916 0 0 0-2.134 1.384A5.916 5.916 0 0 0 .42 4.058C.222 4.73.087 5.493.048 6.71.01 7.929 0 8.396 0 12.017c0 3.624.01 4.09.048 5.309.039 1.217.174 1.98.372 2.652a5.916 5.916 0 0 0 1.384 2.134 5.916 5.916 0 0 0 2.134 1.384c.672.198 1.435.333 2.652.372 1.219.038 1.686.048 5.309.048 3.624 0 4.09-.01 5.309-.048 1.217-.039 1.98-.174 2.652-.372a5.916 5.916 0 0 0 2.134-1.384 5.916 5.916 0 0 0 1.384-2.134c.198-.672.333-1.435.372-2.652.038-1.219.048-1.686.048-5.309 0-3.621-.01-4.088-.048-5.307-.039-1.217-.174-1.98-.372-2.652A5.916 5.916 0 0 0 19.58 1.404 5.916 5.916 0 0 0 17.446.42c-.672-.198-1.435-.333-2.652-.372C13.575.01 13.108 0 9.484 0H12.017zm-.017 1.8h.017c3.568 0 3.993.01 5.204.048 1.256.057 1.937.267 2.39.444.6.233 1.03.511 1.48.961.45.45.728.88.961 1.48.177.453.387 1.134.444 2.39.038 1.211.048 1.636.048 5.204 0 3.568-.01 3.993-.048 5.204-.057 1.256-.267 1.937-.444 2.39a3.99 3.99 0 0 1-.961 1.48 3.99 3.99 0 0 1-1.48.961c-.453.177-1.134.387-2.39.444-1.211.038-1.636.048-5.204.048-3.568 0-3.993-.01-5.204-.048-1.256-.057-1.937-.267-2.39-.444a3.99 3.99 0 0 1-1.48-.961 3.99 3.99 0 0 1-.961-1.48c-.177-.453-.387-1.134-.444-2.39-.038-1.211-.048-1.636-.048-5.204 0-3.568.01-3.993.048-5.204.057-1.256.267-1.937.444-2.39.233-.6.511-1.03.961-1.48a3.99 3.99 0 0 1 1.48-.961c.453-.177 1.134-.387 2.39-.444 1.211-.038 1.636-.048 5.204-.048zm0 3.06a7.157 7.157 0 1 0 0 14.314 7.157 7.157 0 0 0 0-14.314zm0 11.8a4.643 4.643 0 1 1 0-9.286 4.643 4.643 0 0 1 0 9.286zm9.108-12.058a1.674 1.674 0 1 1-3.348 0 1.674 1.674 0 0 1 3.348 0z" clipRule="evenodd" />
            </svg>
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base font-medium whitespace-nowrap">@acexdigital</span>
          </a>
          
          {/* X (Twitter) Link */}
          <a
            href="https://x.com/AceXDigital"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 sm:space-x-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 bg-slate-900/90 backdrop-blur-lg px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-700/60 hover:border-cyan-400/60 shadow-2xl hover:shadow-cyan-400/20"
            aria-label="Follow us on X (formerly Twitter)"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base font-medium whitespace-nowrap">@AceXDigital</span>
          </a>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Spade className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ace Digital
            </span>
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
            Automate Smarter.
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Scale Faster.
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your business with cutting-edge AI automation that captures leads, nurtures prospects, and scales your revenue 24/7.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
        >
          <span className="flex items-center space-x-2">
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
        
      </div>
    </section>
  )
  );
};

export default Hero;
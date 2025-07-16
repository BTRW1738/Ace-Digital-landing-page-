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
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-60 right-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-16 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      
      {/* Additional starry sky dots for enhanced effect */}
      <div className="absolute top-16 right-32 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute top-80 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-96 right-16 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-80 left-40 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-96 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-24 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-72 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-48 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-48 right-1/2 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute top-64 left-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-64 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-88 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-88 left-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute top-52 right-12 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-52 left-12 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-36 left-2/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-36 right-2/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-28 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-28 left-1/5 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping"></div>
      
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
          <span className="flex items-center space-x-2">
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
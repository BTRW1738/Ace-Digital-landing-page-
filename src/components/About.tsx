import React from 'react';
import { Brain, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* Starry sky animated blue dots */}
      <div className="absolute top-14 left-18 w-1 h-1 bg-cyan-400 rounded-full opacity-40" style={{animation: 'pulse 4.5s ease-in-out infinite 1.2s'}}></div>
      <div className="absolute top-30 right-26 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 3.7s ease-in-out infinite 2.3s'}}></div>
      <div className="absolute top-46 left-34 w-1 h-1 bg-cyan-300 rounded-full opacity-35" style={{animation: 'pulse 5.3s ease-in-out infinite 0.8s'}}></div>
      <div className="absolute top-62 right-18 w-1 h-1 bg-blue-300 rounded-full opacity-45" style={{animation: 'pulse 4.1s ease-in-out infinite 2.7s'}}></div>
      <div className="absolute bottom-62 left-26 w-1 h-1 bg-cyan-400 rounded-full opacity-40" style={{animation: 'pulse 3.4s ease-in-out infinite 1.5s'}}></div>
      <div className="absolute bottom-46 right-34 w-1 h-1 bg-blue-400 rounded-full opacity-55" style={{animation: 'pulse 5.8s ease-in-out infinite 0.3s'}}></div>
      <div className="absolute bottom-30 left-18 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 4.6s ease-in-out infinite 3.1s'}}></div>
      <div className="absolute bottom-14 right-26 w-1 h-1 bg-blue-400 rounded-full opacity-35" style={{animation: 'pulse 3.2s ease-in-out infinite 1.9s'}}></div>
      <div className="absolute top-18 left-3/5 w-1 h-1 bg-cyan-400 rounded-full opacity-50" style={{animation: 'pulse 5.1s ease-in-out infinite 2.4s'}}></div>
      <div className="absolute top-54 right-3/5 w-1 h-1 bg-blue-300 rounded-full opacity-40" style={{animation: 'pulse 4.8s ease-in-out infinite 0.6s'}}></div>
      <div className="absolute bottom-54 left-1/6 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 3.9s ease-in-out infinite 2.8s'}}></div>
      <div className="absolute bottom-18 right-1/6 w-1 h-1 bg-blue-400 rounded-full opacity-35" style={{animation: 'pulse 5.6s ease-in-out infinite 1.7s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Ace Digital
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              At Ace Digital, we empower businesses to automate smarter and scale faster using cutting-edge AI automation systems.
            </p>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              We help eliminate time-wasting manual tasks, streamline operations, and increase efficiency across your workflow — so you can focus on what really matters: growth and impact.
            </p>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Whether you're a small team or a growing enterprise, our solutions reduce stress, boost productivity, and turn chaos into control.
            </p>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Ace Digital exists to solve the hidden inefficiencies that cost you time and money. If you're ready to operate like a high-level business — we build the systems to get you there.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Results-Driven</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">Scalable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
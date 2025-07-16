import React from 'react';
import { Brain, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
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
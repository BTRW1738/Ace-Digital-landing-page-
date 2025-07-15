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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              At Ace Digital, we're pioneering the future of business automation with cutting-edge AI technology. 
              Our intelligent systems don't just automate tasks—they think, learn, and adapt to deliver exceptional 
              results that scale your business exponentially.
            </p>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              From capturing and nurturing leads to seamlessly integrating with your existing CRM systems, 
              we've helped hundreds of businesses achieve <span className="text-cyan-400 font-semibold">300%+ growth</span> 
              in qualified leads while reducing operational costs by up to <span className="text-cyan-400 font-semibold">70%</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
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
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl"></div>
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Lead Conversion Rate</span>
                  <span className="text-2xl font-bold text-cyan-400">+300%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Cost Reduction</span>
                  <span className="text-2xl font-bold text-blue-400">70%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Response Time</span>
                  <span className="text-2xl font-bold text-cyan-400">&lt;1s</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
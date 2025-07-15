import React from 'react';
import { TrendingUp, Clock, Plug, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Built For Scale",
      description: "Our AI systems grow with your business, handling increased volume without compromising quality.",
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: Clock,
      title: "24/7 Lead Capture",
      description: "Never miss a lead again with round-the-clock automated lead capture and qualification.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Plug,
      title: "Plug-and-Play CRM Integrations",
      description: "Seamlessly integrate with your existing tools or we'll set up the perfect system for you.",
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: MessageCircle,
      title: "Human-Like A.I Responses",
      description: "Advanced natural language processing that creates genuine, personalized conversations.",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose Ace Digital
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the power of next-generation AI automation
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
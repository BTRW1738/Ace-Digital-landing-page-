import React from 'react';
import { Bot, Users, Database, Workflow, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "A.I-Powered Virtual Agents",
      description: "Intelligent agents that handle customer inquiries, qualify leads, and provide 24/7 support with human-like responses."
    },
    {
      icon: Users,
      title: "Lead Generation Systems",
      description: "Automated systems that identify, capture, and nurture high-quality leads across multiple channels."
    },
    {
      icon: Database,
      title: "CRM Setup & Integrations",
      description: "Seamless integration with your existing CRM or setup of new systems to centralize your customer data."
    },
    {
      icon: Workflow,
      title: "Workflow Automations",
      description: "Custom automation workflows that eliminate repetitive tasks and streamline your business processes."
    },
    {
      icon: MessageSquare,
      title: "Chatbot Funnels",
      description: "Intelligent chatbot funnels that guide prospects through your sales process and convert visitors into customers."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      
      {/* Top spacing line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* Starry sky animated blue dots */}
      <div className="absolute top-12 left-20 w-1 h-1 bg-cyan-400 rounded-full opacity-45" style={{animation: 'pulse 4.2s ease-in-out infinite 1.3s'}}></div>
      <div className="absolute top-28 right-28 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 5.1s ease-in-out infinite 2.1s'}}></div>
      <div className="absolute top-44 left-36 w-1 h-1 bg-cyan-300 rounded-full opacity-40" style={{animation: 'pulse 3.8s ease-in-out infinite 0.7s'}}></div>
      <div className="absolute top-60 right-20 w-1 h-1 bg-blue-300 rounded-full opacity-35" style={{animation: 'pulse 4.9s ease-in-out infinite 2.8s'}}></div>
      <div className="absolute bottom-60 left-28 w-1 h-1 bg-cyan-400 rounded-full opacity-55" style={{animation: 'pulse 3.5s ease-in-out infinite 1.6s'}}></div>
      <div className="absolute bottom-44 right-36 w-1 h-1 bg-blue-400 rounded-full opacity-40" style={{animation: 'pulse 5.7s ease-in-out infinite 0.4s'}}></div>
      <div className="absolute bottom-28 left-20 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 4.3s ease-in-out infinite 3.2s'}}></div>
      <div className="absolute bottom-12 right-28 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 3.9s ease-in-out infinite 1.8s'}}></div>
      <div className="absolute top-16 left-2/3 w-1 h-1 bg-cyan-400 rounded-full opacity-35" style={{animation: 'pulse 5.4s ease-in-out infinite 2.5s'}}></div>
      <div className="absolute top-52 right-2/3 w-1 h-1 bg-blue-300 rounded-full opacity-45" style={{animation: 'pulse 4.1s ease-in-out infinite 0.9s'}}></div>
      <div className="absolute bottom-52 left-1/5 w-1 h-1 bg-cyan-300 rounded-full opacity-40" style={{animation: 'pulse 3.6s ease-in-out infinite 2.9s'}}></div>
      <div className="absolute bottom-16 right-1/5 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 5.2s ease-in-out infinite 1.4s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform your business operations
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
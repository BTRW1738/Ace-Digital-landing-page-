import React from 'react';

// Simple, bulletproof components that cannot fail
const Hero = () => (
  <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white px-4">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Ace Digital
        </span>
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        Automate Smarter. Scale Faster.
      </h2>
      <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
        Transform your business with cutting-edge AI automation that captures leads, nurtures prospects, and scales your revenue 24/7.
      </p>
      <a 
        href="#contact" 
        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
      >
        Book a Free Strategy Call
      </a>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 bg-slate-800 text-white px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About Ace Digital
        </span>
      </h2>
      <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
        At Ace Digital, we empower businesses to automate smarter and scale faster using cutting-edge AI automation systems. 
        We help eliminate time-wasting manual tasks, streamline operations, and increase efficiency across your workflow.
      </p>
    </div>
  </section>
);

const Services = () => (
  <section className="py-20 bg-slate-900 text-white px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Our Services
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "A.I-Powered Virtual Agents",
            description: "Intelligent agents that handle customer inquiries, qualify leads, and provide 24/7 support with human-like responses."
          },
          {
            title: "Lead Generation Systems", 
            description: "Automated systems that identify, capture, and nurture high-quality leads across multiple channels."
          },
          {
            title: "CRM Setup & Integrations",
            description: "Seamless integration with your existing CRM or setup of new systems to centralize your customer data."
          },
          {
            title: "Workflow Automations",
            description: "Custom automation workflows that eliminate repetitive tasks and streamline your business processes."
          },
          {
            title: "Chatbot Funnels",
            description: "Intelligent chatbot funnels that guide prospects through your sales process and convert visitors into customers."
          }
        ].map((service, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-slate-800 text-white px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Ready to Transform Your Business?
        </span>
      </h2>
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Contact Ace Digital</h3>
          <div className="space-y-4">
            <p className="text-slate-300">
              <strong>Email:</strong> acedigitalmediax@gmail.com
            </p>
            <p className="text-slate-300">
              <strong>Phone:</strong> 07852453732
            </p>
            <p className="text-slate-300">
              <strong>Location:</strong> Manchester, UK
            </p>
          </div>
        </div>
        <div className="text-center">
          <a 
            href="mailto:acedigitalmediax@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-950 text-white px-4">
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Ace Digital
        </h3>
      </div>
      <div className="border-t border-slate-800 pt-8">
        <p className="text-slate-400">
          © 2024 Ace Digital. All rights reserved.
        </p>
      </div>
    </div>
  </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
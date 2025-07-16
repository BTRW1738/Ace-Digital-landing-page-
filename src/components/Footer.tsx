import React from 'react';
import { Spade, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Spade className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ace Digital
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transforming businesses with cutting-edge AI automation solutions that scale your revenue and reduce operational costs.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>acedigitalmediax@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>07852453732</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Manchester, UK</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Virtual Agents</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Lead Generation</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">CRM Integration</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Workflow Automation</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Chatbot Funnels</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            © 2024 Ace Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
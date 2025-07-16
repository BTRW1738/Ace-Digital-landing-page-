import React from 'react';
import { Spade, Mail, Phone, MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  onShowPrivacyPolicy: () => void;
  onShowTermsOfService: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowPrivacyPolicy, onShowTermsOfService }) => {
  // Custom X (Twitter) icon component since lucide-react doesn't have the new X logo
  const XIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
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
          
          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={onShowPrivacyPolicy}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onShowTermsOfService}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Social Media */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="space-y-3">
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/acexdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">@acexdigital</span>
              </a>
              
              {/* X (Twitter) Link */}
              <a
                href="https://x.com/AceXDigital"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-all duration-300"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <XIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">@AceXDigital</span>
              </a>
            </div>
          </div>
          
          {/* Business Information */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="text-lg font-semibold text-white">Business Information</h4>
            <div className="text-slate-300 text-sm space-y-1">
              <p>Ace Digital - AI Automation Solutions</p>
              <p>Registered in England and Wales</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Ace Digital. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <button
                onClick={onShowPrivacyPolicy}
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={onShowTermsOfService}
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
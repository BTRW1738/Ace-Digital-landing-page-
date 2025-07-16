import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    useCase: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="cta-form">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* Starry sky animated blue dots */}
      <div className="absolute top-16 left-22 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-30 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-48 left-38 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute top-64 right-22 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-64 left-30 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-48 right-38 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-22 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-30 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 left-2/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-56 right-2/5 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-56 left-1/7 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/7 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Book your free strategy call and discover how AI automation can 10x your growth
          </p>
        </div>
        
        {/* Form Container */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 rounded-2xl border border-slate-700 shadow-2xl">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Book Your Free Strategy Call</h3>
            <p className="text-slate-300">Fill out the form below and we'll be in touch within 24 hours</p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h4>
              <p className="text-slate-300">We'll be in touch within 24 hours to schedule your strategy call.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-slate-300 mb-2">
                  What's your biggest challenge with lead generation? *
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  required
                  rows={4}
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your current lead generation challenges and what you'd like to achieve..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span>Book My Free Strategy Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
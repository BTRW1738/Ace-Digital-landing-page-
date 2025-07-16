import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { supabase, ConsultationRequest } from '../lib/supabase';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    useCase: '',
    selectedService: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare data for Supabase
      const consultationData: ConsultationRequest = {
        name: formData.name,
        email: formData.email,
        business_name: formData.businessName,
        use_case: formData.useCase,
        selected_service: formData.selectedService,
        additional_info: formData.additionalInfo || undefined,
      };

      // Insert into Supabase
      const { data, error: supabaseError } = await supabase
        .from('consultation_requests')
        .insert([consultationData])
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      console.log('Consultation request saved:', data);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        businessName: '',
        useCase: '',
        selectedService: '',
        additionalInfo: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting consultation request:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="absolute top-16 left-22 w-1 h-1 bg-cyan-400 rounded-full opacity-40" style={{animation: 'pulse 4.4s ease-in-out infinite 1.3s'}}></div>
      <div className="absolute top-32 right-30 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 3.5s ease-in-out infinite 2.4s'}}></div>
      <div className="absolute top-48 left-38 w-1 h-1 bg-cyan-300 rounded-full opacity-35" style={{animation: 'pulse 5.7s ease-in-out infinite 0.7s'}}></div>
      <div className="absolute top-64 right-22 w-1 h-1 bg-blue-300 rounded-full opacity-45" style={{animation: 'pulse 4.2s ease-in-out infinite 2.8s'}}></div>
      <div className="absolute bottom-64 left-30 w-1 h-1 bg-cyan-400 rounded-full opacity-40" style={{animation: 'pulse 3.8s ease-in-out infinite 1.6s'}}></div>
      <div className="absolute bottom-48 right-38 w-1 h-1 bg-blue-400 rounded-full opacity-55" style={{animation: 'pulse 5.1s ease-in-out infinite 0.4s'}}></div>
      <div className="absolute bottom-32 left-22 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 4.6s ease-in-out infinite 3.2s'}}></div>
      <div className="absolute bottom-16 right-30 w-1 h-1 bg-blue-400 rounded-full opacity-35" style={{animation: 'pulse 3.9s ease-in-out infinite 1.9s'}}></div>
      <div className="absolute top-20 left-2/5 w-1 h-1 bg-cyan-400 rounded-full opacity-50" style={{animation: 'pulse 5.4s ease-in-out infinite 2.5s'}}></div>
      <div className="absolute top-56 right-2/5 w-1 h-1 bg-blue-300 rounded-full opacity-40" style={{animation: 'pulse 4.8s ease-in-out infinite 0.9s'}}></div>
      <div className="absolute bottom-56 left-1/7 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 3.3s ease-in-out infinite 2.7s'}}></div>
      <div className="absolute bottom-20 right-1/7 w-1 h-1 bg-blue-400 rounded-full opacity-35" style={{animation: 'pulse 5.8s ease-in-out infinite 1.2s'}}></div>
      
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
              <p className="text-slate-300">
                Your consultation request has been submitted successfully! We'll be in touch within 24 hours to schedule your strategy call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                  <p className="text-red-400 text-sm">
                    <strong>Error:</strong> {error}
                  </p>
                </div>
              )}
              
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
                <label htmlFor="selectedService" className="block text-sm font-medium text-slate-300 mb-2">
                  Selected Service *
                </label>
                <select
                  id="selectedService"
                  name="selectedService"
                  required
                  value={formData.selectedService}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="" disabled className="text-slate-400">
                    Select a service
                  </option>
                  <option value="A.I agent">A.I agent</option>
                  <option value="Lead generation">Lead generation</option>
                  <option value="CRM integration">CRM integration</option>
                  <option value="Workflow automation">Workflow automation</option>
                  <option value="Chatbot funnel">Chatbot funnel</option>
                  <option value="Unsure">Unsure</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-slate-300 mb-2">
                  What's the biggest challenge you're facing and what do you want to achieve? *
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  required
                  rows={4}
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Describe your main business challenges and the goals you want to accomplish..."
                />
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  maxLength={500}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Please share any specific requirements, questions, or details about your project..."
                />
                <div className="text-right mt-1">
                  <span className="text-xs text-slate-400">
                    {formData.additionalInfo.length}/500 characters
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span>{isSubmitting ? 'Submitting...' : 'Book My Free Strategy Call'}</span>
                  {!isSubmitting && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
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
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { supabase, type ConsultationRequest } from '../lib/supabase';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business_name: '',
    use_case: '',
    selected_service: 'Unsure',
    additional_info: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const consultationData: ConsultationRequest = {
        name: formData.name,
        email: formData.email,
        business_name: formData.business_name,
        use_case: formData.use_case,
        selected_service: formData.selected_service,
        additional_info: formData.additional_info || null
      };

      const { error: insertError } = await supabase
        .from('consultation_requests')
        .insert([consultationData]);

      if (insertError) {
        throw insertError;
      }

      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        business_name: '',
        use_case: '',
        selected_service: 'Unsure',
        additional_info: ''
      });

    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="cta-form" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-slate-300 text-lg mb-6">
              Your consultation request has been submitted successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-form" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* Starry sky animated blue dots */}
      <div className="absolute top-16 left-20 w-1 h-1 bg-cyan-400 rounded-full opacity-45" style={{animation: 'pulse 4.1s ease-in-out infinite 1.2s'}}></div>
      <div className="absolute top-32 right-28 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 5.3s ease-in-out infinite 2.4s'}}></div>
      <div className="absolute top-48 left-36 w-1 h-1 bg-cyan-300 rounded-full opacity-40" style={{animation: 'pulse 3.7s ease-in-out infinite 0.6s'}}></div>
      <div className="absolute top-64 right-20 w-1 h-1 bg-blue-300 rounded-full opacity-35" style={{animation: 'pulse 4.8s ease-in-out infinite 2.9s'}}></div>
      <div className="absolute bottom-64 left-28 w-1 h-1 bg-cyan-400 rounded-full opacity-55" style={{animation: 'pulse 3.4s ease-in-out infinite 1.7s'}}></div>
      <div className="absolute bottom-48 right-36 w-1 h-1 bg-blue-400 rounded-full opacity-40" style={{animation: 'pulse 5.6s ease-in-out infinite 0.3s'}}></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-cyan-300 rounded-full opacity-45" style={{animation: 'pulse 4.2s ease-in-out infinite 3.1s'}}></div>
      <div className="absolute bottom-16 right-28 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{animation: 'pulse 3.8s ease-in-out infinite 1.5s'}}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Book a free strategy call to discover how AI automation can revolutionize your operations and scale your revenue.
          </p>
        </div>
        
        {/* Consultation Form */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 rounded-2xl border border-slate-700 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            {/* Business Name */}
            <div>
              <label htmlFor="business_name" className="block text-sm font-medium text-slate-300 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                value={formData.business_name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your business name"
              />
            </div>
            
            {/* Service Selection */}
            <div>
              <label htmlFor="selected_service" className="block text-sm font-medium text-slate-300 mb-2">
                Which service interests you most?
              </label>
              <select
                id="selected_service"
                name="selected_service"
                value={formData.selected_service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
              >
                <option value="Unsure">I'm not sure yet</option>
                <option value="A.I agent">A.I Virtual Agents</option>
                <option value="Lead Generation">Lead Generation Systems</option>
                <option value="CRM Integration">CRM Setup & Integration</option>
                <option value="Workflow Automation">Workflow Automation</option>
                <option value="Chatbot Funnels">Chatbot Funnels</option>
              </select>
            </div>
            
            {/* Business Challenge */}
            <div>
              <label htmlFor="use_case" className="block text-sm font-medium text-slate-300 mb-2">
                What's your biggest business challenge right now? *
              </label>
              <textarea
                id="use_case"
                name="use_case"
                value={formData.use_case}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Describe your main business challenge or goal..."
              />
            </div>
            
            {/* Additional Information */}
            <div>
              <label htmlFor="additional_info" className="block text-sm font-medium text-slate-300 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additional_info"
                name="additional_info"
                value={formData.additional_info}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Any additional details you'd like to share..."
              />
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Book Your Free Strategy Call</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
import React from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-slate-300 text-lg">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using Ace Digital's website (acexdigital.co.uk) and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          {/* Services Description */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <div className="text-slate-300 space-y-3">
              <p>Ace Digital provides AI automation solutions including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>AI-powered virtual agents and chatbots</li>
                <li>Lead generation and qualification systems</li>
                <li>CRM setup and integrations</li>
                <li>Workflow automation solutions</li>
                <li>Business process optimization</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">User Responsibilities</h2>
            </div>
            <div className="text-slate-300 space-y-3">
              <p>When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of any access credentials</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          {/* Service Availability */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="text-slate-300 leading-relaxed">
              While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <div className="text-slate-300 space-y-3">
              <p>All content, features, and functionality of our services are owned by Ace Digital and are protected by copyright, trademark, and other intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify, or create derivative works of our content without explicit written permission.</p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            </div>
            <div className="text-slate-300 space-y-3">
              <p>To the fullest extent permitted by law, Ace Digital shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or technical failures</li>
                <li>Third-party actions or content</li>
              </ul>
              <p>Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.</p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Governing Law</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="text-slate-300 space-y-2">
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <div className="space-y-1">
                <p><strong>Email:</strong> acedigitalmediax@gmail.com</p>
                <p><strong>Phone:</strong> 07852453732</p>
                <p><strong>Address:</strong> Manchester, UK</p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
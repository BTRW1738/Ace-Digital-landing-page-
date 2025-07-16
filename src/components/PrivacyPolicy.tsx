import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
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
              <Shield className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              At Ace Digital we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website acexdigital.co.uk and use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Personal Information</h3>
                <p className="leading-relaxed">
                  When you fill out our consultation request form, we collect:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Business name</li>
                  <li>Business challenges and goals</li>
                  <li>Service preferences</li>
                  <li>Additional information you provide</li>
                </ul>
              </div>
              
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            </div>
            <div className="text-slate-300 space-y-3">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Respond to your consultation requests and inquiries</li>
                <li>Provide and improve our AI automation services</li>
                <li>Send you relevant information about our services</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
            <div className="text-slate-300 space-y-3">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
              and regular security assessments.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <div className="text-slate-300 space-y-3">
              <p>We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve our website functionality</li>
                <li>Provide personalized content</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <div className="text-slate-300 space-y-3">
              <p>Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Contact Us</h2>
            </div>
            <div className="text-slate-300 space-y-2">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-1">
                <p><strong>Email:</strong> acedigitalmediax@gmail.com</p>
                <p><strong>Phone:</strong> 07852453732</p>
                <p><strong>Address:</strong> Manchester, UK</p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this 
              Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
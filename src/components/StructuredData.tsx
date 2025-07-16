import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ace Digital",
    "url": "https://acexdigital.co.uk",
    "logo": "https://acexdigital.co.uk/logo.png",
    "description": "AI automation solutions that help businesses automate smarter and scale faster with cutting-edge AI technology.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressCountry": "UK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "07852453732",
      "contactType": "customer service",
      "email": "acedigitalmediax@gmail.com"
    },
    "sameAs": [
      "https://www.instagram.com/acexdigital/",
      "https://x.com/AceXDigital"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Virtual Agents",
        "description": "Intelligent agents that handle customer inquiries and provide 24/7 support"
      },
      {
        "@type": "Service", 
        "name": "Lead Generation Systems",
        "description": "Automated systems that identify, capture, and nurture high-quality leads"
      },
      {
        "@type": "Service",
        "name": "CRM Integration",
        "description": "Seamless integration with existing CRM systems"
      },
      {
        "@type": "Service",
        "name": "Workflow Automation",
        "description": "Custom automation workflows that eliminate repetitive tasks"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
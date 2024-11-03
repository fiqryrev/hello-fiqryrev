import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '../../components/ErrorBoundary';

const ContactForm = dynamic(() => import('./contact-form').then(mod => mod.default), {
  ssr: false,
  loading: () => <p>Loading ContactForm...</p>
});

export default function ContactFormPage() {
  console.log('Rendering ContactFormPage');
  
  return (
    <ErrorBoundary>
      <div>
        <ContactForm />
      </div>
    </ErrorBoundary>
  );
}

'use client';

import React, { useState } from 'react';
import { Send, Calendar, Users, MessageSquare, Briefcase, Code, Brain, Target, Rocket, ChartBar, GitBranch, Database } from 'lucide-react';
import emailjs from '@emailjs/browser';

console.log('ContactForm component file is being loaded');

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    eventDetails: '',
    receiveUpdates: false,
    eventType: 'speaking'
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    message: ''
  });

  const contentSections = {
    speaking: {
      title: "Speakership Session",
      icon: Calendar,
      features: [
        {
          icon: Users,
          title: "Audience-Focused",
          description: "Custom-tailored content for your specific audience"
        },
        {
          icon: MessageSquare,
          title: "Interactive Format",
          description: "Engaging Q&A and hands-on demonstrations"
        },
        {
          icon: Send,
          title: "Actionable Insights",
          description: "Real-world cases and practical applications"
        }
      ]
    },
    workshop: {
      title: "Workshop Session",
      icon: Briefcase,
      features: [
        {
          icon: Brain,
          title: "Hands-on Learning",
          description: "Interactive exercises and practical workshops"
        },
        {
          icon: Target,
          title: "Focused Training",
          description: "Specialized topics and in-depth knowledge transfer"
        },
        {
          icon: Code,
          title: "Skill Development",
          description: "Build practical skills through guided practice"
        }
      ]
    },
    project: {
      title: "Project Collaboration",
      icon: Rocket,
      features: [
        {
          icon: ChartBar,
          title: "Data Analytics",
          description: "Advanced analytics and insights development"
        },
        {
          icon: GitBranch,
          title: "AI and ML Development",
          description: "Machine learning and AI-powered solutions"
        },
        {
          icon: Database,
          title: "Data Engineering",
          description: "Rearchitect your data intelligence platform"
        }
      ]
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '' });
    
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.workEmail,
      event_type: formData.eventType === 'speaking' ? 'Speakership' : 
                 formData.eventType === 'workshop' ? 'Workshop' : 'Project',
      event_details: formData.eventDetails,
      newsletter_signup: formData.receiveUpdates ? 'Yes' : 'No'
    };

    try {
      await emailjs.send(
        'hellofiqryrev_email',
        'hellofiqryrev_contactme',
        templateParams,
        'znZf-mzsyCBJ9qDzb'
      );
      
      setStatus({
        submitting: false,
        message: 'Message sent successfully! We will get back to you soon.'
      });
      setFormData({
        fullName: '',
        workEmail: '',
        eventDetails: '',
        receiveUpdates: false,
        eventType: 'speaking'
      });
    } catch (error) {
      setStatus({
        submitting: false,
        message: 'There was an error sending your message. Please try again.'
      });
    }
  };

  const CurrentIcon = contentSections[formData.eventType as keyof typeof contentSections].icon;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          Lets work together
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Bring cutting-edge AI, Data Science, Analytics and Engineering insights to your workplace and your next project.
        </p>

        <div className="mb-8">
          <div className="inline-flex rounded-lg p-1 bg-gray-800/50 border border-gray-700/50">
            {(['speaking', 'workshop', 'project'] as const).map((type) => (
              <button 
                key={type}
                className={`px-6 py-2 rounded-lg transition-colors ${formData.eventType === type ? 'bg-teal-500 text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setFormData(prev => ({ ...prev, eventType: type }))}
                type="button"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/40 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 mb-8">
          <h2 className="text-xl text-gray-200 mb-6 flex items-center">
            <CurrentIcon className="mr-2 text-teal-500" />
            {contentSections[formData.eventType as keyof typeof contentSections].title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contentSections[formData.eventType as keyof typeof contentSections].features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
                  <FeatureIcon className="text-yellow-500 mb-2" />
                  <h3 className="text-gray-200 font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Full name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700/50 focus:border-teal-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Work email</label>
            <input 
              type="email" 
              name="workEmail"
              value={formData.workEmail}
              onChange={handleInputChange}
              placeholder="Enter your work email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700/50 focus:border-teal-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Event details</label>
            <textarea 
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleInputChange}
              placeholder={`Please share:\n• Type of ${formData.eventType}\n• Expected date\n• Audience size and background\n• Preferred topics or focus areas`}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700/50 focus:border-teal-500 focus:outline-none transition-colors h-40"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={status.submitting}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={`text-center p-3 rounded-lg ${status.message.includes('error') ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
              {status.message}
            </div>
          )}

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Confirm your request by{' '}
              <a 
                href="https://wa.me/6281281419836" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
              >
                Chat me on WhatsApp
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

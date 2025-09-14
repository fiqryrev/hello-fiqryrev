'use client';

import React, { useState, useEffect } from 'react';
import { Send, Calendar, Users, MessageSquare, Briefcase, Code, Brain, Target, Rocket, ChartBar, GitBranch, Database } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { RainbowButton } from '../../../components/ui/rainbow-button';

console.log('ContactForm component file is being loaded');

const ParticleEffect = () => {
  useEffect(() => {
    const container = document.querySelector('.particle-container');
    if (!container) return;

    const maxParticles = 50;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const particleInterval = setInterval(() => {
      if (container.children.length < maxParticles) {
        createParticle();
      }
    }, 200);

    return () => clearInterval(particleInterval);
  }, []);

  return <div className="particle-container"></div>;
};

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
    <div className="min-h-screen bg-black text-white relative w-full m-0 p-0">
      <ParticleEffect />
      <div className="relative z-10 pt-24">
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          {/* Professional Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Let's Collaborate</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work Together
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light">
              Bring cutting-edge AI, Data Science & Engineering insights to your organization
            </p>
          </div>

          {/* Main Form Container with Glassmorphism */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

              <div className="mb-8 flex justify-center">
                <div className="inline-flex rounded-xl p-1 bg-white/5 backdrop-blur-sm border border-purple-400/20">
                  {(['speaking', 'workshop', 'project'] as const).map((type) => (
                    <button
                      key={type}
                      className={`px-6 py-2 rounded-lg transition-all duration-300 ${formData.eventType === type ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                      onClick={() => setFormData(prev => ({ ...prev, eventType: type }))}
                      type="button"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-400/10 mb-8">
                <h2 className="text-xl text-white mb-6 flex items-center justify-center">
                  <CurrentIcon className="mr-2 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    {contentSections[formData.eventType as keyof typeof contentSections].title}
                  </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {contentSections[formData.eventType as keyof typeof contentSections].features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-4 rounded-lg border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                        <FeatureIcon className="text-purple-400 mb-2" />
                        <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                        <p className="text-white/60 text-sm">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm text-white border border-purple-400/20 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300 placeholder-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium">Work email</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="Enter your work email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm text-white border border-purple-400/20 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300 placeholder-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 font-medium">Event details</label>
                  <textarea
                    name="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleInputChange}
                    placeholder={`Please share:\n• Type of ${formData.eventType}\n• Expected date\n• Audience size and background\n• Preferred topics or focus areas`}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm text-white border border-purple-400/20 focus:border-purple-400/50 focus:bg-white/10 focus:outline-none transition-all duration-300 h-40 placeholder-white/30"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {status.message && (
                  <div className={`text-center p-4 rounded-xl backdrop-blur-sm ${status.message.includes('error') ? 'bg-red-500/20 text-red-200 border border-red-400/30' : 'bg-green-500/20 text-green-200 border border-green-400/30'}`}>
                    {status.message}
                  </div>
                )}

                {/* Separator with Gradient */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-400/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-black px-4">
                      <span className="text-purple-400">✦</span>
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-white/60">
                    Prefer instant messaging? {' '}
                    <a
                      href="https://wa.me/6281281419836"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      Chat me on WhatsApp
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

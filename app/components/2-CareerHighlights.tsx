"use client";

import React from 'react';
import EventSelector from '@/components/ui/event-selector';
import { Award, Users, Mic, Globe, BookOpen, Briefcase, GraduationCap, Cloud, Building2, Home, ShoppingBag, Brain } from 'lucide-react';
import { careerEvents } from '@/app/data/career-events';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Building2,
  Home,
  ShoppingBag,
  Brain,
  Award,
  Mic,
  Briefcase,
  BookOpen,
  GraduationCap,
  Users,
  Globe,
};

const CareerHighlights: React.FC = () => {
  const events = careerEvents.map((event) => {
    const IconComponent = iconMap[event.iconName] || Globe;
    return {
      title: event.title,
      date: event.date,
      description: event.description,
      image: event.image,
      icon: <IconComponent className="w-5 h-5 text-white" />,
    };
  });

  return <EventSelector events={events} />;
};

export default CareerHighlights;

"use client";

import React from 'react';
import EventSelector from '@/components/ui/event-selector';
import { Award, Users, Mic, Globe, BookOpen, Briefcase, GraduationCap, Cloud, Building2, Home, ShoppingBag, Brain } from 'lucide-react';

const CareerHighlights: React.FC = () => {
  // Event data with icons - extracted from CV speakership section
  const events = [
    {
      title: "AWS Summit Jakarta 2025",
      date: "2025 - Jakarta, Indonesia",
      description: "Speaker at AWS Summit Jakarta 2025, sharing expertise on the multi-agents collaboration",
      image: "/images/highlights/events_aws.JPG",
      icon: <Cloud className="w-5 h-5 text-white" />
    },
    {
      title: "BSI Corporate Training",
      date: "2025 - Jakarta, Indonesia",
      description: "Conducted training sessions, enhancing team skills in data analytics at Bank Syariah Indonesia.",
      image: "/images/highlights/events_bsi.jpeg",
      icon: <Building2 className="w-5 h-5 text-white" />
    },
    {
      title: "Mamikos Dataverse",
      date: "2023 - Jakarta, Indonesia",
      description: "Delivered insights on AI & data-driven decision making for property technology platforms.",
      image: "/images/highlights/events_mamikos.jpeg",
      icon: <Home className="w-5 h-5 text-white" />
    },
    {
      title: "Evermos Data Governance",
      date: "2023 - Jakarta, Indonesia",
      description: "Conducted workshop on data governance and deep dive into Indonesian Personal Data Protection Act (UU PDP 2022).",
      image: "/images/highlights/events_evermos.jpeg",
      icon: <ShoppingBag className="w-5 h-5 text-white" />
    },
    {
      title: "UAI Fortex 5.0 ",
      date: "2023 - Jakarta, Indonesia",
      description: "Presented the role of data scientist in the future.",
      image: "/images/highlights/events_fortex_uai.jpeg",
      icon: <Brain className="w-5 h-5 text-white" />
    },
    {
      title: "AngelHacks - City Judge",
      date: "2024 - Jakarta, Indonesia",
      description: "Served as city judge, reviewing hackathon submissions for 'Financial Inclusion' topic at Grab HQ.",
      image: "/images/highlights/events_angelhacks.jpeg",
      icon: <Award className="w-5 h-5 text-white" />
    },
    {
      title: "GarudaHacks Closing Seminar",
      date: "2024 - Tangerang, Indonesia",
      description: "Delivered closing seminar on Paper.id's engineering culture in AI and automation.",
      image: "/images/highlights/events_garudahacks.jpg",
      icon: <Mic className="w-5 h-5 text-white" />
    },
    {
      title: "IFG Corporate Training",
      date: "2024 - Jakarta, Indonesia",
      description: "Conducted training sessions, enhancing team skills in data analytics at IFG Tower.",
      image: "/images/highlights/events_ifg_corporate_training.jpeg",
      icon: <Briefcase className="w-5 h-5 text-white" />
    },
    {
      title: "LKPP Workshop",
      date: "2023 - Jakarta, Indonesia",
      description: "Delivered offline workshop on introduction to data analysis with SQL at LKPP.",
      image: "/images/highlights/events_lkpp.jpg",
      icon: <Briefcase className="w-5 h-5 text-white" />
    },
    {
      title: "Webinar at UNTAN",
      date: "2023 - Pontianak, Indonesia",
      description: "Delivered webinar on 'Actuary Science and Data Science in Industry 4.0 Era'.",
      image: "/images/highlights/events_untan.jpg",
      icon: <BookOpen className="w-5 h-5 text-white" />
    },
    {
      title: "RASIO Talkshow",
      date: "2022 - Sumedang, Indonesia",
      description: "Spoke about harnessing Big Data & AI for achieving SDGs at Universitas Padjadjaran.",
      image: "/images/highlights/events_rasio.jpg",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      title: "Meetup useR! Indonesia",
      date: "2020 - Bandung, Indonesia",
      description: "Engaged with R Community x ML ID at Bukalapak, sharing insights on Time Series Analysis.",
      image: "/images/highlights/events_bukalapak_r_community.jpeg",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      title: "IFCS Conference",
      date: "2019 - Thessaloniki, Greece",
      description: "Presented NLP research findings at the International Federation of Classification Societies.",
      image: "/images/highlights/events_ifcs_greece.png",
      icon: <Globe className="w-5 h-5 text-white" />
    }
  ];

  return <EventSelector events={events} />;
};

export default CareerHighlights;
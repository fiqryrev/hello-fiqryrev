"use client";

import { useState, useCallback, useEffect } from "react";
import Image from 'next/image';

interface HighlightEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}

const events: HighlightEvent[] = [
    {
    id: 1,
    title: "AngelHacks - City Judge",
    date: "2024 - Grab Office Headquarter, Jakarta, Indonesia",
    description: "Served as a city judge in Indonesia, managed to review the hackathon submissions of 'Financial Inclusion' topic.",
    imageSrc: "/images/highlights/events_angelhacks.jpeg"
    },
    {
    id: 2,
    title: "Meetup useR! Indonesia Bandung",
    date: "2020 - Bukalapak RnD Office, Bandung, Indonesia",
    description: "Engaged with the Indonesia R Community x MachineLearning ID at Bukalapak, sharing insights and best practices about Time Series Analysis.",
    imageSrc: "/images/highlights/events_bukalapak_r_community.jpeg"
    },
    {
    id: 3,
    title: "GarudaHacks Closing Seminar",
    date: "2024 - Universitas Multimedia Nusantara, Tangerang, Indonesia",
    description: "Delivered a closing seminar about Paper.id engineering culture about AI and automation.",
    imageSrc: "/images/highlights/events_garudahacks.jpg"
    },
    {
    id: 4,
    title: "16th of International Federation of Classification Societies Conference (IFCS)",
    date: "2019, Thessaloniki Concert Hall, Thessaloniki, Greece",
    description: "Attended the International Federation of Classification Societies conference in Greece, presenting research findings about NLP at Bukalapak.",
    imageSrc: "/images/highlights/events_ifcs_greece.png"
    },
    {
    id: 5,
    title: "IFG Corporate Training Session",
    date: "2024, IFG Tower, Jakarta, Indonesia",
    description: "Conducted corporate training sessions at IFG, sharing expertise and enhancing team skills in data analytics.",
    imageSrc: "/images/highlights/events_ifg_corporate_training.jpeg"
    },
  {
    id: 6,
    title: "Webinar at UNTAN",
    date: "2023 - Universitas Tanjungpura, Pontianak, Indonesia",
    description: "Delivered a webinar about 'The Role of Actuary Science and Data Science in Industry 4.0 Era'.",
    imageSrc: "/images/highlights/events_untan.jpg"
  },
  {
    id: 7,
    title: "LKPP Corporate Training Session",
    date: "2023 - LKPP Office, Jakarta, Indonesia",
    description: "Presented at a workshop organized by Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP), delivered an offline workshop about introduction to data analysis with SQL.",
    imageSrc: "/images/highlights/events_lkpp.jpg"
  },
  {
    id: 8,
    title: "RASIO Webinar and Talkshow",
    date: "2022 - Universitas Padjadjaran, Sumedang, Indonesia",
    description: "Delivered a closing seminar and talkshow about 'Harnessing the Power of Big Data and Artificial Intelligence: How Generation Z Can Contribute to Achieving SDGs'",
    imageSrc: "/images/highlights/events_rasio.jpg"
  }
];

const CareerHighlights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderImage = (event: HighlightEvent, index: number) => (
    <div className={`w-full h-64 sm:h-80 relative ${index === currentIndex ? 'sm:w-1/2' : 'hidden sm:block sm:w-1/4'} ${index !== currentIndex ? 'opacity-50 blur-sm' : ''}`}>
      <Image
        src={event.imageSrc}
        alt={event.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        priority={index === currentIndex}
      />
    </div>
  );

  return (
    <section className="bg-black text-white py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <h4 className="text-sm sm:text-lg font-medium mb-2 sm:mb-4 text-center text-gray-400 font-lato">Explore more by your keyboard press</h4>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-blue-500 font-lato">Event Documentation</h2>
        {/* Image Carousel */}
        <div 
          className="relative mb-6 sm:mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-white opacity-75 hover:opacity-100 transition-opacity duration-300">&lt;</button>
          
          <div className="flex justify-center items-center">
            {renderImage(events[(currentIndex - 1 + events.length) % events.length], (currentIndex - 1 + events.length) % events.length)}
            {renderImage(events[currentIndex], currentIndex)}
            {renderImage(events[(currentIndex + 1) % events.length], (currentIndex + 1) % events.length)}
          </div>

          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-3xl text-white opacity-75 hover:opacity-100 transition-opacity duration-300">&gt;</button>
        </div>

        {/* Static Text Description */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold">{events[currentIndex].title}</h3>
          <p className="text-xs sm:text-sm mt-2">{events[currentIndex].date}</p>
          <p className="text-sm sm:text-base mt-4">{events[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;
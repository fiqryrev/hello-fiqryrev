import React, { useState, useEffect, memo } from 'react';

interface EventOption {
  title: string;
  description: string;
  date: string;
  image: string;
  icon: React.ReactNode;
}

interface EventSelectorProps {
  events: EventOption[];
}


const EventSelector: React.FC<EventSelectorProps> = memo(({ events }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    if (!isMobile) {
      events.forEach((_, i) => {
        const timer = setTimeout(() => {
          setAnimatedOptions(prev => [...prev, i]);
        }, 180 * i);
        timers.push(timer);
      });
    } else {
      setAnimatedOptions(events.map((_, i) => i));
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [events, isMobile]);

  // Auto-rotate through events
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % events.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  // Mobile Slider Component
  const MobileSlider = () => (
    <div className="md:hidden w-full px-4">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <div key={index} className="min-w-full">
              <div
                className="relative h-[400px] rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url('${event.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start gap-3">
                    <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
                      <p className="text-purple-400 text-sm mb-2">{event.date}</p>
                      <p className="text-white/60 text-sm line-clamp-2">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex justify-between items-center mt-4 px-2">
        <button
          onClick={() => setActiveIndex(prev => (prev - 1 + events.length) % events.length)}
          className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-6 bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveIndex(prev => (prev + 1) % events.length)}
          className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[600px] md:min-h-[600px] py-8 md:py-16 overflow-hidden bg-black">
      {/* Header Section */}
      <div className="w-full max-w-4xl px-6 mb-8 text-center relative z-10">
        <h4 className="text-sm sm:text-lg font-medium mb-2 sm:mb-4 text-gray-400 font-lato">
          {isMobile ? 'Swipe to explore events' : 'Explore more by clicking the cards'}
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight animate-fadeInTop delay-300">
          Event Documentation
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-medium max-w-3xl mx-auto animate-fadeInTop delay-600">
          A journey through speaking engagements, workshops, and professional milestones
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="relative z-10">
        <MobileSlider />
      </div>

      {/* Desktop Options Container */}
      <div className="hidden md:flex options w-full max-w-7xl h-[500px] mx-auto px-4 items-stretch overflow-visible relative z-10">
        {events.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: activeIndex === index ? '35%' : '70px',
              margin: '0 2px',
              borderRadius: '12px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? 'rgba(147, 51, 234, 0.5)' : 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              backgroundColor: '#000',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(147, 51, 234, 0.3)'
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '0 0 35%' : '0 0 auto',
              width: activeIndex === index ? '35%' : '70px',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                background: activeIndex === index
                  ? 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)'
                  : 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)'
              }}
            ></div>

            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-start justify-start min-h-[80px] z-2 pointer-events-none px-6 gap-4 w-full">
              <div className="icon min-w-[45px] max-w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-normal relative flex-1">
                <div
                  className="main font-bold text-lg transition-all duration-700 ease-in-out line-clamp-2"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="text-sm text-purple-400 mt-1 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transitionDelay: '100ms'
                  }}
                >
                  {option.date}
                </div>
                <div
                  className="sub text-sm text-white/60 mt-1 transition-all duration-700 ease-in-out line-clamp-2"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transitionDelay: '200ms'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Indicator dots */}
      <div className="hidden md:flex gap-2 mt-8 relative z-10">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400'
                : 'w-2 bg-white/20 hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse-star {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .bg-gradient-conic {
          background: conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.1), transparent);
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
});

EventSelector.displayName = 'EventSelector';

export default EventSelector;
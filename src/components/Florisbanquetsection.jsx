// src/components/Florisbanquetsection.jsx
import React, { useState, useEffect, useRef } from 'react';

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Florisbanquetsection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const amenities = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Aesthetic Lighting',
      description: 'Immersive ambiance with fire-inspired lighting that transforms every celebration into a cinematic experience',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h8a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'Signature Cuisine',
      description: 'Featuring our exclusive Spl. Lazeez Paneer and diverse menu crafted for unforgettable celebrations',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: 'Event Perfection',
      description: 'Birthday parties, corporate events, and celebrations executed with meticulous attention to detail',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      title: 'Ample Parking',
      description: 'Convenient, spacious parking facilities ensuring hassle-free arrival for you and your guests',
    },
  ];

  const eventTypes = [
    {
      title: 'Birthday Parties',
      capacity: '50-150 Guests',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
    },
    {
      title: 'Corporate Events',
      capacity: '30-100 Guests',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-300/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full mb-6">
            <p className="text-orange-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Floris Restaurant & Banquet
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
            <span className="block text-white mb-2">Where Celebrations</span>
            <span className="block bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">
              Become Memories
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Patan's most stylish banquet venue, designed for moments that matter.
            Modern luxury meets warm hospitality in every detail.
          </p>

          {/* CTA Buttons (Issue #3 — now functional) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-300
                         text-black font-bold text-sm sm:text-base rounded-full
                         hover:scale-105 transition-all duration-500
                         shadow-lg shadow-orange-600/50 cursor-pointer border-0"
            >
              Book Your Event
            </button>
            <button
              onClick={() => scrollTo('menu')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-orange-600/50
                         text-white font-bold text-sm sm:text-base rounded-full
                         hover:border-orange-600 hover:bg-orange-600/10
                         transition-all duration-500 cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-2 mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-zinc-300 text-sm sm:text-base">
            Mashruwala Complex, Patan-Chanasma Highway
          </p>
        </div>

        {/* Premium Amenities */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div
            className={`text-center mb-10 sm:mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-orange-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">Premium Amenities</p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Crafted for Excellence</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 bg-zinc-900/50 rounded-2xl border border-white/5
                           backdrop-blur-sm hover:border-orange-600/30 transition-all duration-500
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0
                              group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl
                              transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-600 to-orange-300
                                 rounded-2xl flex items-center justify-center mb-4 sm:mb-6
                                 shadow-lg shadow-orange-600/50 text-black">
                    {amenity.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{amenity.title}</h4>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Versatile Spaces */}
        <div>
          <div
            className={`text-center mb-10 sm:mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <p className="text-orange-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">Versatile Spaces</p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Every Occasion, Elevated</h3>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our banquet adapts to your vision
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`group relative p-8 sm:p-10 bg-zinc-900/50 rounded-2xl border border-white/5
                           backdrop-blur-sm hover:border-orange-600/30 transition-all duration-500
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0
                              group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl
                              transition-all duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-600 to-orange-300
                                 rounded-2xl flex items-center justify-center mx-auto mb-6
                                 shadow-lg shadow-orange-600/50 text-black">
                    {event.icon}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">{event.title}</h4>
                  <p className="text-orange-300 text-base sm:text-lg font-semibold mb-6">{event.capacity}</p>

                  {/* Explore Options — now functional (Issue #3) */}
                  <button
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center gap-2 text-orange-300 font-semibold
                               hover:gap-3 transition-all duration-300 bg-transparent border-0 cursor-pointer"
                  >
                    <span>Explore Options</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Florisbanquetsection;

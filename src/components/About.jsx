// src/components/About.jsx
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Our Specialties',
      items: [
        'Special mojitos crafted to perfection',
        'Signature dishes like Spl. Lazeez Paneer',
        'Varied menu with diverse cuisines'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Modern Ambiance',
      items: [
        'Aesthetic lighting for perfect atmosphere',
        'Contemporary design and decor',
        'Stylish and comfortable seating'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: 'Banquet Facilities',
      items: [
        'Perfect for birthday parties and celebrations',
        'Ideal venue for social gatherings and events',
        'Ample parking space available'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div 
          className={`grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center p-4 sm:p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm lg:text-base">Menu Items</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-2">
              5
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm lg:text-base">Rated</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm lg:text-base">Open</p>
          </div>
        </div>

        {/* Main Content */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">
              About Floris
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Floris Restaurant & Banquet in Patan is a new, stylish venue that brings modern luxury dining to 
            the heart of the city. With aesthetic lighting and a contemporary ambiance, we create the 
            perfect atmosphere for celebrations, social gatherings, and memorable dining experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 bg-zinc-900/50 rounded-2xl border border-white/5 
                         backdrop-blur-sm hover:border-orange-600/30 transition-all duration-500
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 
                            group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl 
                            transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-600 to-orange-300 
                               rounded-2xl flex items-center justify-center mb-4 sm:mb-6 
                               shadow-lg shadow-orange-600/50 text-black">
                  {feature.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  {feature.title}
                </h3>

                <ul className="space-y-3 sm:space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Us Section */}
        <div 
          className={`mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-10 bg-zinc-900/50 rounded-2xl border border-white/5 
                     backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-600 to-orange-300 
                             rounded-2xl flex items-center justify-center flex-shrink-0 
                             shadow-lg shadow-orange-600/50">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Visit Us</h4>
                <p className="text-zinc-400 text-sm sm:text-base">1st Floor, Mashruwala Complex</p>
                <p className="text-zinc-400 text-sm sm:text-base">Opposite New Circuit House</p>
                <p className="text-zinc-400 text-sm sm:text-base">Patan-Chanasma Highway, Patan</p>
              </div>
            </div>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-300 
                             text-black font-bold text-sm sm:text-base rounded-full
                             hover:scale-105 transition-all duration-500
                             shadow-lg shadow-orange-600/50 whitespace-nowrap">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
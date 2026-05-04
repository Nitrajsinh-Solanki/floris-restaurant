// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center pt-16 sm:pt-20 lg:pt-24">
        {/* Premium Badge */}
        <div 
          className={`absolute top-24 sm:top-28 lg:top-32 left-4 sm:left-6 lg:left-8 z-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-300 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-black/80 backdrop-blur-sm border border-orange-600/30 rounded-full">
              <p className="text-orange-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                Premium Dining Experience
              </p>
            </div>
          </div>
        </div>

        {/* Fire Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-orange-600/5 via-transparent to-transparent" />
        </div>

        {/* Animated Fire Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-600 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left py-8 sm:py-12">
              {/* Main Headline */}
              <div 
                className={`space-y-3 sm:space-y-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    Where Every
                  </span>
                  <span className="block bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 bg-clip-text text-transparent 
                                 drop-shadow-[0_0_40px_rgba(255,106,0,0.5)] py-2">
                    Meal Ignites
                  </span>
                  <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    Memories
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div 
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Experience the finest dining at Floris Restaurant & Banquet in Patan. 
                  <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent font-semibold">
                    Aesthetic ambiance, signature mojitos, and exquisite cuisine await you.
                  </span>
                </p>
              </div>

              {/* Location */}
              <div 
                className={`flex items-center justify-center lg:justify-start gap-2 sm:gap-3 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-zinc-300 text-sm sm:text-base">
                  Mashruwala Complex, Patan-Chanasma Highway, Patan
                </p>
              </div>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <button className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-300 
                                 text-black font-bold text-base sm:text-lg rounded-full
                                 hover:scale-105 transition-all duration-500
                                 shadow-[0_0_40px_rgba(255,106,0,0.5)]
                                 hover:shadow-[0_0_60px_rgba(255,106,0,0.8)]
                                 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    RESERVE YOUR TABLE
                  </span>
                </button>

                <button className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent
                                 text-white font-bold text-base sm:text-lg rounded-full
                                 border-2 border-orange-600/50
                                 hover:border-orange-600 hover:bg-orange-600/10
                                 transition-all duration-500
                                 shadow-[0_0_20px_rgba(255,106,0,0.2)]
                                 hover:shadow-[0_0_40px_rgba(255,106,0,0.4)]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    VIEW MENU
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div 
                className={`grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0 pt-4 sm:pt-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">
                    100+
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">Menu Items</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent flex items-center justify-center lg:justify-start gap-1">
                    5
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">Rated</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">Open</p>
                </div>
              </div>
            </div>

            {/* Right Content - Special Card */}
            <div 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="relative max-w-md mx-auto lg:max-w-lg lg:ml-auto">
                <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-6 sm:p-8 
                               shadow-[0_0_60px_rgba(255,106,0,0.3)] backdrop-blur-xl overflow-hidden">
                  
                  <div className="relative z-10">
                    {/* Card Header */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-600 to-orange-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-600/50">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white text-base sm:text-lg font-bold">Today's Special</h3>
                        <p className="text-zinc-400 text-xs sm:text-sm">Chef's Recommendation</p>
                      </div>
                    </div>

                    {/* Special Dish */}
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Spl. Lazeez Paneer</h4>
                          <p className="text-zinc-400 text-xs sm:text-sm">Rich, creamy paneer with exotic spices</p>
                        </div>
                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent flex-shrink-0">₹220</div>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                          <span className="text-white font-semibold text-sm sm:text-base">Signature Mojitos</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {['Classic', 'Berry', 'Mint'].map((flavor) => (
                            <span key={flavor} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-orange-600/30 rounded-full text-xs text-orange-300">
                              {flavor}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-300 text-black font-bold text-sm sm:text-base rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-xl shadow-orange-600/30">
                        ORDER NOW
                      </button>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-600 to-orange-300 rounded-full blur-3xl opacity-40 animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-orange-300 to-orange-600 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1800ms' }}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3 animate-bounce">
            <span className="text-zinc-400 text-xs sm:text-sm tracking-wider uppercase">Scroll Down</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-orange-600/50 flex items-start justify-center p-1.5 sm:p-2">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-gradient-to-b from-orange-600 to-transparent rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
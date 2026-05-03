import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95" />
        </div>

        {/* Fire Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left Glow */}
          <div 
            className={`absolute -top-20 -left-20 md:-top-40 md:-left-40 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl transition-all duration-[2000ms] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ 
              background: 'radial-gradient(circle, rgba(255,106,0,0.3), rgba(255,106,0,0.1), transparent)',
              transitionDelay: '0ms'
            }}
          />
          
          {/* Bottom Right Glow */}
          <div 
            className={`absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full blur-3xl transition-all duration-[2000ms] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ 
              background: 'radial-gradient(circle, rgba(255,179,71,0.25), rgba(255,140,0,0.1), transparent)',
              transitionDelay: '200ms'
            }}
          />
          
          {/* Center Glow */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl transition-all duration-[2500ms] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ 
              background: 'radial-gradient(circle, rgba(255,106,0,0.15), transparent)',
              transitionDelay: '400ms'
            }}
          />

          {/* Floating Embers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-600 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4,
                boxShadow: '0 0 10px rgba(255,106,0,0.8)'
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              
              {/* Premium Tag */}
              <div 
                className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-orange-600/30 rounded-full transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse shadow-lg shadow-orange-600" />
                <span className="text-orange-300 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Premium Dining Experience
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-tight transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    transitionDelay: '800ms'
                  }}
                >
                  <span className="block text-white">Where Every</span>
                  <span className="block bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 bg-clip-text text-transparent relative inline-block">
                    Meal Ignites
                    <span className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-orange-600 to-orange-300 blur-sm opacity-60" />
                  </span>
                  <span className="block text-white mt-1 sm:mt-2">Memories</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p 
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-2xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  transitionDelay: '1000ms'
                }}
              >
                Experience the finest dining at Floris Restaurant & Banquet in Patan.{' '}
                <span className="text-orange-300">Aesthetic ambiance</span>,{' '}
                <span className="text-orange-300">signature mojitos</span>, and{' '}
                <span className="text-orange-300">exquisite cuisine</span> await you.
              </p>

              {/* Location */}
              <div 
                className={`inline-flex items-center gap-2 sm:gap-3 text-zinc-400 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Mashruwala Complex, Patan-Chanasma Highway, Patan</span>
              </div>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '1400ms' }}
              >
                <button className="group relative px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-gradient-to-r from-orange-600 to-orange-300 text-black font-bold text-sm sm:text-base lg:text-lg rounded-full hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl shadow-orange-600/50 hover:shadow-orange-600/80 overflow-hidden">
                  <span className="relative z-10 tracking-wide flex items-center justify-center gap-2 sm:gap-3">
                    RESERVE YOUR TABLE
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                <button className="px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-transparent border-2 border-orange-600 text-orange-300 font-bold text-sm sm:text-base lg:text-lg rounded-full hover:bg-orange-600 hover:text-black transition-all duration-500 hover:shadow-xl hover:shadow-orange-600/40">
                  <span className="tracking-wide">VIEW MENU</span>
                </button>
              </div>

              {/* Features */}
              <div 
                className={`grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '1600ms' }}
              >
                <div className="text-center space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">100+</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Menu Items</div>
                </div>
                <div className="text-center space-y-1 sm:space-y-2 border-x border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">5★</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Rated</div>
                </div>
                <div className="text-center space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Open</div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div 
              className={`relative transition-all duration-[1500ms] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-600/20 to-orange-300/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-white/10 shadow-2xl hover:shadow-orange-600/30 transition-all duration-700 backdrop-blur-sm">
                  <div className="space-y-4 sm:space-y-6">
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-300 flex items-center justify-center shadow-lg shadow-orange-600/50 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg sm:text-xl">Today's Special</h3>
                        <p className="text-zinc-400 text-xs sm:text-sm">Chef's Recommendation</p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="flex justify-between items-start gap-3">
                        <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                          <h4 className="text-xl sm:text-2xl font-bold text-white">Spl. Lazeez Paneer</h4>
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
                </div>

                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-600 to-orange-300 rounded-full blur-3xl opacity-40 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-orange-300 to-orange-600 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
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
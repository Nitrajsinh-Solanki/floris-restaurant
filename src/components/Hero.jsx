import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark restaurant ambiance image - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-black" />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-[#0A0A0A]/95" />
        
        {/* Noise Texture for Film Grain Effect */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat',
               backgroundSize: '200px 200px'
             }}
        />
      </div>

      {/* Animated Fire Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Primary Fire Glow - Top Left */}
        <div className={`absolute -top-40 -left-40 w-96 h-96 
                      bg-gradient-radial from-[#FF6A00]/30 via-[#FF6A00]/10 to-transparent 
                      rounded-full blur-3xl
                      transition-all duration-[2000ms] ease-out ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                      }`}
             style={{ animationDelay: '0ms' }} />
        
        {/* Secondary Fire Glow - Bottom Right */}
        <div className={`absolute -bottom-40 -right-40 w-[500px] h-[500px]
                      bg-gradient-radial from-[#FFB347]/25 via-[#FF8C00]/10 to-transparent 
                      rounded-full blur-3xl
                      transition-all duration-[2000ms] ease-out ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                      }`}
             style={{ animationDelay: '200ms' }} />
        
        {/* Center Fire Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[600px]
                      bg-gradient-radial from-[#FF6A00]/15 via-transparent to-transparent 
                      rounded-full blur-3xl
                      transition-all duration-[2500ms] ease-out ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
             style={{ animationDelay: '400ms' }} />

        {/* Floating Embers Animation */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FF6A00] rounded-full animate-float-ember"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
              boxShadow: '0 0 10px #FF6A00'
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Text */}
          <div className="space-y-8 lg:space-y-10">
            
            {/* Pre-title Tag */}
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 
                          bg-white/5 backdrop-blur-sm border border-[#FF6A00]/30 
                          rounded-full
                          transition-all duration-1000 ease-out ${
                            isVisible 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-8'
                          }`}
                 style={{ animationDelay: '600ms' }}>
              <span className="w-2 h-2 bg-[#FF6A00] rounded-full animate-pulse 
                             shadow-[0_0_10px_#FF6A00]" />
              <span className="text-[#FFB347] text-sm font-medium tracking-wider uppercase">
                Premium Dining Experience
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]
                            transition-all duration-1000 ease-out ${
                              isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-12'
                            }`}
                  style={{ 
                    animationDelay: '800ms',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                <span className="block text-white">
                  Where Every
                </span>
                <span className="block bg-gradient-to-r from-[#FF6A00] via-[#FFB347] to-[#FF8C00] 
                               bg-clip-text text-transparent
                               drop-shadow-[0_0_40px_rgba(255,106,0,0.4)]
                               relative">
                  Meal Ignites
                  
                  {/* Fire underline effect */}
                  <span className="absolute -bottom-3 left-0 right-0 h-1.5 
                                 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                                 blur-sm opacity-60" />
                </span>
                <span className="block text-white mt-2">
                  Memories
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl lg:text-2xl text-[#A1A1AA] leading-relaxed
                         max-w-2xl
                         transition-all duration-1000 ease-out ${
                           isVisible 
                             ? 'opacity-100 translate-y-0' 
                             : 'opacity-0 translate-y-12'
                         }`}
               style={{ 
                 animationDelay: '1000ms',
                 fontFamily: "'Montserrat', sans-serif"
               }}>
              Experience the finest dining at Floris Restaurant & Banquet in Patan. 
              <span className="text-[#FFB347]"> Aesthetic ambiance</span>, 
              <span className="text-[#FFB347]"> signature mojitos</span>, and 
              <span className="text-[#FFB347]"> exquisite cuisine</span> await you.
            </p>

            {/* Location Badge */}
            <div className={`inline-flex items-center gap-3 text-[#A1A1AA]
                          transition-all duration-1000 ease-out ${
                            isVisible 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-12'
                          }`}
                 style={{ animationDelay: '1200ms' }}>
              <svg className="w-5 h-5 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm lg:text-base">
                Mashruwala Complex, Patan-Chanasma Highway, Patan
              </span>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4
                          transition-all duration-1000 ease-out ${
                            isVisible 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-12'
                          }`}
                 style={{ animationDelay: '1400ms' }}>
              
              {/* Primary CTA */}
              <button className="group relative px-10 py-5 
                               bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                               text-black font-bold text-lg rounded-full
                               hover:scale-105 active:scale-95
                               transition-all duration-500
                               shadow-[0_0_40px_rgba(255,106,0,0.5)]
                               hover:shadow-[0_0_60px_rgba(255,106,0,0.8)]
                               overflow-hidden">
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent 
                               via-white/40 to-transparent
                               -translate-x-full group-hover:translate-x-full 
                               transition-transform duration-1000" />
                
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full
                               bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                               animate-ping opacity-20" />
                
                <span className="relative z-10 tracking-wide flex items-center justify-center gap-3">
                  RESERVE YOUR TABLE
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              {/* Secondary CTA */}
              <button className="group px-10 py-5
                               bg-transparent border-2 border-[#FF6A00]
                               text-[#FFB347] font-bold text-lg rounded-full
                               hover:bg-[#FF6A00] hover:text-black
                               transition-all duration-500
                               hover:shadow-[0_0_40px_rgba(255,106,0,0.4)]">
                <span className="tracking-wide">VIEW MENU</span>
              </button>
            </div>

            {/* Features */}
            <div className={`grid grid-cols-3 gap-6 pt-8 border-t border-white/10
                          transition-all duration-1000 ease-out ${
                            isVisible 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-12'
                          }`}
                 style={{ animationDelay: '1600ms' }}>
              
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
                              bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-sm text-[#A1A1AA]">Menu Items</div>
              </div>

              <div className="text-center space-y-2 border-x border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
                              bg-clip-text text-transparent">
                  5★
                </div>
                <div className="text-sm text-[#A1A1AA]">Rated</div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
                              bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-[#A1A1AA]">Open</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Card */}
          <div className={`relative lg:block hidden
                        transition-all duration-[1500ms] ease-out ${
                          isVisible 
                            ? 'opacity-100 translate-x-0 rotate-0' 
                            : 'opacity-0 translate-x-12 rotate-3'
                        }`}
               style={{ animationDelay: '1000ms' }}>
            
            {/* Main Card */}
            <div className="relative group">
              
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6A00]/20 to-[#FFB347]/20 
                            rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 
                            transition-opacity duration-700" />
              
              {/* Card */}
              <div className="relative bg-[#1A1A1A] rounded-3xl p-8 
                            border border-white/10
                            shadow-[0_20px_80px_rgba(0,0,0,0.8)]
                            hover:shadow-[0_20px_80px_rgba(255,106,0,0.3)]
                            transition-all duration-700
                            backdrop-blur-sm">
                
                {/* Specialty Item Showcase */}
                <div className="space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                                  flex items-center justify-center
                                  shadow-[0_0_20px_rgba(255,106,0,0.5)]">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">Today's Special</h3>
                      <p className="text-[#A1A1AA] text-sm">Chef's Recommendation</p>
                    </div>
                  </div>

                  {/* Menu Item */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-white">
                          Spl. Lazeez Paneer
                        </h4>
                        <p className="text-[#A1A1AA] text-sm">
                          Rich, creamy paneer with exotic spices
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
                                      bg-clip-text text-transparent">
                          ₹220
                        </div>
                      </div>
                    </div>

                    {/* Specialty Mojitos */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5 text-[#FF6A00]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="text-white font-semibold">Signature Mojitos</span>
                      </div>
                      <div className="flex gap-2">
                        {['Classic', 'Berry', 'Mint'].map((flavor) => (
                          <span key={flavor} 
                                className="px-3 py-1.5 bg-white/5 border border-[#FF6A00]/30 
                                         rounded-full text-xs text-[#FFB347]">
                            {flavor}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Order Button */}
                    <button className="w-full mt-6 px-6 py-4 
                                     bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                                     text-black font-bold rounded-xl
                                     hover:scale-[1.02] active:scale-[0.98]
                                     transition-transform duration-300
                                     shadow-[0_10px_30px_rgba(255,106,0,0.3)]">
                      ORDER NOW
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 
                            bg-gradient-to-br from-[#FF6A00] to-[#FFB347]
                            rounded-full blur-3xl opacity-40 animate-pulse" />
              
              <div className="absolute -bottom-8 -left-8 w-32 h-32 
                            bg-gradient-to-tr from-[#FFB347] to-[#FF6A00]
                            rounded-full blur-3xl opacity-30 animate-pulse"
                   style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10
                    transition-all duration-1000 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
           style={{ animationDelay: '1800ms' }}>
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="text-[#A1A1AA] text-sm tracking-wider uppercase">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#FF6A00]/50 
                        flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-[#FF6A00] to-transparent rounded-full 
                          animate-scroll" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&display=swap');
        
        @keyframes float-ember {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-100vh) translateX(20px) scale(1.2);
            opacity: 0.8;
          }
          90% {
            opacity: 0.4;
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        
        .animate-float-ember {
          animation: float-ember linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const TICKER_ITEMS = [
  'Spl. Lazeez Paneer', 'Dragon Paneer Dry', 'Floris Sizzler', 'Handi Dum Biryani',
  'Mint Mojito', 'Paneer Tikka', 'Floris Lassi', 'Cheese Garlic Naan',
  'Sp. Paneer Chingari', 'Fix Punjabi Thali', 'Veg. Spring Roll', 'Unlimited Lunch',
  'Paneer Hariyali Tikka', 'Schezwan Noodles', 'Gulab Jamun', 'Baked Pasta',
];

const STATS = [
  { num: '100+', label: 'Signature Dishes' },
  { num: '22', label: 'Categories' },
  { num: '5★', label: 'Rated' },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(5deg); }
          66% { transform: translate(-15px, 15px) rotate(-5deg); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, -25px) scale(1.1); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,106,0,0.3), 0 0 40px rgba(255,106,0,0.2); }
          50% { box-shadow: 0 0 40px rgba(255,106,0,0.5), 0 0 80px rgba(255,106,0,0.3); }
        }
        @keyframes textShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>

      <section 
        ref={heroRef}
        className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col"
      >
        {/* ═══ ANIMATED MESH BACKGROUND ═══ */}
        <div className="absolute inset-0 w-full h-[100dvh]">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90"
            alt="Floris Restaurant ambiance"
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center 40%',
              filter: 'brightness(0.4) saturate(1.2)',
            }}
          />
          
          {/* Dynamic gradient overlay with mouse tracking */}
          <div 
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                rgba(255,106,0,0.25) 0%, 
                rgba(0,0,0,0.8) 50%, 
                rgba(0,0,0,0.95) 100%)`,
            }}
          />
          
          {/* Animated gradient mesh */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #FF6A00, #000000, #FFB347, #000000)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 15s ease infinite',
              mixBlendMode: 'overlay',
              opacity: 0.4,
            }}
          />
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* ═══ FLOATING PARTICLES SYSTEM ═══ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => {
            const size = 2 + (i % 5);
            const duration = 8 + (i % 10);
            const delay = (i * 0.3) % 5;
            const animationType = ['floatSlow', 'floatMedium', 'floatFast'][i % 3];
            
            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${(i * 7) % 95}%`,
                  top: `${(i * 11) % 90}%`,
                  background: i % 3 === 0 
                    ? 'radial-gradient(circle, #FF6A00, transparent)' 
                    : 'radial-gradient(circle, #FFB347, transparent)',
                  opacity: 0.2 + (i % 3) * 0.15,
                  animation: `${animationType} ${duration}s ease-in-out ${delay}s infinite`,
                  filter: 'blur(1px)',
                }}
              />
            );
          })}
        </div>

        {/* ═══ LARGE AMBIENT ORBS ═══ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)',
              top: '-200px',
              left: '-150px',
              animation: 'pulse 8s ease-in-out infinite',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFB347 0%, transparent 70%)',
              bottom: '5%',
              right: '-100px',
              animation: 'pulse 10s ease-in-out 3s infinite',
              filter: 'blur(100px)',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FF8C00 0%, transparent 70%)',
              top: '40%',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'pulse 12s ease-in-out 1.5s infinite',
              filter: 'blur(90px)',
            }}
          />
        </div>

        {/* ═══ MAIN CONTENT ═══ */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6">

          {/* ──── Eyebrow Badge ──── */}
          <div
            className="mb-8 sm:mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-orange-600/40 bg-black/50 backdrop-blur-md relative overflow-hidden group">
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
                style={{ animation: 'shimmer 3s infinite' }}
              />
              
              <span
                className="w-2 h-2 rounded-full bg-orange-500 relative"
                style={{ 
                  animation: 'pulse 2s ease-in-out infinite',
                  boxShadow: '0 0 10px #FF6A00, 0 0 20px #FF6A00',
                }}
              />
              <span className="relative text-orange-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                Premium Dining Experience
              </span>
            </div>
          </div>

          {/* ──── HEADLINE WITH TEXT EFFECTS ──── */}
          <h1
            className="font-bold leading-tight mb-8 sm:mb-10 relative"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {/* Line 1 */}
            <div
              className="relative inline-block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(-20deg)',
                transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.2s',
              }}
            >
              <span 
                className="block text-white"
                style={{ 
                  textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 0 20px rgba(255,106,0,0.3)',
                  letterSpacing: '0.02em',
                }}
              >
                Where Every
              </span>
            </div>

            {/* Line 2 - Animated Gradient */}
            <div
              className="relative inline-block my-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.4s',
              }}
            >
              <span
                className="block relative"
                style={{
                  background: 'linear-gradient(90deg, #FF6A00 0%, #FFD700 25%, #FFB347 50%, #FF6A00 75%, #FFD700 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'textShine 4s linear infinite',
                  filter: 'drop-shadow(0 0 40px rgba(255,106,0,0.6))',
                  fontWeight: 900,
                }}
              >
                Meal Ignites
              </span>
            </div>

            {/* Line 3 */}
            <div
              className="relative inline-block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(-20deg)',
                transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.6s',
              }}
            >
              <span 
                className="block text-white"
                style={{ 
                  textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 0 20px rgba(255,106,0,0.3)',
                  letterSpacing: '0.02em',
                }}
              >
                Memories
              </span>
            </div>
          </h1>

          {/* ──── SUBTITLE ──── */}
          <p
            className="max-w-2xl mx-auto text-zinc-300 leading-relaxed mb-10 sm:mb-12 px-4"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease',
              transitionDelay: '0.8s',
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
            }}
          >
            Patan's most celebrated restaurant & banquet — aesthetic lighting,
            signature mojitos, and an exquisite{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF6A00, #FFD700, #FFB347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                filter: 'drop-shadow(0 0 10px rgba(255,106,0,0.5))',
              }}
            >
              100% vegetarian
            </span>{' '}
            menu crafted for every occasion.
          </p>

          {/* ═══ CTA BUTTONS WITH MAGNETIC EFFECT ═══ */}
          <div
            className="flex flex-col sm:flex-row gap-5 sm:gap-6 mb-12 sm:mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease',
              transitionDelay: '1s',
            }}
          >
            {/* Primary CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="group relative px-10 py-5 rounded-full font-bold text-base sm:text-lg text-black overflow-hidden
                         hover:scale-110 active:scale-95 transition-all duration-500 cursor-pointer border-0"
              style={{ 
                background: 'linear-gradient(135deg, #FF6A00 0%, #FFB347 50%, #FF8C00 100%)',
                animation: 'glowPulse 3s ease-in-out infinite',
              }}
            >
              {/* Ripple effect container */}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span 
                  className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  style={{ animation: 'ripple 0.8s ease-out' }}
                />
              </span>
              
              {/* Shimmer */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                           -translate-x-full group-hover:translate-x-full transition-transform duration-1000" 
              />
              
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                <span>🔥</span> Book a Table
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollTo('menu')}
              className="group relative px-10 py-5 rounded-full font-bold text-base sm:text-lg text-white
                         overflow-hidden hover:scale-105 active:scale-95
                         transition-all duration-500 cursor-pointer bg-transparent"
              style={{
                border: '2px solid rgba(255,106,0,0.5)',
              }}
            >
              {/* Gradient fill on hover */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Border glow */}
              <span 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: '0 0 20px rgba(255,106,0,0.5), inset 0 0 20px rgba(255,106,0,0.2)' }}
              />
              
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Explore Menu <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>

          {/* ═══ STATS WITH GLASSMORPHISM ═══ */}
          <div
            className="flex items-center gap-8 sm:gap-16 mb-12 sm:mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s ease',
              transitionDelay: '1.2s',
            }}
          >
            {STATS.map((s, i) => (
              <div 
                key={i} 
                className="relative group"
                style={{
                  animation: `float ${3 + i}s ease-in-out ${i * 0.5}s infinite`,
                }}
              >
                <div className="relative px-6 py-4 rounded-2xl border border-orange-600/30 bg-black/40 backdrop-blur-md
                                group-hover:border-orange-500/60 group-hover:bg-black/60 transition-all duration-500">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: '0 0 30px rgba(255,106,0,0.3)' }}
                  />
                  
                  <p
                    className="text-3xl sm:text-4xl font-black mb-1 relative"
                    style={{
                      background: 'linear-gradient(135deg, #FF6A00, #FFD700, #FFB347)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'textShine 3s linear infinite',
                    }}
                  >
                    {s.num}
                  </p>
                  <p className="text-zinc-400 text-xs sm:text-sm tracking-widest uppercase font-semibold">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ ANIMATED TICKER ═══ */}
        <div className="relative z-10 border-t border-orange-600/20 py-4 overflow-hidden backdrop-blur-md"
             style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(255,106,0,0.1), rgba(0,0,0,0.4))' }}>
          <div
            className="flex gap-16 whitespace-nowrap"
            style={{ animation: 'tickerScroll 40s linear infinite' }}
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span 
                key={i} 
                className="text-zinc-400 text-sm sm:text-base flex-shrink-0 flex items-center gap-3 font-medium
                           hover:text-orange-400 transition-colors duration-300"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ 
                    background: '#FF6A00', 
                    boxShadow: '0 0 8px #FF6A00',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ SCROLL INDICATOR ═══ */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          style={{
            opacity: isVisible ? 0.7 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1.5s ease',
            transitionDelay: '1.5s',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          <span className="text-zinc-500 text-[11px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
          <div className="relative w-6 h-10 rounded-full border-2 border-orange-600/40 flex items-start justify-center pt-2">
            <div 
              className="w-1 h-2 rounded-full bg-orange-500"
              style={{ 
                animation: 'float 2s ease-in-out infinite',
                boxShadow: '0 0 10px #FF6A00',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
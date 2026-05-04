// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// ─── Today's Special — data-driven (Issue #7) ────────────────────────────────
// Each item in the array represents a daily rotation.
// The current day-of-week index (0 = Sun … 6 = Sat) picks the entry,
// so "today's special" changes naturally without any manual edit.
const DAILY_SPECIALS = [
  { name: 'Spl. Lazeez Paneer',     tag: 'Chef\'s Signature', price: '₹220', emoji: '🧀' },
  { name: 'Dragon Paneer Dry',       tag: 'Crowd Favourite',   price: '₹230', emoji: '🔥' },
  { name: 'Floris Sizzler',          tag: 'House Special',     price: '₹399', emoji: '✨' },
  { name: 'Handi Dum Biryani',       tag: 'Weekend Special',   price: '₹199', emoji: '🍚' },
  { name: 'Sp. Veg. Floris',         tag: 'Chef\'s Pick',      price: '₹220', emoji: '🌿' },
  { name: 'Paneer Hariyali Tikka',   tag: 'Must Try',          price: '₹220', emoji: '🌱' },
  { name: 'Cheese Garlic Naan',      tag: 'Bestseller',        price: '₹110', emoji: '🫓' },
];

const TICKER_ITEMS = [
  'Spl. Lazeez Paneer', 'Dragon Paneer Dry', 'Floris Sizzler', 'Handi Dum Biryani',
  'Mint Mojito', 'Paneer Tikka', 'Floris Lassi', 'Cheese Garlic Naan',
  'Sp. Paneer Chingari', 'Fix Punjabi Thali', 'Veg. Spring Roll', 'Unlimited Lunch',
  'Paneer Hariyali Tikka', 'Schezwan Noodles', 'Gulab Jamun', 'Baked Pasta',
];

const STATS = [
  { num: '100+', label: 'Dishes'     },
  { num: '22',   label: 'Categories' },
  { num: '5★',   label: 'Rated'      },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Pick today's special by day of week (0-6) — stays the same all day, changes tomorrow
  const todaysSpecial = DAILY_SPECIALS[new Date().getDay()];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Keyframes injected once — avoids index.css coupling */}
      <style>{`
        @keyframes heroFloat {
          from { transform: translateY(0); }
          to   { transform: translateY(-10px); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.3; }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">

        {/* ── Background ── */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90"
            alt="Floris Restaurant ambiance"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* ── Ambient Fire Glow Orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FF6A00, transparent 70%)',
              top: '-100px', left: '-100px', opacity: 0.2,
              animation: 'heroPulse 4s ease-in-out infinite',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFB347, transparent 70%)',
              bottom: '10%', right: '-80px', opacity: 0.15,
              animation: 'heroPulse 5s ease-in-out 1.5s infinite',
            }}
          />
        </div>

        {/* ── Floating Particles ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-500"
              style={{
                width:  `${1.5 + (i % 3)}px`,
                height: `${1.5 + (i % 3)}px`,
                left:   `${5 + (i * 6.8) % 90}%`,
                top:    `${10 + (i * 9.3) % 75}%`,
                opacity: 0.15 + (i % 5) * 0.07,
                animation: `heroFloat ${3.5 + (i % 4) * 0.8}s ease-in-out ${i * 0.35}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-7 sm:mb-9"
            style={{
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-orange-500/60" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-orange-500"
                style={{ animation: 'heroPulse 1.8s ease-in-out infinite', boxShadow: '0 0 6px #FF6A00' }}
              />
              <span className="text-orange-300 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                Premium Dining Experience · Patan, Gujarat
              </span>
            </div>
            <div className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-orange-500/60" />
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-tight mb-6 sm:mb-8"
            style={{
              fontSize:   'clamp(2.6rem, 8vw, 5.5rem)',
              lineHeight: 1.07,
              letterSpacing: '-0.02em',
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '150ms',
            }}
          >
            <span className="block text-white" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.8)' }}>
              Where Every
            </span>
            <span
              className="block py-1"
              style={{
                background: 'linear-gradient(90deg, #FF6A00 0%, #FFB347 50%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(255,106,0,0.4))',
              }}
            >
              Meal Ignites
            </span>
            <span className="block text-white" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.8)' }}>
              Memories
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-lg sm:max-w-xl mx-auto text-zinc-400 leading-relaxed mb-9 sm:mb-11"
            style={{
              fontSize:   'clamp(0.9rem, 2vw, 1.1rem)',
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '300ms',
            }}
          >
            Patan's most celebrated restaurant & banquet — aesthetic lighting,
            signature mojitos, and an exquisite{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
              }}
            >
              100% vegetarian
            </span>{' '}
            menu crafted for every occasion.
          </p>

          {/* ── CTA Buttons (Issue #3 — now functional) ── */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-14"
            style={{
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '450ms',
            }}
          >
            {/* Primary — Book a Table → scrolls to #contact */}
            <button
              onClick={() => scrollTo('contact')}
              className="group relative px-8 py-4 rounded-full font-bold text-sm sm:text-base text-black overflow-hidden
                         shadow-[0_0_30px_rgba(255,106,0,0.45)] hover:shadow-[0_0_50px_rgba(255,106,0,0.65)]
                         hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer border-0"
              style={{ background: 'linear-gradient(90deg, #FF6A00, #FFB347)' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent
                               -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 tracking-wide">Book a Table</span>
            </button>

            {/* Secondary — Explore Menu → scrolls to #menu */}
            <button
              onClick={() => scrollTo('menu')}
              className="px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white
                         border border-orange-600/50 hover:border-orange-600
                         hover:bg-orange-600/10 hover:scale-105 active:scale-95
                         transition-all duration-500 cursor-pointer bg-transparent"
            >
              Explore Menu
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-8 sm:gap-12 mb-10 sm:mb-14"
            style={{
              opacity:   isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease',
              transitionDelay: '600ms',
            }}
          >
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.num}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm tracking-wider uppercase">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── Today's Special Card — data-driven (Issue #7) ── */}
          <div
            className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl
                       bg-black/50 backdrop-blur-md border border-orange-600/20"
            style={{
              opacity:   isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              transitionDelay: '750ms',
            }}
          >
            <span className="text-2xl">{todaysSpecial.emoji}</span>
            <div className="text-left">
              <p className="text-orange-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-0.5">
                Today's Special
              </p>
              <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                {todaysSpecial.name}
              </p>
              <p className="text-zinc-400 text-xs mt-0.5">{todaysSpecial.tag}</p>
            </div>
            <div
              className="ml-2 px-3 py-1.5 rounded-lg text-black font-bold text-sm"
              style={{ background: 'linear-gradient(90deg, #FF6A00, #FFB347)' }}
            >
              {todaysSpecial.price}
            </div>
          </div>
        </div>

        {/* ── Ticker ── */}
        <div className="relative z-10 border-t border-white/5 py-3 overflow-hidden bg-black/30 backdrop-blur-sm">
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{ animation: 'tickerScroll 30s linear infinite' }}
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="text-zinc-500 text-xs sm:text-sm flex-shrink-0 flex items-center gap-3">
                <span
                  className="w-1 h-1 rounded-full inline-block"
                  style={{ background: '#FF6A00', boxShadow: '0 0 6px #FF6A00' }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Scroll Indicator ── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{
            opacity:   isVisible ? 0.6 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '1000ms',
          }}
        >
          <span className="text-zinc-500 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <div
            className="w-px h-12 mx-auto"
            style={{ background: 'linear-gradient(to bottom, rgba(255,106,0,0.6), transparent)' }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;

// src/components/About.jsx
// Fix (Issue #10): Each animated element now has its own IntersectionObserver
// so items only animate in when *they* enter the viewport, not all at once.
import React, { useState, useEffect, useRef } from 'react';

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// ─── useInView — individual observer hook (Issue #10 fix) ────────────────────
function useInView(threshold = 0.25) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── Animated wrapper ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, threshold = 0.25 }) {
  const [ref, inView] = useInView(threshold);
  return (
    <div
      ref={ref}
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── About Component ──────────────────────────────────────────────────────────
const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Our Specialties',
      items: [
        'Special mojitos crafted to perfection',
        'Signature dishes like Spl. Lazeez Paneer',
        'Varied menu with diverse cuisines',
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Modern Ambiance',
      items: [
        'Aesthetic lighting for perfect atmosphere',
        'Contemporary design and decor',
        'Stylish and comfortable seating',
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: 'Banquet Facilities',
      items: [
        'Perfect for birthday parties and celebrations',
        'Ideal venue for social gatherings and events',
        'Ample parking space available',
      ],
    },
  ];

  const stats = [
    { num: '100+', label: 'Menu Items' },
    { num: '22',   label: 'Categories' },
    { num: '5★',   label: 'Rated'      },
    { num: '2024', label: 'Est.'        },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats — each one has its own observer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 100} threshold={0.2}>
              <div className="text-center p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                <p
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.num}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm tracking-wider uppercase">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Section header — own observer */}
        <FadeUp threshold={0.2}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full mb-6">
              <p className="text-orange-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                About Floris
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">Patan's Finest</span>
              <span className="block bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">
                Dining Destination
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Floris Restaurant & Banquet brings modern luxury dining to Patan. Located in the
              Mashruwala Complex, we offer an immersive culinary experience where every detail —
              from our signature fire-inspired lighting to our diverse 100% vegetarian menu — is
              crafted with passion.
            </p>
          </div>
        </FadeUp>

        {/* Feature cards — each has its own observer (Issue #10) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, i) => (
            <FadeUp key={i} delay={i * 120} threshold={0.2}>
              <div className="group h-full p-6 sm:p-8 bg-zinc-900/50 rounded-2xl border border-white/5
                             hover:border-orange-600/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0
                               group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl
                               transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-300
                                 rounded-2xl flex items-center justify-center mb-5
                                 shadow-lg shadow-orange-600/50 text-black">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm sm:text-base">
                        <span className="text-orange-500 mt-1 flex-shrink-0">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Location card — own observer */}
        <FadeUp threshold={0.15}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between
                         gap-6 p-6 sm:p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-300 rounded-xl
                             flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-600/50">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Visit Us</h4>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  1st Floor, Mashruwala Complex, Opp. New Circuit House,<br className="hidden sm:block" />
                  Patan-Chanasma Highway, Patan, Gujarat
                </p>
              </div>
            </div>
            {/* Get Directions — now functional (Issue #3) */}
            <a
              href="https://maps.google.com/?q=Floris+Restaurant+Patan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-300
                         text-black font-bold text-sm sm:text-base rounded-full
                         hover:scale-105 transition-all duration-500
                         shadow-lg shadow-orange-600/50 whitespace-nowrap"
            >
              Get Directions
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default About;

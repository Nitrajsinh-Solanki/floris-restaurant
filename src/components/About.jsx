// src/components/About.jsx
// Premium About Section with Advanced Animations & Stunning UI
import React, { useState, useEffect, useRef } from 'react';

// ─── Custom Hooks ─────────────────────────────────────────────────────────────

// Individual IntersectionObserver for each element
function useInView(threshold = 0.15) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// Counter animation hook
function useCounter(end, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return count;
}

// Parallax scroll effect
function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const offset = (scrolled - elementTop) * speed;
      setOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
}

// ─── Animation Wrappers ───────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, threshold = 0.15 }) {
  const [ref, inView] = useInView(threshold);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, 
                     transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function FadeLeft({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-60px)',
        transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, 
                     transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function FadeRight({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(60px)',
        transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, 
                     transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ScaleIn({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.9)',
        transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, 
                     transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Animated Counter Component ───────────────────────────────────────────────
function AnimatedStat({ end, suffix = '', label, delay = 0 }) {
  const [ref, inView] = useInView(0.2);
  const count = useCounter(end, 2000, inView);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3"
        style={{
          background: 'linear-gradient(135deg, #FF6A00, #FFB347)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: inView ? 'none' : 'blur(8px)',
          transition: `filter 0.6s ease ${delay}ms`,
        }}
      >
        {count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm sm:text-base tracking-[0.2em] uppercase font-semibold">
        {label}
      </div>
    </div>
  );
}

// ─── Main About Component ─────────────────────────────────────────────────────
const About = () => {
  const [parallaxRef, parallaxOffset] = useParallax(0.3);

  const features = [
    {
      icon: '🍸',
      title: 'Signature Mojitos',
      description: 'Special mojitos crafted to perfection',
      details: [
        'Unique flavor combinations',
        'Fresh ingredients daily',
        'Expert mixology',
      ],
    },
    {
      icon: '🔥',
      title: 'Sizzling Specialties',
      description: 'Signature dishes that define excellence',
      details: [
        'Spl. Lazeez Paneer',
        'Premium sizzlers',
        '100% vegetarian menu',
      ],
    },
    {
      icon: '💎',
      title: 'Modern Luxury',
      description: 'Aesthetic ambiance with fire-inspired lighting',
      details: [
        'Contemporary interior design',
        'Cinematic atmosphere',
        'Instagram-worthy spaces',
      ],
    },
    {
      icon: '🎉',
      title: 'Banquet Excellence',
      description: 'Perfect venue for celebrations',
      details: [
        'Birthday parties & events',
        'Corporate gatherings',
        'Ample parking space',
      ],
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Grand Opening',
      description: 'Floris opens its doors to Patan, bringing modern luxury dining to the city.',
    },
    {
      year: '100+',
      title: 'Menu Expansion',
      description: 'Diverse menu spanning 22 categories with signature dishes.',
    },
    {
      year: '5★',
      title: 'Excellence Recognized',
      description: 'Achieving top ratings for quality, service, and ambiance.',
    },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Fresh ingredients, expert preparation, every single time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Guest Experience',
      description: 'Creating memorable moments through exceptional service.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'Pushing boundaries while honoring culinary traditions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          ANIMATED BACKGROUND ELEMENTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top glow */}
        <div 
          className="absolute -top-32 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[140px]"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        {/* Bottom glow */}
        <div 
          className="absolute -bottom-32 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-[140px]"
          style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-300/5 rounded-full blur-[120px] animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div ref={parallaxRef} className="relative z-10">

        {/* ═══════════════════════════════════════════════════════════════════════
            HERO STATS SECTION
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="py-20 sm:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-24">
              <AnimatedStat end={100} suffix="+" label="Menu Items" delay={0} />
              <AnimatedStat end={22} suffix="" label="Categories" delay={150} />
              <AnimatedStat end={5} suffix="★" label="Rating" delay={300} />
              <AnimatedStat end={2024} suffix="" label="Established" delay={450} />
            </div>

            {/* Main Heading */}
            <FadeUp threshold={0.1}>
              <div className="text-center mb-16 sm:mb-20">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600/10 
                               border border-orange-600/30 rounded-full mb-8 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-orange-300 text-sm sm:text-base font-bold tracking-[0.2em] uppercase">
                    About Floris
                  </span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" 
                       style={{ animationDelay: '0.5s' }} />
                </div>
                
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
                  <span className="block text-white mb-3">Patan's Premier</span>
                  <span className="block bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 
                                 bg-clip-text text-transparent">
                    Dining Experience
                  </span>
                </h2>
                
                <p className="text-zinc-400 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto 
                             leading-relaxed font-light">
                  Where modern luxury meets culinary excellence. Located in the heart of Patan,
                  Floris brings you an immersive dining journey crafted with passion and precision.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            OUR STORY SECTION - Split Layout
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left: Story */}
              <FadeLeft delay={0}>
                <div className="space-y-8">
                  <div className="inline-block">
                    <div className="flex items-center gap-3 text-orange-500 mb-4">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-transparent" />
                      <span className="text-sm font-bold tracking-[0.2em] uppercase">Our Story</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                    Crafting Moments,
                    <span className="block bg-gradient-to-r from-orange-600 to-orange-300 
                                   bg-clip-text text-transparent">
                      One Dish at a Time
                    </span>
                  </h3>
                  
                  <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
                    <p>
                      Floris Restaurant & Banquet was born from a vision to transform Patan's
                      dining landscape. Situated in the prestigious Mashruwala Complex, we've created
                      a space where fire-inspired elegance meets 100% vegetarian culinary artistry.
                    </p>
                    <p>
                      Every element—from our signature fire-glow lighting to our meticulously curated
                      menu spanning 22 diverse categories—reflects our commitment to excellence.
                      We don't just serve food; we create experiences.
                    </p>
                    <p className="text-white font-semibold">
                      Whether it's an intimate dinner or a grand celebration, Floris is where
                      memories are made.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="#menu"
                      className="group inline-flex items-center gap-3 px-8 py-4 
                               bg-gradient-to-r from-orange-600 to-orange-400
                               text-black font-bold text-lg rounded-full
                               hover:scale-105 hover:shadow-[0_0_40px_rgba(255,106,0,0.5)]
                               transition-all duration-500"
                    >
                      Explore Our Menu
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeLeft>

              {/* Right: Timeline */}
              <FadeRight delay={200}>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b 
                                from-orange-600 via-orange-400 to-transparent" />
                  
                  <div className="space-y-12 pl-12">
                    {timeline.map((item, i) => (
                      <ScaleIn key={i} delay={i * 150}>
                        <div className="relative group">
                          {/* Dot */}
                          <div className="absolute -left-12 top-2 w-6 h-6 bg-orange-600 
                                        rounded-full border-4 border-black
                                        group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.6)]
                                        transition-all duration-500" />
                          
                          <div className="bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl 
                                        border border-white/5 hover:border-orange-600/30
                                        hover:shadow-[0_0_30px_rgba(255,106,0,0.15)]
                                        transition-all duration-500">
                            <div className="text-3xl sm:text-4xl font-black mb-3
                                          bg-gradient-to-r from-orange-600 to-orange-300 
                                          bg-clip-text text-transparent">
                              {item.year}
                            </div>
                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                              {item.title}
                            </h4>
                            <p className="text-zinc-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </ScaleIn>
                    ))}
                  </div>
                </div>
              </FadeRight>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            FEATURES SHOWCASE
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-transparent via-zinc-950/30 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <FadeUp threshold={0.1}>
              <div className="text-center mb-16 sm:mb-20">
                <div className="inline-block px-6 py-3 bg-orange-600/10 border border-orange-600/30 
                               rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-orange-300 text-sm font-bold tracking-[0.2em] uppercase">
                    Why Choose Floris
                  </span>
                </div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Unmatched <span className="bg-gradient-to-r from-orange-600 to-orange-300 
                                             bg-clip-text text-transparent">Excellence</span>
                </h3>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, i) => (
                <FadeUp key={i} delay={i * 100} threshold={0.1}>
                  <div className="group relative h-full">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-400/10 
                                  rounded-3xl blur-xl opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-700" />
                    
                    <div className="relative h-full p-8 bg-zinc-900/50 backdrop-blur-sm rounded-3xl 
                                  border border-white/5 group-hover:border-orange-600/30
                                  transition-all duration-500
                                  hover:transform hover:-translate-y-2">
                      
                      {/* Icon */}
                      <div className="w-20 h-20 mb-6 bg-gradient-to-br from-orange-600 to-orange-400 
                                    rounded-2xl flex items-center justify-center text-5xl
                                    shadow-lg shadow-orange-600/30
                                    group-hover:scale-110 group-hover:rotate-6 
                                    group-hover:shadow-[0_0_30px_rgba(255,106,0,0.5)]
                                    transition-all duration-500">
                        {feature.icon}
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h4>
                      
                      <p className="text-zinc-400 mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      <ul className="space-y-3">
                        {feature.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-3 text-zinc-400 text-sm">
                            <span className="text-orange-500 mt-1 flex-shrink-0 text-lg">✦</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            OUR VALUES
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <FadeUp threshold={0.1}>
              <div className="text-center mb-16 sm:mb-20">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Our <span className="bg-gradient-to-r from-orange-600 to-orange-300 
                                      bg-clip-text text-transparent">Core Values</span>
                </h3>
                <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto">
                  The principles that guide every decision we make
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {values.map((value, i) => (
                <ScaleIn key={i} delay={i * 150}>
                  <div className="group text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 mb-6
                                  bg-gradient-to-br from-orange-600 to-orange-400 rounded-full
                                  text-black shadow-lg shadow-orange-600/40
                                  group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,106,0,0.6)]
                                  transition-all duration-500">
                      {value.icon}
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            LOCATION & CTA
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <FadeUp threshold={0.1}>
              <div className="relative overflow-hidden rounded-3xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent 
                              pointer-events-none" />
                
                <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 
                              p-8 sm:p-12 lg:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Location Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 
                                      rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/50">
                          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-3xl sm:text-4xl font-black text-white">Visit Us</h4>
                          <p className="text-orange-400 text-sm tracking-wider uppercase">
                            Located in Patan
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 text-zinc-300 text-base sm:text-lg mb-8">
                        <p className="leading-relaxed">
                          <strong className="text-white">1st Floor, Mashruwala Complex</strong><br />
                          Opp. New Circuit House<br />
                          Patan-Chanasma Highway<br />
                          Patan, Gujarat
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://maps.google.com/?q=Floris+Restaurant+Patan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 px-8 py-4 
                                   bg-gradient-to-r from-orange-600 to-orange-400
                                   text-black font-bold text-base rounded-full
                                   hover:scale-105 hover:shadow-[0_0_40px_rgba(255,106,0,0.6)]
                                   transition-all duration-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          Get Directions
                        </a>

                        <a
                          href="tel:+911234567890"
                          className="inline-flex items-center gap-3 px-8 py-4 
                                   bg-transparent border-2 border-orange-600
                                   text-orange-400 font-bold text-base rounded-full
                                   hover:bg-orange-600 hover:text-black
                                   transition-all duration-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Now
                        </a>
                      </div>
                    </div>

                    {/* Right: Decorative Element */}
                    <div className="relative hidden lg:block">
                      <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-600/20 to-orange-400/10 
                                    border border-orange-600/30 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-6 p-12">
                            <div className="text-8xl animate-bounce" style={{ animationDuration: '3s' }}>
                              🍽️
                            </div>
                            <div className="text-2xl font-bold text-white">
                              We're Ready to
                              <span className="block text-4xl bg-gradient-to-r from-orange-600 to-orange-300 
                                             bg-clip-text text-transparent">
                                Serve You
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
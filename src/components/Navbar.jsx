// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ─── Updated navLinks order ─────────────────────────────────────────────────
  const navLinks = [
    { name: 'Home',    href: 'home'    },
    { name: 'About',   href: 'about'   },
    { name: 'Banquet', href: 'banquet' },
    { name: 'Menu',    href: 'menu'    },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' },
  ];

  // ─── Scroll-state for navbar glass effect ─────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── Active section via IntersectionObserver ─────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -20% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  // ─── Mobile link click: close menu, set active section, then scroll ─────────
  const handleMobileLink = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    setTimeout(() => scrollTo(id), 320);
  };

  // ─── Desktop link click: set active section and scroll ────────────────────
  const handleDesktopLink = (id) => {
    setActiveSection(id);
    scrollTo(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <button
            onClick={() => handleDesktopLink('home')}
            className="flex items-center group cursor-pointer flex-shrink-0 min-w-0 bg-transparent border-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-300 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent
                                   drop-shadow-[0_0_25px_rgba(255,106,0,0.3)]">
                    FLORIS
                  </span>
                </h1>
                <p className="text-zinc-400 text-[8px] sm:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5">
                  Restaurant & Banquet
                </p>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleDesktopLink(link.href)}
                  className={`relative px-2 xl:px-4 py-2 font-medium text-sm xl:text-base
                             hover:text-orange-300 transition-all duration-300 group whitespace-nowrap
                             bg-transparent border-0 cursor-pointer
                             ${isActive ? 'text-orange-300' : 'text-white'}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Active / hover underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5
                               bg-gradient-to-r from-orange-600 to-orange-300
                               shadow-[0_0_10px_rgba(255,106,0,0.6)]
                               transition-all duration-500
                               ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                  {/* Hover glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600/0 to-orange-300/0
                                   group-hover:from-orange-600/10 group-hover:to-orange-300/10
                                   rounded-lg blur-sm transition-all duration-500" />
                </button>
              );
            })}
          </div>

          {/* CTA — Book a Table */}
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={() => handleDesktopLink('contact')}
              className="relative group px-4 xl:px-8 py-2.5 xl:py-3
                         bg-gradient-to-r from-orange-600 to-orange-300
                         text-black font-bold text-sm xl:text-base rounded-full
                         hover:scale-105 transition-all duration-500
                         shadow-[0_0_25px_rgba(255,106,0,0.4)]
                         hover:shadow-[0_0_40px_rgba(255,106,0,0.7)]
                         overflow-hidden whitespace-nowrap cursor-pointer border-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                               -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 tracking-wide">BOOK A TABLE</span>
            </button>
          </div>

          {/* Mobile hamburger - Now at the top-right corner */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center
                       text-white hover:text-orange-300 transition-colors duration-300 flex-shrink-0 z-50"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-300
                               transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-300
                               transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-300
                               transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Now absolutely positioned and hidden when closed */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 z-40 overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-6 py-4 bg-black/90 backdrop-blur-xl border-t border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleMobileLink(link.href)}
                  className={`block w-full text-left py-3 font-medium text-lg bg-transparent border-0 cursor-pointer
                             transition-colors duration-300 border-b border-white/5 last:border-0
                             ${isActive ? 'text-orange-300' : 'text-white hover:text-orange-300'}`}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={() => handleMobileLink('contact')}
              className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-300
                         text-black font-bold text-base rounded-full
                         shadow-[0_0_25px_rgba(255,106,0,0.4)]
                         active:scale-95 transition-transform duration-300 cursor-pointer border-0"
            >
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
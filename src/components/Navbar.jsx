// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Banquet', href: '#banquet' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          
          {/* Logo */}
          <div className="flex items-center group cursor-pointer flex-shrink-0 min-w-0">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-2 xl:px-4 py-2 text-white font-medium text-sm xl:text-base
                         hover:text-orange-300 transition-all duration-300 group whitespace-nowrap"
              >
                <span className="relative z-10">{link.name}</span>
                
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                               bg-gradient-to-r from-orange-600 to-orange-300
                               group-hover:w-full transition-all duration-500
                               shadow-[0_0_10px_rgba(255,106,0,0.6)]" />
                
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600/0 to-orange-300/0
                               group-hover:from-orange-600/10 group-hover:to-orange-300/10
                               rounded-lg blur-sm transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <button className="relative group px-4 xl:px-8 py-2.5 xl:py-3 bg-gradient-to-r from-orange-600 to-orange-300 
                             text-black font-bold text-sm xl:text-base rounded-full
                             hover:scale-105 transition-all duration-500
                             shadow-[0_0_25px_rgba(255,106,0,0.4)]
                             hover:shadow-[0_0_40px_rgba(255,106,0,0.7)]
                             overflow-hidden whitespace-nowrap">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                             -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 tracking-wide">BOOK A TABLE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center
                     text-white hover:text-orange-300 transition-colors duration-300 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-300 
                             transition-transform duration-300 ${
                               isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                             }`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-300
                             transition-opacity duration-300 ${
                               isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                             }`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-300
                             transition-transform duration-300 ${
                               isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                             }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="bg-black/98 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-white font-medium text-lg
                       hover:text-orange-300 transition-colors duration-300
                       border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
          
          <button className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-300 
                           text-black font-bold text-base rounded-full
                           shadow-[0_0_25px_rgba(255,106,0,0.4)]
                           active:scale-95 transition-transform duration-300">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
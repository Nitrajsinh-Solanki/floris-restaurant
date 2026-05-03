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
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-4">
          
          {/* Logo */}
          <div className="flex items-center group cursor-pointer flex-shrink-0">
            <div className="relative">
              {/* Fire glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent 
                                 drop-shadow-[0_0_25px_rgba(255,106,0,0.3)]">
                    FLORIS
                  </span>
                </h1>
                <p className="text-[#A1A1AA] text-[10px] sm:text-xs lg:text-sm tracking-[0.3em] uppercase mt-0.5">
                  Restaurant & Banquet
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-3 xl:px-5 py-2 text-[#FFFFFF] font-medium text-sm xl:text-base
                         hover:text-[#FFB347] transition-all duration-300 group whitespace-nowrap"
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Active/Hover indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                               bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                               group-hover:w-full transition-all duration-500
                               shadow-[0_0_10px_rgba(255,106,0,0.6)]" />
                
                {/* Fire glow on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/0 to-[#FFB347]/0
                               group-hover:from-[#FF6A00]/10 group-hover:to-[#FFB347]/10
                               rounded-lg blur-sm transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0 ml-4">
            <button className="relative group px-6 xl:px-8 py-3 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
                             text-black font-bold text-sm xl:text-base rounded-full
                             hover:scale-105 transition-all duration-500
                             shadow-[0_0_25px_rgba(255,106,0,0.4)]
                             hover:shadow-[0_0_40px_rgba(255,106,0,0.7)]
                             overflow-hidden whitespace-nowrap z-10">
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                             -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 tracking-wide">BOOK A TABLE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center
                     text-white hover:text-[#FFB347] transition-colors duration-300 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
                             transition-transform duration-300 ${
                               isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                             }`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                             transition-opacity duration-300 ${
                               isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                             }`} />
              <span className={`w-full h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
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
        <div className="bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-[#FFFFFF] font-medium text-lg
                       hover:text-[#FFB347] transition-colors duration-300
                       border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
          
          <button className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] 
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
// src/components/Footer.jsx
import React, { useState } from 'react';

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// ─── Social Icon SVGs ─────────────────────────────────────────────────────────
const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: 'Home',    href: 'home'    },
  { name: 'About',   href: 'about'   },
  { name: 'Menu',    href: 'menu'    },
  { name: 'Banquet', href: 'banquet' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Contact', href: 'contact' },
];

const menuCategories = [
  { name: 'Veg. Main Course',   icon: '🍛' },
  { name: 'Chinese Specialties', icon: '🥡' },
  { name: 'Tandoori & Breads',  icon: '🫓' },
  { name: 'Sizzlers',           icon: '🔥' },
  { name: 'Ice Cream & Dessert',icon: '🍨' },
];

// ─── Main Footer ──────────────────────────────────────────────────────────────
const Footer = () => {
  // ── Newsletter state (Issue #9) ────────────────────────────────────────────
  const [email, setEmail]           = useState('');
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Issue #9 fix: prevent page reload GET request
    if (!email.trim()) return;

    setSubmitting(true);
    // TODO: replace with your actual email submission endpoint / API call
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setEmail('');
    }, 800);
  };

  return (
    <footer style={{ background: '#0A0A0A' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#FF6A00]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-[#FFB347]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

            {/* Col 1 — About */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] blur-xl opacity-40" />
                  <h2 className="relative text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent">
                    FLORIS
                  </h2>
                </div>
                <p className="text-[#A1A1AA] text-sm tracking-wider uppercase">Restaurant & Banquet</p>
              </div>
              <p className="text-[#A1A1AA] leading-relaxed text-sm">
                Experience premium dining with aesthetic lighting, signature mojitos,
                and exquisite cuisine at Patan's finest restaurant and banquet venue.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group w-10 h-10 rounded-full bg-white/5 border border-white/10
                             hover:bg-gradient-to-r hover:from-[#FF6A00] hover:to-[#FFB347]
                             hover:border-transparent flex items-center justify-center
                             transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.5)]"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[#A1A1AA] group-hover:text-black transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg relative inline-block pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]" />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="group flex items-center gap-2 text-[#A1A1AA] hover:text-[#FFB347]
                                 transition-colors duration-300 bg-transparent border-0 cursor-pointer p-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm">{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Menu Categories */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg relative inline-block pb-3">
                Our Menu
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]" />
              </h3>
              <div className="space-y-3">
                {menuCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => scrollTo('menu')}
                    className="group w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10
                             hover:bg-white/10 hover:border-[#FF6A00]/30 transition-all duration-300 cursor-pointer text-left"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm text-[#A1A1AA] group-hover:text-[#FFB347] transition-colors">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Col 4 — Contact (Issue #6: corrected hours & phone) */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg relative inline-block pb-3">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]" />
              </h3>
              <div className="space-y-4">

                {/* Address */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                                flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm mb-1">Address</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      1st Floor, Mashruwala Complex<br />
                      Opp. New Circuit House<br />
                      Patan-Chanasma Highway, Patan
                    </p>
                  </div>
                </div>

                {/* Phone — placeholder; update with real number (Issue #6) */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                                flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm mb-1">Phone</p>
                    {/* TODO: Replace with the restaurant's actual number */}
                    <a href="tel:+91XXXXXXXXXX"
                       className="text-[#A1A1AA] hover:text-[#FFB347] text-sm transition-colors">
                      Contact via social media
                    </a>
                  </div>
                </div>

                {/* Hours — accurate (Issue #6: was "Open 24/7") */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FFB347]
                                flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm mb-1">Hours</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      Lunch: 11:30 AM – 3:30 PM<br />
                      Dinner: 7:00 PM – 11:00 PM<br />
                      <span className="text-xs text-[#6B7280]">Banquet by appointment</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter (Issue #9 — form now has onSubmit + state) */}
          <div className="py-12 border-b border-white/10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Join Our{' '}
                  <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent">
                    Fire Club
                  </span>
                </h3>
                <p className="text-[#A1A1AA] text-sm">
                  Get exclusive offers, menu updates, and special event invitations
                </p>
              </div>

              {submitted ? (
                <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-full
                               bg-green-900/30 border border-green-600/30">
                  <span className="text-green-400 text-sm font-medium">
                    🎉 You're on the list! We'll be in touch soon.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full
                             text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF6A00]/50
                             focus:bg-white/10 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] text-black font-bold
                             rounded-full hover:scale-105 active:scale-95 transition-all
                             shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)]
                             whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-0"
                  >
                    {submitting ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm">
              © {new Date().getFullYear()} Floris Restaurant & Banquet, Patan. All rights reserved.
            </p>
            <p className="text-[#6B7280] text-xs">
              Crafted with ❤️ for premium dining
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

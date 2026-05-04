// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Florisbanquetsection from './components/Florisbanquetsection';
import FlorisMenu from './components/FlorisMenu';
import Florisgallery from './components/Florisgallery';
import Floriscontact from './components/Floriscontact';
import Footer from './components/Footer';
import './App.css';

// ─── Scroll-to-Top Button (Issue #8) ─────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 200,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FF6A00, #FFB347)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 25px rgba(255,106,0,0.45)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      <svg
        width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="#0A0A0A" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="banquet">
          <Florisbanquetsection />
        </section>
        <section id="menu">
          <FlorisMenu />
        </section>
        <section id="gallery">
          <Florisgallery />
        </section>
        <section id="contact">
          <Floriscontact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

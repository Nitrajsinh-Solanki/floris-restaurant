// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Florisbanquetsection from './components/Florisbanquetsection';
import FlorisMenu from './components/FlorisMenu';
import Florisgallery from './components/Florisgallery';
import Floriscontact from './components/Floriscontact';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
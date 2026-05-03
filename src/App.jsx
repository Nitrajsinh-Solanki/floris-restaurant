// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FlorisMenu from './components/FlorisMenu';
import Florisgallery from './components/Florisgallery';
import Florisbanquetsection from './components/Florisbanquetsection';
import Floriscontact from './components/Floriscontact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section - Added top padding to account for fixed navbar */}
      <section id="home" className="pt-20 lg:pt-24">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Menu Section */}
      <section id="menu">
        <FlorisMenu />
      </section>
      
      {/* Gallery Section */}
      <section id="gallery">
        <Florisgallery />
      </section>
      
      {/* Banquet Section */}
      <section id="banquet">
        <Florisbanquetsection />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Floriscontact />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
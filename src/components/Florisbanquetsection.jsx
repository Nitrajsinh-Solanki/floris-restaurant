import React, { useState } from 'react';

const FlorisBanquetSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "✨",
      title: "Aesthetic Lighting",
      description: "Immersive ambiance with fire-inspired lighting that transforms every celebration into a cinematic experience"
    },
    {
      icon: "🍽️",
      title: "Signature Cuisine",
      description: "Featuring our exclusive Spl. Lazeez Paneer and diverse menu crafted for unforgettable celebrations"
    },
    {
      icon: "🎉",
      title: "Event Perfection",
      description: "Birthday parties, corporate events, and celebrations executed with meticulous attention to detail"
    },
    {
      icon: "🚗",
      title: "Ample Parking",
      description: "Convenient, spacious parking facilities ensuring hassle-free arrival for you and your guests"
    }
  ];

  const eventTypes = [
    { name: "Birthday Parties", capacity: "50-150 Guests" },
    { name: "Corporate Events", capacity: "30-100 Guests" },
    { name: "Anniversaries", capacity: "40-120 Guests" },
    { name: "Social Gatherings", capacity: "25-150 Guests" }
  ];

  const galleryImages = [
    { type: "venue", label: "Main Banquet Hall" },
    { type: "lighting", label: "Aesthetic Lighting" },
    { type: "seating", label: "Premium Seating" },
    { type: "decor", label: "Event Decor" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-[#0A0A0A]"></div>
        
        {/* Fire glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
             style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.6), transparent 70%)' }}>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8 animate-fadeIn">
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
              <p className="text-[#FFB347] tracking-[0.3em] text-sm font-light uppercase">
                Floris Restaurant & Banquet
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(90deg, #FF6A00, #FFB347, #FF6A00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  backgroundSize: '200% auto',
                  animation: 'gradient 8s linear infinite'
                }}>
              Where Celebrations
              <br />
              Become Memories
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed font-light"
               style={{ fontFamily: "'Outfit', sans-serif" }}>
              Patan's most stylish banquet venue, designed for moments that matter.
              <br />
              Modern luxury meets warm hospitality in every detail.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="group relative px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105"
                      style={{
                        background: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                        color: '#0A0A0A',
                        boxShadow: '0 0 30px rgba(255,106,0,0.4)'
                      }}>
                <span className="relative z-10">Book Your Event</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB347] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group relative px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105"
                      style={{
                        background: 'transparent',
                        border: '2px solid #FF6A00',
                        color: '#FFB347'
                      }}>
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#0A0A0A] font-semibold">
                  View Packages
                </span>
              </button>
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/5 mt-12">
              <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse"></div>
              <p className="text-[#A1A1AA] text-sm">
                Mashruwala Complex, Patan-Chanasma Highway
              </p>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
             style={{ background: 'radial-gradient(circle, #FF6A00, transparent)' }}>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
             style={{ background: 'radial-gradient(circle, #FFB347, transparent)', animationDelay: '1s' }}>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-[#FF6A00] tracking-[0.3em] text-sm font-light uppercase mb-4">
              Premium Amenities
            </p>
            <h2 className="text-5xl md:text-6xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(90deg, #FFFFFF, #A1A1AA)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
              Crafted for Excellence
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-[#1A1A1A] border border-white/5 transition-all duration-700 hover:scale-105 cursor-pointer"
                style={{
                  boxShadow: activeFeature === index ? '0 0 40px rgba(255,106,0,0.3)' : '0 10px 40px rgba(0,0,0,0.5)',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ background: 'radial-gradient(circle at top, rgba(255,106,0,0.1), transparent 70%)' }}>
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        backgroundImage: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                        WebkitBackgroundClip: activeFeature === index ? 'text' : 'unset',
                        backgroundClip: activeFeature === index ? 'text' : 'unset',
                        color: activeFeature === index ? 'transparent' : '#FFFFFF'
                      }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A1A1AA] leading-relaxed"
                     style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div className="h-1 w-0 group-hover:w-16 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none">
          <div className="w-full h-full rounded-full"
               style={{ background: 'radial-gradient(circle, #FF6A00, transparent 70%)' }}>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="relative py-32 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-[#FF6A00] tracking-[0.3em] text-sm font-light uppercase mb-4">
              Versatile Spaces
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
              Every Occasion, Elevated
            </h2>
            <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto"
               style={{ fontFamily: "'Outfit', sans-serif" }}>
              From intimate gatherings to grand celebrations, our banquet adapts to your vision
            </p>
          </div>

          {/* Event Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/5 transition-all duration-700 hover:scale-[1.02]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ background: 'linear-gradient(135deg, rgba(255,106,0,0.1), rgba(255,179,71,0.05))' }}>
                </div>

                <div className="relative p-10 flex items-center justify-between">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          backgroundImage: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text'
                        }}>
                      {event.name}
                    </h3>
                    <p className="text-[#A1A1AA] text-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF6A00]"></span>
                      {event.capacity}
                    </p>
                  </div>

                  {/* Arrow icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6A00]/20 to-[#FFB347]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all duration-500">
                    <svg className="w-8 h-8 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-[#FF6A00] tracking-[0.3em] text-sm font-light uppercase mb-4">
              Visual Experience
            </p>
            <h2 className="text-5xl md:text-6xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(90deg, #FFFFFF, #A1A1AA)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
              A Glimpse Inside
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Placeholder background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]"></div>
                
                {/* Fire glow overlay */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                     style={{ background: 'radial-gradient(circle at center, rgba(255,106,0,0.3), transparent 70%)' }}>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 transform group-hover:scale-105 transition-transform duration-700">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#0A0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white"
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {image.label}
                    </h3>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ boxShadow: 'inset 0 0 60px rgba(255,106,0,0.3)' }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]">
        {/* Fire glow background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-20"
               style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.4), transparent 70%)' }}>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#FF6A00] to-[#FFB347]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FF6A00] animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-[#FFB347] via-[#FF6A00] to-transparent"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(90deg, #FF6A00, #FFB347, #FF6A00)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% auto',
                animation: 'gradient 8s linear infinite'
              }}>
            Ready to Create
            <br />
            Unforgettable Moments?
          </h2>

          <p className="text-2xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "'Outfit', sans-serif" }}>
            Let us transform your vision into reality with our premium banquet facilities and exceptional service
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-16">
            <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-white/5 hover:border-[#FF6A00]/30 transition-all duration-500 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6A00]/20 to-[#FFB347]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Call Us
                </h3>
                <p className="text-[#A1A1AA]">
                  Speak with our event specialists
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#1A1A1A] border border-white/5 hover:border-[#FF6A00]/30 transition-all duration-500 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6A00]/20 to-[#FFB347]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Visit Us
                </h3>
                <p className="text-[#A1A1AA]">
                  1st Floor, Mashruwala Complex, Patan
                </p>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-8">
            <button className="group relative px-16 py-6 rounded-full font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110"
                    style={{
                      background: 'linear-gradient(90deg, #FF6A00, #FFB347)',
                      color: '#0A0A0A',
                      boxShadow: '0 0 50px rgba(255,106,0,0.5)',
                      fontFamily: "'Outfit', sans-serif"
                    }}>
              <span className="relative z-10">Schedule a Visit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB347] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-pulse"
                   style={{ boxShadow: '0 0 60px rgba(255,106,0,0.6)' }}>
              </div>
            </button>
          </div>

          {/* Decorative bottom line */}
          <div className="flex items-center justify-center gap-4 pt-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#FF6A00] to-[#FFB347]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFB347] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="h-px w-32 bg-gradient-to-r from-[#FFB347] via-[#FF6A00] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #0A0A0A;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #FF6A00, #FFB347);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FFB347, #FF6A00);
        }
      `}</style>
    </div>
  );
};

export default FlorisBanquetSection;
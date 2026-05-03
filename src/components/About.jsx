import React from 'react';

const About = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Fire Glow Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,106,0,0.4),_transparent_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent">
            About Floris
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#FF6A00] to-[#FFB347] rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-[#A1A1AA] text-lg md:text-xl leading-relaxed text-center">
            Floris Restaurant & Banquet in Patan is a new, stylish venue that brings modern luxury dining to the heart of the city. 
            With aesthetic lighting and a contemporary ambiance, we create the perfect atmosphere for celebrations, social gatherings, and memorable dining experiences.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Specialties */}
          <div className="group bg-[#1A1A1A] rounded-3xl p-8 border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,106,0,0.4)]">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.6)]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Specialties</h3>
            <ul className="space-y-3 text-[#A1A1AA]">
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Special mojitos crafted to perfection</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Signature dishes like Spl. Lazeez Paneer</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Varied menu with diverse cuisines</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Ambiance */}
          <div className="group bg-[#1A1A1A] rounded-3xl p-8 border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,106,0,0.4)]">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.6)]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Modern Ambiance</h3>
            <ul className="space-y-3 text-[#A1A1AA]">
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Aesthetic lighting for perfect atmosphere</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Contemporary design and decor</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Stylish and comfortable seating</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Banquet Facilities */}
          <div className="group bg-[#1A1A1A] rounded-3xl p-8 border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,106,0,0.4)]">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,106,0,0.6)]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Banquet Facilities</h3>
            <ul className="space-y-3 text-[#A1A1AA]">
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Perfect for birthday parties and celebrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Ideal venue for social gatherings and events</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6A00] mr-2">•</span>
                <span>Ample parking space available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-[#1A1A1A] rounded-3xl p-10 md:p-12 border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,106,0,0.3)]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center shadow-[0_0_25px_rgba(255,106,0,0.4)]">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                1st Floor, Mashruwala Complex<br />
                Opposite New Circuit House<br />
                Patan-Chanasma Highway, Patan
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347] text-black font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,106,0,0.6)]">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
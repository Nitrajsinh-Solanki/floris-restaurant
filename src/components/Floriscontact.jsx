import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// Custom Social Media Icons (since lucide-react removed branded icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FlorisContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    message: ''
  });

  const [focused, setFocused] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Fire Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6A00] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFB347] opacity-15 blur-[120px] rounded-full"></div>
      
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-[0.3em] text-[#FFB347] uppercase mb-4 font-light">
            Get in Touch
          </h2>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent">
              Reserve Your
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
            Join us for an unforgettable dining experience at Floris Restaurant & Banquet. 
            Whether it's an intimate dinner or a grand celebration, we're here to make it exceptional.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Contact Info & Details */}
          <div className="space-y-8">
            
            {/* Restaurant Name Card */}
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 hover:border-[#FF6A00]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/5 group-hover:to-transparent transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Floris Restaurant & Banquet
                </h3>
                <p className="text-[#FFB347] text-sm tracking-wider uppercase">Premium Dining Experience</p>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Location */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-500">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Location</h4>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      1st Floor, Mashruwala Complex<br />
                      Opp. New Circuit House<br />
                      Patan-Chanasma Highway<br />
                      Patan, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-500">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-[#A1A1AA] text-sm">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                    <button className="text-[#FF6A00] text-xs mt-2 hover:text-[#FFB347] transition-colors">
                      Call Now →
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-500">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-[#A1A1AA] text-sm">
                      info@florisrestaurant.com<br />
                      reservations@florisrestaurant.com
                    </p>
                    <button className="text-[#FF6A00] text-xs mt-2 hover:text-[#FFB347] transition-colors">
                      Send Email →
                    </button>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-500">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Hours</h4>
                    <p className="text-[#A1A1AA] text-sm">
                      Mon - Sun<br />
                      11:00 AM - 11:00 PM<br />
                      <span className="text-[#FFB347] text-xs">Lunch: 11 AM - 3 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Highlight */}
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00] opacity-10 blur-3xl rounded-full"></div>
              <div className="relative">
                <h4 className="text-white font-bold text-xl mb-4">Why Choose Floris?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-[#A1A1AA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]"></div>
                    <span>Aesthetic Lighting & Ambience</span>
                  </li>
                  <li className="flex items-center space-x-3 text-[#A1A1AA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]"></div>
                    <span>Signature Mojitos & Cocktails</span>
                  </li>
                  <li className="flex items-center space-x-3 text-[#A1A1AA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]"></div>
                    <span>Spacious Banquet Facilities</span>
                  </li>
                  <li className="flex items-center space-x-3 text-[#A1A1AA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]"></div>
                    <span>Ample Parking Available</span>
                  </li>
                  <li className="flex items-center space-x-3 text-[#A1A1AA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347]"></div>
                    <span>Special Menu Items (Lazeez Paneer)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5">
              <h4 className="text-white font-bold text-xl mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <button className="w-14 h-14 rounded-xl bg-[#121212] border border-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FF6A00] hover:to-[#FFB347] hover:border-transparent transition-all duration-500 group hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:scale-110">
                  <div className="text-[#FF6A00] group-hover:text-black transition-colors">
                    <InstagramIcon />
                  </div>
                </button>
                <button className="w-14 h-14 rounded-xl bg-[#121212] border border-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FF6A00] hover:to-[#FFB347] hover:border-transparent transition-all duration-500 group hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:scale-110">
                  <div className="text-[#FF6A00] group-hover:text-black transition-colors">
                    <FacebookIcon />
                  </div>
                </button>
                <button className="w-14 h-14 rounded-xl bg-[#121212] border border-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FF6A00] hover:to-[#FFB347] hover:border-transparent transition-all duration-500 group hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:scale-110">
                  <div className="text-[#FF6A00] group-hover:text-black transition-colors">
                    <TwitterIcon />
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column - Reservation Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              
              {/* Fire Glow Effect on Form */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF6A00] opacity-20 blur-3xl rounded-full"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2">Make a Reservation</h3>
                <p className="text-[#A1A1AA] mb-8">Reserve your table for an unforgettable experience</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-[#121212] border ${focused === 'name' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:outline-none transition-all duration-300`}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-[#121212] border ${focused === 'email' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:outline-none transition-all duration-300`}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-[#121212] border ${focused === 'phone' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:outline-none transition-all duration-300`}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  {/* Date, Time & Guests */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('date')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-[#121212] border ${focused === 'date' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white focus:outline-none transition-all duration-300`}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Time *</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('time')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-[#121212] border ${focused === 'time' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white focus:outline-none transition-all duration-300`}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Guests *</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('guests')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-[#121212] border ${focused === 'guests' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white focus:outline-none transition-all duration-300`}
                        required
                      >
                        <option value="">Select</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6+">6+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[#A1A1AA] text-sm mb-2 font-medium">Special Requests</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows="4"
                      className={`w-full bg-[#121212] border ${focused === 'message' ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:outline-none transition-all duration-300 resize-none`}
                      placeholder="Any special requirements or dietary preferences..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Confirm Reservation</span>
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-center text-[#6B7280] text-xs mt-4">
                    By submitting this form, you agree to our reservation policy
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6A00] opacity-10 blur-3xl rounded-full"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-6">Find Us</h3>
            <div className="bg-[#121212] rounded-2xl overflow-hidden h-96 border border-white/5 flex items-center justify-center">
              {/* Replace with actual Google Maps embed */}
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FF6A00] mx-auto mb-4" />
                <p className="text-[#A1A1AA] mb-2">1st Floor, Mashruwala Complex</p>
                <p className="text-[#A1A1AA] mb-4">Opp. New Circuit House, Patan-Chanasma Highway</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#FF6A00] hover:text-[#FFB347] transition-colors font-medium"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative">
            <h3 className="text-4xl font-bold text-black mb-4">Ready for an Extraordinary Experience?</h3>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether it's a romantic dinner, family celebration, or corporate event, 
              Floris Restaurant & Banquet is your destination for exceptional moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1A1A1A] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.5)]">
                Call: +91 98765 43210
              </button>
              <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlorisContact;
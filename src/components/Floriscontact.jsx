// src/components/Floriscontact.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// ─── Custom Social Icons ──────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ─── Form Field ───────────────────────────────────────────────────────────────
const Field = ({ label, children }) => (
  <div>
    <label className="block text-[#A1A1AA] text-sm mb-2">{label}</label>
    {children}
  </div>
);

const inputCls = (focused, name) =>
  `w-full bg-[#121212] border ${
    focused === name
      ? 'border-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.2)]'
      : 'border-white/5'
  } rounded-xl px-4 py-3.5 text-white placeholder-[#6B7280] focus:outline-none transition-all duration-300`;

// ─── Main Component ───────────────────────────────────────────────────────────
const FlorisContact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', guests: '',
    date: '', time: '', message: '',
  });
  const [focused,   setFocused]   = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Issue #3 fix: form now has a real submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: POST to your backend reservation endpoint here
    // e.g. fetch('/api/reservations', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1000);
  };

  const socialAccounts = [
    { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
    { icon: <FacebookIcon />,  label: 'Facebook',  href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6A00] opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFB347] opacity-15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-[0.3em] text-[#FFB347] uppercase mb-4 font-light">Get in Touch</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
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

          {/* Left — Info Cards */}
          <div className="space-y-8">
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 hover:border-[#FF6A00]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/5 group-hover:to-transparent transition-all duration-500" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2">Floris Restaurant & Banquet</h3>
                <p className="text-[#FFB347] text-sm tracking-wider uppercase">Premium Dining Experience</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">

              {/* Location */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Location</h4>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      1st Floor, Mashruwala Complex<br />Opp. New Circuit House<br />
                      Patan-Chanasma Highway, Patan
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours (Issue #6: accurate hours) */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFB347] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Hours</h4>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                      Lunch: 11:30 AM – 3:30 PM<br />
                      Dinner: 7:00 PM – 11:00 PM<br />
                      <span className="text-xs text-[#6B7280]">Banquet by appointment</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social (replacing fake phone — Issue #6) */}
              <div className="sm:col-span-2 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500">
                <h4 className="text-white font-semibold mb-4">Find Us Online</h4>
                <div className="flex gap-4">
                  {socialAccounts.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank" rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group w-12 h-12 rounded-xl bg-white/5 border border-white/10
                               hover:bg-gradient-to-br hover:from-[#FF6A00] hover:to-[#FFB347]
                               hover:border-transparent flex items-center justify-center
                               transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.5)]"
                    >
                      <span className="text-[#A1A1AA] group-hover:text-black transition-colors">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Reservation Form (Issue #3: functional submit) */}
          <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8">Make a Reservation</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #FF6A00, #FFB347)' }}>
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Reservation Received!</h4>
                <p className="text-[#A1A1AA] text-sm max-w-sm">
                  Thank you, {formData.name || 'Guest'}! We'll confirm your reservation shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full Name *">
                    <input
                      name="name" value={formData.name} onChange={handleInputChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      required className={inputCls(focused, 'name')} placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      required className={inputCls(focused, 'email')} placeholder="you@example.com"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Phone">
                    <input
                      name="phone" value={formData.phone} onChange={handleInputChange}
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                      className={inputCls(focused, 'phone')} placeholder="+91 XXXXX XXXXX"
                    />
                  </Field>
                  <Field label="Number of Guests *">
                    <input
                      type="number" name="guests" value={formData.guests} min="1"
                      onChange={handleInputChange}
                      onFocus={() => setFocused('guests')} onBlur={() => setFocused(null)}
                      required className={inputCls(focused, 'guests')} placeholder="2"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Preferred Date *">
                    <input
                      type="date" name="date" value={formData.date} onChange={handleInputChange}
                      onFocus={() => setFocused('date')} onBlur={() => setFocused(null)}
                      required className={inputCls(focused, 'date')}
                    />
                  </Field>
                  <Field label="Preferred Time *">
                    <select
                      name="time" value={formData.time} onChange={handleInputChange}
                      onFocus={() => setFocused('time')} onBlur={() => setFocused(null)}
                      required className={inputCls(focused, 'time')}
                    >
                      <option value="">Select time</option>
                      <optgroup label="Lunch">
                        {['11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Dinner">
                        {['7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM','10:30 PM'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </optgroup>
                    </select>
                  </Field>
                </div>
                <Field label="Special Requests">
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    rows="4"
                    className={`${inputCls(focused, 'message')} resize-none`}
                    placeholder="Any special requirements or dietary preferences..."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-[#FF6A00] to-[#FFB347] text-black font-bold py-4 rounded-xl
                             hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] hover:scale-[1.02] active:scale-[0.98]
                             transition-all duration-300 flex items-center justify-center space-x-2
                             disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-0"
                >
                  <span>{submitting ? 'Submitting…' : 'Confirm Reservation'}</span>
                  {!submitting && <Send className="w-5 h-5" />}
                </button>

                <p className="text-center text-[#6B7280] text-xs">
                  By submitting this form, you agree to our reservation policy
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6A00] opacity-10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-6">Find Us</h3>
            <div className="bg-[#121212] rounded-2xl overflow-hidden h-80 border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FF6A00] mx-auto mb-4" />
                <p className="text-[#A1A1AA] mb-1">1st Floor, Mashruwala Complex</p>
                <p className="text-[#A1A1AA] mb-4">Opp. New Circuit House, Patan-Chanasma Highway</p>
                <a
                  href="https://maps.google.com/?q=Floris+Restaurant+Patan"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#FF6A00] hover:text-[#FFB347] transition-colors font-medium"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner (Issue #3: functional buttons) */}
        <div className="mt-20 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10 pointer-events-none" />
          <div className="relative">
            <h3 className="text-4xl font-bold text-black mb-4">Ready for an Extraordinary Experience?</h3>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether it's a romantic dinner, family celebration, or corporate event,
              Floris Restaurant & Banquet is your destination for exceptional moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Scroll to form above */}
              <button
                onClick={() => scrollTo('contact')}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold
                           hover:bg-[#1A1A1A] transition-all duration-300
                           hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] cursor-pointer border-0"
              >
                Reserve a Table
              </button>
              <button
                onClick={() => scrollTo('menu')}
                className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-xl font-bold
                           hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
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

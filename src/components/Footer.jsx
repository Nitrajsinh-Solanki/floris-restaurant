import React from 'react';

const Footer = () => {
  const menuCategories = [
    { name: 'Main Course', icon: '🍛' },
    { name: 'Chinese', icon: '🥡' },
    { name: 'Sizzlers', icon: '🔥' },
    { name: 'Tandoori', icon: '🫓' },
    { name: 'Desserts', icon: '🍨' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Banquet Hall', href: '#banquet' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-[#0A0A0A] overflow-hidden">
      
      {/* CTA Banner Section */}
      <div className="relative bg-gradient-to-r from-[#FF6A00] to-[#FFB347] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Ready for an Extraordinary Experience?
            </h2>
            <p className="text-black/80 max-w-2xl mx-auto text-sm sm:text-base">
              Whether it's a romantic dinner, family celebration, or corporate event, 
              Floris Restaurant & Banquet is your destination for exceptional moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919876543210"
                className="px-8 py-4 bg-black text-white font-bold rounded-full
                         hover:bg-black/90 transition-all duration-300
                         shadow-[0_0_25px_rgba(0,0,0,0.3)]
                         hover:scale-105"
              >
                Call: +91 98765 43210
              </a>
              <a 
                href="#menu"
                className="px-8 py-4 bg-white text-black font-bold rounded-full
                         hover:bg-white/90 transition-all duration-300
                         hover:scale-105"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#FF6A00]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-[#FFB347]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
            
            {/* Column 1 - About */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] blur-xl opacity-40" />
                  <h2 className="relative text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent">
                    FLORIS
                  </h2>
                </div>
                <p className="text-[#A1A1AA] text-sm tracking-wider uppercase">
                  Restaurant & Banquet
                </p>
              </div>
              
              <p className="text-[#A1A1AA] leading-relaxed text-sm">
                Experience premium dining with aesthetic lighting, signature mojitos, 
                and exquisite cuisine at Patan's finest restaurant and banquet venue.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group w-10 h-10 rounded-full bg-white/5 border border-white/10
                             hover:bg-gradient-to-r hover:from-[#FF6A00] hover:to-[#FFB347]
                             hover:border-transparent flex items-center justify-center
                             transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.5)]"
                    aria-label={social.name}
                  >
                    <span className="text-[#A1A1AA] group-hover:text-black transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg relative inline-block pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]" />
              </h3>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-[#A1A1AA] hover:text-[#FFB347] transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Menu Categories */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg relative inline-block pb-3">
                Our Menu
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]" />
              </h3>
              
              <div className="space-y-3">
                {menuCategories.map((category, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10
                             hover:bg-white/10 hover:border-[#FF6A00]/30 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="text-sm text-[#A1A1AA] group-hover:text-[#FFB347] transition-colors">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg relative inline-block pb-3">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FFB347]" />
              </h3>
              
              <div className="space-y-4">
                
                {/* Location */}
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

                {/* Phone */}
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
                    <a href="tel:+919876543210" 
                       className="text-[#A1A1AA] hover:text-[#FFB347] text-sm transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Hours */}
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
                    <p className="text-[#A1A1AA] text-sm">
                      Open 24/7<br />
                      <span className="text-xs">Banquet by appointment</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="py-12 border-b border-white/10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Join Our <span className="bg-gradient-to-r from-[#FF6A00] to-[#FFB347] bg-clip-text text-transparent">Fire Club</span>
                </h3>
                <p className="text-[#A1A1AA] text-sm">
                  Get exclusive offers, menu updates, and special event invitations
                </p>
              </div>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full
                           text-white placeholder-[#6B7280] focus:outline-none focus:border-[#FF6A00]/50 
                           focus:bg-white/10 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FFB347] text-black font-bold 
                           rounded-full hover:scale-105 active:scale-95 transition-all
                           shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)]
                           whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm text-center md:text-left">
              © 2024 Floris Restaurant & Banquet. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-[#A1A1AA] hover:text-[#FFB347] transition-colors">Privacy Policy</a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-[#A1A1AA] hover:text-[#FFB347] transition-colors">Terms of Service</a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-[#A1A1AA] hover:text-[#FFB347] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
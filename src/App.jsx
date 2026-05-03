import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Banquet', href: '#banquet' },
  { label: 'Contact', href: '#contact' },
]

const MENU_DATA = {
  'Paneer Specials': [
    { name: 'Lazeez Paneer',   price: '₹280', desc: 'Our signature rich, creamy paneer in a luxurious makhani base',            isVeg: true, tag: 'Signature' },
    { name: 'Paneer Tikka',    price: '₹240', desc: 'Tandoor-charred paneer with bell peppers & fresh spices',                   isVeg: true },
    { name: 'Kadai Paneer',    price: '₹220', desc: 'Tossed in aromatic kadai masala with tomato & capsicum',                    isVeg: true },
    { name: 'Shahi Paneer',    price: '₹250', desc: 'Royal gravy with cashew paste, saffron & cream',                           isVeg: true },
  ],
  'Chinese': [
    { name: 'Veg Manchurian',  price: '₹180', desc: 'Crispy veg dumplings in tangy Indo-Chinese brown sauce',                   isVeg: true },
    { name: 'Chilli Paneer',   price: '₹210', desc: 'Wok-tossed paneer with vibrant peppers & soy glaze',                      isVeg: true },
    { name: 'Hakka Noodles',   price: '₹160', desc: 'Classic stir-fried noodles with fresh vegetables',                         isVeg: true },
    { name: 'Fried Rice',      price: '₹150', desc: 'Fragrant basmati tossed with vegetables & sauces',                         isVeg: true },
  ],
  'Beverages': [
    { name: 'Mojito',          price: '₹120', desc: 'Fresh mint, lime, soda — our most loved refreshing drink',                 isVeg: true, tag: 'Most Loved' },
    { name: 'Virgin Pina Colada', price: '₹130', desc: 'Tropical coconut & pineapple blend — creamy delight',                  isVeg: true },
    { name: 'Cold Coffee',     price: '₹100', desc: 'Rich espresso blended with chilled milk & ice cream',                      isVeg: true },
    { name: 'Fresh Juice',     price: '₹80',  desc: 'Seasonal fruits, cold-pressed fresh daily',                                isVeg: true },
  ],
  'Desserts': [
    { name: 'Gulab Jamun',     price: '₹90',  desc: 'Soft dumplings soaked in rose-scented sugar syrup',                       isVeg: true },
    { name: 'Kulfi Falooda',   price: '₹140', desc: 'Traditional kulfi with vermicelli, rose syrup & basil seeds',              isVeg: true },
    { name: 'Brownie + Ice Cream', price: '₹160', desc: 'Warm fudge brownie paired with cool vanilla ice cream',               isVeg: true },
    { name: 'Phirni',          price: '₹110', desc: 'Chilled rice pudding with cardamom & pistachios',                          isVeg: true },
  ],
  'Mains': [
    { name: 'Dal Makhani',     price: '₹190', desc: 'Slow-cooked black lentils in tomato butter sauce',                         isVeg: true },
    { name: 'Veg Biryani',     price: '₹210', desc: 'Fragrant long-grain basmati with garden vegetables & whole spices',        isVeg: true },
    { name: 'Butter Naan',     price: '₹50',  desc: 'Tandoor-baked, brushed with farm butter',                                  isVeg: true },
    { name: 'Pav Bhaji',       price: '₹130', desc: 'Mumbai-style spiced vegetable mash with butter pav',                      isVeg: true },
  ],
}

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85', alt: 'Elegant dining interior',   cls: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85', alt: 'Premium lighting ambiance', cls: '' },
  { src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=85',    alt: 'Signature cocktail',        cls: '' },
  { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=85', alt: "Chef's creation",           cls: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85',    alt: 'Couple dining',             cls: '' },
  { src: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?w=600&q=85', alt: 'Group celebration',         cls: '' },
]

const WHY_CARDS = [
  { icon: '🍽️', title: 'Premium Dining Experience',    desc: 'Elegant interiors with premium lighting, plush seating, and a warm ambiance that transforms every meal into an occasion worth remembering.' },
  { icon: '🎉', title: 'Perfect for Celebrations',     desc: 'From intimate birthdays to large family gatherings — our venue and team are dedicated to making your special moments truly unforgettable.' },
  { icon: '🚗', title: 'Ample Parking',                desc: 'Arrive stress-free with our spacious, dedicated parking area — convenience is part of the Floris experience from the very first moment.' },
  { icon: '🌟', title: 'Wide Variety Menu',            desc: 'Explore a curated selection of Indian, Chinese, beverages, and desserts — including our signature Lazeez Paneer and beloved Mojitos.' },
]

const HIGHLIGHTS = [
  { emoji: '⭐', title: 'Lazeez Paneer',   sub: 'Signature Dish',       desc: 'Our crown jewel — a rich, velvety paneer preparation that keeps guests coming back for more. A taste you will not find anywhere else in Patan.' },
  { emoji: '🍹', title: 'Signature Mojitos', sub: 'Most Loved Beverage', desc: 'Refreshing mint-lime mojitos handcrafted to perfection — the perfect companion to your dining experience at Floris.' },
  { emoji: '🎉', title: 'Banquet Events',  sub: 'Celebrations & Gatherings', desc: 'Transform your special occasions into cherished memories with our beautifully appointed banquet space and dedicated event team.' },
]

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL ANIMATION HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up, .fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ─────────────────────────────────────────────────────────────────────────────
// SMOOTH SCROLL HELPER
// ─────────────────────────────────────────────────────────────────────────────
function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = href => { setMenuOpen(false); scrollTo(href) }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}
           className="flex items-center justify-between" style2={{ height: '80px' }}>
        {/* Force height via inline */}
        <div className="flex items-center justify-between w-full" style={{ height: '80px' }}>

          {/* Logo */}
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('#home') }}
             className="flex items-center gap-3 no-underline group">
            <div style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(245,158,11,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s' }}>
              <span className="font-display" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 700 }}>F</span>
            </div>
            <div>
              <div className="font-display" style={{ color: '#fff', fontSize: 18, fontWeight: 600, letterSpacing: '0.03em', lineHeight: 1.1 }}>Floris</div>
              <div style={{ fontSize: 9, color: 'rgba(245,158,11,0.7)', textTransform: 'uppercase', letterSpacing: '0.22em', lineHeight: 1 }}>Restaurant & Banquet</div>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <button onClick={() => scrollTo(l.href)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 14, letterSpacing: '0.04em', transition: 'color 0.2s', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+91XXXXXXXXXX" className="btn-outline" style={{ fontSize: 12, padding: '0.6rem 1.2rem' }}>📞 Call Now</a>
            <button onClick={() => scrollTo('#contact')} className="btn-gold" style={{ fontSize: 12, padding: '0.6rem 1.2rem' }}>
              Book Table
            </button>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span className="ham-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span className="ham-line" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="ham-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div style={{ padding: '1rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {NAV_LINKS.map(l => (
            <button key={l.href} onClick={() => close(l.href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--text-muted)', fontSize: 14, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em', padding: '4px 0', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{l.label}</button>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline" style={{ fontSize: 13, textAlign: 'center' }}>📞 Call Now</a>
            <button onClick={() => close('#contact')} className="btn-gold" style={{ fontSize: 13 }}>Book a Table</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="hero-bg"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1.5rem', position: 'relative', overflow: 'hidden' }}>

      {/* Gold radial glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(245,158,11,0.08), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, width: '100%', margin: '0 auto', paddingTop: '8rem', paddingBottom: '7rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>

        <div className="highlight-pill fade-up">⭐ Patan's Premier Dining Experience</div>

        <h1 className="font-display fade-up"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, margin: 0, transitionDelay: '0.1s' }}>
          Floris <span className="shimmer-text font-display" style={{ fontStyle: 'italic' }}>Restaurant</span>
          <br />& Banquet
        </h1>

        <p className="font-cormorant fade-up"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0, transitionDelay: '0.18s' }}>
          Experience Premium Dining & Celebration in Patan
        </p>

        <div className="gold-divider fade-in" style={{ transitionDelay: '0.28s' }} />

        <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center', transitionDelay: '0.33s' }}>
          {['🍽️ Family Dining', '🎉 Event Hosting', '🚗 Ample Parking', '⭐ Signature Menu'].map(f => (
            <span key={f} style={{ padding: '0.25rem 0.875rem', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', fontSize: 12, color: 'var(--text-muted)' }}>{f}</span>
          ))}
        </div>

        <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem', transitionDelay: '0.4s' }}>
          <button onClick={() => scrollTo('#menu')} className="btn-gold">🍽️ View Menu</button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline">📅 Book a Table</button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.45 }}>
          <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll to explore</span>
          <div className="float-anim" style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 384, height: 384, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.04), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* Image side */}
        <div className="fade-in" style={{ position: 'relative' }}>
          <div style={{ borderRadius: 4, overflow: 'hidden', height: 480 }}>
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=85" alt="Floris interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Badge */}
          <div className="float-anim" style={{ position: 'absolute', bottom: -24, right: -16, background: 'var(--accent)', color: '#0F172A', padding: '1.25rem 1.5rem', borderRadius: 4, boxShadow: '0 20px 60px rgba(245,158,11,0.3)' }}>
            <div className="font-display" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>5+</div>
            <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>Years of Excellence</div>
          </div>
          {/* Small corner image */}
          <div style={{ position: 'absolute', top: -20, left: -16, width: 140, height: 140, borderRadius: 4, overflow: 'hidden', border: '2px solid rgba(245,158,11,0.3)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}>
            <img src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=85" alt="Fine dining"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Text side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="fade-up">
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Our Story</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: 0 }}>
              Where Every Meal<br /><span className="gold-text" style={{ fontStyle: 'italic' }}>Becomes a Memory</span>
            </h2>
          </div>

          <div className="gold-divider gold-divider-left fade-in" />

          <p className="fade-up" style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: 17, transitionDelay: '0.1s' }}>
            Floris Restaurant & Banquet is Patan's most cherished modern dining destination — crafted for those who appreciate extraordinary food in a setting that truly inspires. Nestled in the Mashruwala Complex, every corner of our space has been designed to elevate your experience.
          </p>
          <p className="fade-up" style={{ color: 'var(--text-dim)', lineHeight: 1.8, transitionDelay: '0.15s' }}>
            From intimate family dinners to grand celebrations, our premium lighting, comfortable seating, and warm hospitality create the perfect canvas for your most cherished moments.
          </p>

          {/* Stats */}
          <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', transitionDelay: '0.2s' }}>
            {[['50+','Menu Items'],['200+','Events Hosted'],['4.8★','Guest Rating']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'center', padding: '1rem', border: '1px solid rgba(245,158,11,0.12)', borderRadius: 4, background: 'rgba(245,158,11,0.04)' }}>
                <div className="font-display" style={{ fontSize: 24, fontWeight: 700, color: 'var(--accent)' }}>{n}</div>
                <div style={{ fontSize: 10, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Address */}
          <div className="fade-up" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', transitionDelay: '0.25s' }}>
            <span style={{ color: 'var(--accent)', fontSize: 18, marginTop: 2 }}>📍</span>
            <span style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7 }}>
              Mashruwala Complex, 1st Floor, Opp. New Circuit House,<br />Patan-Chanasma Highway, Patan
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WHY US
// ─────────────────────────────────────────────────────────────────────────────
function WhyUs() {
  return (
    <section style={{ padding: '6rem 1.5rem', background: 'var(--bg-card)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow fade-up" style={{ marginBottom: 12 }}>Why Floris</div>
          <h2 className="font-display fade-up" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', margin: 0, transitionDelay: '0.08s' }}>
            The Floris <span className="gold-text" style={{ fontStyle: 'italic' }}>Difference</span>
          </h2>
          <div className="gold-divider fade-in" style={{ marginTop: '1.5rem', transitionDelay: '0.18s' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {WHY_CARDS.map((c, i) => (
            <div key={c.title} className="card-luxury fade-up"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                {c.icon}
              </div>
              <h3 className="font-display" style={{ color: '#fff', fontSize: 18, fontWeight: 600, margin: 0 }}>{c.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              <div style={{ width: 32, height: 1.5, background: 'rgba(245,158,11,0.4)', marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MENU
// ─────────────────────────────────────────────────────────────────────────────
function Menu() {
  const cats = Object.keys(MENU_DATA)
  const [active, setActive] = useState(cats[0])

  return (
    <section id="menu" style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow fade-up" style={{ marginBottom: 12 }}>Our Offerings</div>
          <h2 className="font-display fade-up" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', margin: 0, transitionDelay: '0.08s' }}>
            Curated <span className="gold-text" style={{ fontStyle: 'italic' }}>Menu</span>
          </h2>
          <p className="fade-up" style={{ color: 'var(--text-dim)', marginTop: '1rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', fontSize: 15, lineHeight: 1.7, transitionDelay: '0.14s' }}>
            Every dish is crafted with passion, using the finest ingredients to deliver an experience that transcends a regular meal.
          </p>
          <div className="gold-divider fade-in" style={{ marginTop: '1.5rem', transitionDelay: '0.2s' }} />
        </div>

        {/* Tabs */}
        <div className="fade-up" style={{ display: 'flex', overflowX: 'auto', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '2.5rem', gap: 2, transitionDelay: '0.25s' }}>
          {cats.map(c => (
            <button key={c} className={`tab-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>

        {/* Items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {MENU_DATA[active].map((item, i) => (
            <div key={item.name} className="menu-card fade-up" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flex: 1, minWidth: 0 }}>
                <div className="veg-dot" style={{ marginTop: 5 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="font-display" style={{ color: '#fff', fontWeight: 500, fontSize: 14 }}>{item.name}</span>
                    {item.tag && (
                      <span style={{ fontSize: 9, padding: '2px 8px', background: 'rgba(245,158,11,0.12)', color: 'var(--accent)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.tag}</span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-dim)', fontSize: 12, marginTop: 4, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
              <span className="font-display" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 16, flexShrink: 0 }}>{item.price}</span>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: 13, marginBottom: '1rem' }}>Full menu available at the restaurant</p>
          <a href="tel:+91XXXXXXXXXX" className="btn-gold">📞 Call for Full Menu</a>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────────────────────────────────────
function Gallery() {
  return (
    <section id="gallery" style={{ padding: '6rem 1.5rem', background: 'var(--bg-card)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow fade-up" style={{ marginBottom: 12 }}>Atmosphere</div>
          <h2 className="font-display fade-up" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', margin: 0, transitionDelay: '0.08s' }}>
            A Glimpse of <span className="gold-text" style={{ fontStyle: 'italic' }}>Floris</span>
          </h2>
          <div className="gold-divider fade-in" style={{ marginTop: '1.5rem', transitionDelay: '0.18s' }} />
        </div>

        <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '200px', gap: '0.75rem', transitionDelay: '0.2s' }}>
          {GALLERY.map(img => (
            <div key={img.alt} className={`gallery-img ${img.cls}`}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HIGHLIGHTS
// ─────────────────────────────────────────────────────────────────────────────
function Highlights() {
  return (
    <section style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow fade-up" style={{ marginBottom: 12 }}>What We Are Known For</div>
          <h2 className="font-display fade-up" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', margin: 0, transitionDelay: '0.08s' }}>
            Special <span className="gold-text" style={{ fontStyle: 'italic' }}>Highlights</span>
          </h2>
          <div className="gold-divider fade-in" style={{ marginTop: '1.5rem', transitionDelay: '0.18s' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {HIGHLIGHTS.map((h, i) => (
            <div key={h.title} className="card-luxury fade-up"
              style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', transitionDelay: `${i * 0.12}s` }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(255,255,255,0.06)' }}>
                {h.emoji}
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>{h.sub}</div>
                <h3 className="font-display" style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>{h.title}</h3>
              </div>
              <div className="gold-divider" />
              <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BANQUET
// ─────────────────────────────────────────────────────────────────────────────
function Banquet() {
  return (
    <section id="banquet" style={{ padding: '7rem 1.5rem', background: 'var(--bg-card)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(245,158,11,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Image */}
        <div className="fade-in" style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', height: 480 }}>
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85" alt="Banquet hall"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Birthdays','Anniversaries','Corporate Events','Family Gatherings'].map(t => (
              <span key={t} style={{ padding: '4px 12px', fontSize: 12, background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.3)', color: '#FCD34D', borderRadius: 100 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="fade-up">
            <div className="section-eyebrow" style={{ marginBottom: 12 }}>Banquet & Events</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: 0 }}>
              Host Your Most<br /><span className="gold-text" style={{ fontStyle: 'italic' }}>Cherished Moments</span>
            </h2>
          </div>
          <div className="gold-divider gold-divider-left fade-in" />
          <p className="fade-up" style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: 16, transitionDelay: '0.1s' }}>
            Our beautifully appointed banquet facility is the perfect backdrop for birthdays, family gatherings, social celebrations, and corporate events. With dedicated event coordination and impeccable service — Floris ensures every moment is flawless.
          </p>
          <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', transitionDelay: '0.15s' }}>
            {[['👥','Large Capacity','Accommodates groups of all sizes'],['🎨','Décor Support','Custom decoration arrangements'],['🍽️','Banquet Menu','Dedicated catering options'],['📸','Photo-worthy','Instagram-perfect settings']].map(([ico,label,desc]) => (
              <div key={label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '1rem', borderRadius: 4, background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)' }}>
                <span style={{ fontSize: 20 }}>{ico}</span>
                <div>
                  <div style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>{label}</div>
                  <div style={{ color: 'var(--text-dim)', fontSize: 12, marginTop: 2 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', transitionDelay: '0.2s' }}>
            <a href="tel:+91XXXXXXXXXX" className="btn-gold">🎉 Book Your Event</a>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline">📞 Enquire Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-eyebrow fade-up" style={{ marginBottom: 12 }}>Find Us</div>
          <h2 className="font-display fade-up" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', margin: 0, transitionDelay: '0.08s' }}>
            Visit <span className="gold-text" style={{ fontStyle: 'italic' }}>Floris</span>
          </h2>
          <div className="gold-divider fade-in" style={{ marginTop: '1.5rem', transitionDelay: '0.18s' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '📍', label: 'Our Location', val: 'Mashruwala Complex, 1st Floor, Opp. New Circuit House, Patan-Chanasma Highway, Patan', href: null },
              { icon: '📞', label: 'Reservations',  val: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
              { icon: '🕐', label: 'Hours',          val: 'Daily: 11:00 AM – 11:00 PM', href: null },
            ].map((info, i) => (
              <div key={info.label} className="card-luxury fade-up" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', transitionDelay: `${i * 0.1}s` }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>{info.icon}</div>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 6 }}>{info.label}</div>
                  {info.href
                    ? <a href={info.href} style={{ color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>{info.val}</a>
                    : <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{info.val}</p>}
                </div>
              </div>
            ))}
            <div className="fade-up" style={{ display: 'flex', gap: '0.75rem', transitionDelay: '0.3s' }}>
              <a href="tel:+91XXXXXXXXXX" className="btn-gold" style={{ flex: 1, fontSize: 13, padding: '0.75rem 1rem' }}>📞 Call Now</a>
              <a href="https://maps.google.com/?q=Patan+Gujarat" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, fontSize: 13, padding: '0.75rem 1rem' }}>🗺️ Directions</a>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in" style={{ borderRadius: 4, overflow: 'hidden', height: 420, border: '1px solid rgba(245,158,11,0.15)', transitionDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58724.88!2d72.1266!3d23.8498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c425d:0x5e7b8e3b5f6a8c8!2sPatan%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.7) brightness(0.85)' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Floris Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--bg-card)', borderTop: '1px solid rgba(245,158,11,0.1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(245,158,11,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-display" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 700 }}>F</span>
              </div>
              <div>
                <div className="font-display" style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>Floris</div>
                <div style={{ fontSize: 9, color: 'rgba(245,158,11,0.7)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Restaurant & Banquet</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.75, maxWidth: 260, margin: '0 0 1.25rem' }}>
              Patan's premier dining and celebration destination — where every visit becomes a cherished memory.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {[['📘','Facebook'],['📸','Instagram'],['🐦','Twitter']].map(([ico,name]) => (
                <a key={name} href="#" aria-label={name}
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, textDecoration: 'none', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'; e.currentTarget.style.background = 'rgba(245,158,11,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'transparent' }}>
                  {ico}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.25rem', marginTop: 0 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)', fontSize: 14, fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
                  >{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.25rem', marginTop: 0 }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { ico: '📍', val: 'Mashruwala Complex, 1st Floor, Patan-Chanasma Highway, Patan' },
                { ico: '📞', val: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
                { ico: '🕐', val: 'Daily: 11 AM – 11 PM' },
              ].map(({ ico, val, href }) => (
                <li key={val} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontSize: 14, marginTop: 2 }}>{ico}</span>
                  {href
                    ? <a href={href} style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.65, textDecoration: 'none' }}>{val}</a>
                    : <span style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.65 }}>{val}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'var(--text-dim)', fontSize: 12 }}>© {year} Floris Restaurant & Banquet, Patan. All rights reserved.</span>
          <span style={{ color: 'rgba(245,158,11,0.4)', fontSize: 12 }}>Crafted with ♥ for great dining</span>
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Menu />
        <Gallery />
        <Highlights />
        <Banquet />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
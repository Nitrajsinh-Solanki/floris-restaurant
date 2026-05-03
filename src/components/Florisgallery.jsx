// src/components/Florisgallery.jsx

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Gallery Images with SEO metadata ────────────────────────────────────────
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/ddtavar5t/image/upload/v1777830096/Screenshot_2026-05-03_164926_hvuyoa.png",
    alt: "Floris Restaurant Patan - Elegant dining hall with warm amber lighting and lush floral decor",
    title: "Garden View Dining",
    caption: "Where every table is dressed in nature's finest",
    tag: "Ambience",
    aspect: "landscape",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/ddtavar5t/image/upload/v1777830094/Screenshot_2026-05-03_164517_tmwoww.png",
    alt: "Floris Restaurant Patan - Reception area with bonsai tree and orange crystal chandeliers",
    title: "The Grand Foyer",
    caption: "A welcome that sets the tone for the evening",
    tag: "Decor",
    aspect: "landscape",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/ddtavar5t/image/upload/v1777830095/Screenshot_2026-05-03_164726_m6cgr9.png",
    alt: "Floris Restaurant Patan - Night view of full dining hall with teal booths and signature ceiling art",
    title: "Signature Ceiling Installation",
    caption: "Handcrafted amber crystal drops — the crown jewel",
    tag: "Interior",
    aspect: "landscape",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/ddtavar5t/image/upload/v1777830095/Screenshot_2026-05-03_164409_nqwsju.png",
    alt: "Floris Restaurant Patan - Luxury booth seating with designer ceiling and ambient lighting",
    title: "Luxury Booth Seating",
    caption: "Premium comfort in every private booth",
    tag: "Seating",
    aspect: "landscape",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/ddtavar5t/image/upload/v1777830096/Screenshot_2026-05-03_165318_gcfdqt.png",
    alt: "Floris Restaurant Patan Banquet Hall - Birthday celebration setup with balloon arch",
    title: "Banquet & Events",
    caption: "Your celebrations, elevated to art",
    tag: "Events",
    aspect: "portrait",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/ddtavar5t/image/upload/v1777830095/Screenshot_2026-05-03_171249_parszq.png",
    alt: "Floris Restaurant Patan - Full house dining experience with guests and live service",
    title: "Full House Experience",
    caption: "The heartbeat of Floris — every seat alive",
    tag: "Experience",
    aspect: "landscape",
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(GALLERY_IMAGES.map(img => img.tag)))];

// ─── Inline Styles & Keyframes ────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080808;
    --bg2: #0f0f0f;
    --surface: #161616;
    --surface2: #1e1e1e;
    --border: rgba(255,255,255,0.06);
    --fire: #FF6A00;
    --fire2: #FFB347;
    --ember: #CC5500;
    --text: #F5F5F0;
    --muted: #9A9A94;
    --dim: #5A5A55;
    --fire-grad: linear-gradient(110deg, #FF6A00 0%, #FFB347 100%);
    --glow-sm: 0 0 16px rgba(255,106,0,0.25);
    --glow-md: 0 0 32px rgba(255,106,0,0.35);
    --glow-lg: 0 0 60px rgba(255,106,0,0.4);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes glowPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes orbitGlow {
    0% { transform: rotate(0deg) translateX(120px) rotate(0deg); opacity: 0.6; }
    100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); opacity: 0.6; }
  }

  .gallery-section {
    background: var(--bg);
    padding: 0 0 100px;
    font-family: 'Outfit', sans-serif;
    color: var(--text);
    position: relative;
    overflow: hidden;
  }

  /* Ambient background noise */
  .gallery-section::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  /* ─── Hero Header ─── */
  .gallery-hero {
    position: relative;
    padding: 80px 24px 60px;
    text-align: center;
    z-index: 1;
  }
  .gallery-hero::after {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse at center top, rgba(255,106,0,0.18) 0%, transparent 65%);
    pointer-events: none;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    animation: fadeIn 0.7s ease forwards;
  }
  .eyebrow-line {
    width: 32px; height: 1px;
    background: var(--fire-grad);
  }
  .eyebrow-text {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    background: var(--fire-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 7vw, 72px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -2px;
    color: var(--text);
    margin-bottom: 8px;
    animation: fadeIn 0.8s 0.1s ease both;
  }
  .hero-title em {
    font-style: italic;
    background: var(--fire-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    letter-spacing: 0.3px;
    max-width: 440px;
    margin: 16px auto 0;
    line-height: 1.7;
    animation: fadeIn 0.8s 0.2s ease both;
  }

  /* ─── Filter Tabs ─── */
  .filter-bar {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    padding: 0 24px;
    margin-bottom: 40px;
    position: relative;
    z-index: 1;
    animation: fadeIn 0.8s 0.3s ease both;
  }
  .filter-btn {
    padding: 9px 22px;
    border-radius: 50px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--muted);
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 0.2px;
  }
  .filter-btn:hover {
    border-color: rgba(255,106,0,0.3);
    color: var(--fire2);
    background: rgba(255,106,0,0.07);
  }
  .filter-btn.active {
    background: linear-gradient(110deg, rgba(255,106,0,0.22), rgba(255,179,71,0.12));
    border-color: rgba(255,106,0,0.45);
    color: var(--fire2);
    box-shadow: var(--glow-sm);
  }

  /* ─── Masonry Grid ─── */
  .gallery-grid {
    columns: 3;
    column-gap: 14px;
    padding: 0 24px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  @media (max-width: 900px) {
    .gallery-grid { columns: 2; }
  }
  @media (max-width: 560px) {
    .gallery-grid { columns: 1; padding: 0 16px; }
  }

  .gallery-item {
    break-inside: avoid;
    margin-bottom: 14px;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: var(--surface);
    border: 1px solid var(--border);
    animation: scaleIn 0.5s ease both;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease;
    display: block;
  }
  .gallery-item:hover {
    transform: translateY(-5px) scale(1.015);
    box-shadow: var(--glow-md), 0 20px 40px rgba(0,0,0,0.6);
    border-color: rgba(255,106,0,0.3);
  }

  .gallery-img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease;
    filter: brightness(0.88) saturate(1.05);
  }
  .gallery-item:hover .gallery-img {
    transform: scale(1.06);
    filter: brightness(1) saturate(1.15);
  }

  /* Overlay */
  .gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(5,3,1,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
  }
  .gallery-item:hover .gallery-overlay { opacity: 1; }

  .overlay-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(255,106,0,0.18);
    border: 1px solid rgba(255,106,0,0.35);
    color: var(--fire2);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 50px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 8px;
  }
  .overlay-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--text);
    line-height: 1.2;
    margin-bottom: 4px;
    transform: translateY(8px);
    transition: transform 0.3s ease 0.05s;
  }
  .gallery-item:hover .overlay-title { transform: translateY(0); }
  .overlay-caption {
    font-size: 12px;
    color: var(--muted);
    font-weight: 300;
    transform: translateY(8px);
    transition: transform 0.3s ease 0.1s;
    opacity: 0;
    transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;
  }
  .gallery-item:hover .overlay-caption {
    transform: translateY(0);
    opacity: 1;
  }

  /* Expand icon */
  .expand-icon {
    position: absolute;
    top: 14px; right: 14px;
    width: 34px; height: 34px;
    background: rgba(255,106,0,0.15);
    border: 1px solid rgba(255,106,0,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.3s ease, transform 0.3s ease;
    backdrop-filter: blur(8px);
  }
  .gallery-item:hover .expand-icon {
    opacity: 1;
    transform: scale(1);
  }

  /* ─── Lightbox ─── */
  .lightbox-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(4,2,0,0.97);
    backdrop-filter: blur(24px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease;
  }

  .lightbox-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 60px 80px;
  }
  @media (max-width: 640px) {
    .lightbox-inner { padding: 60px 16px 100px; }
  }

  .lightbox-img-wrap {
    position: relative;
    max-width: 900px;
    width: 100%;
    animation: scaleIn 0.3s cubic-bezier(0.34,1.2,0.64,1);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255,106,0,0.15), var(--glow-md), 0 32px 80px rgba(0,0,0,0.8);
  }
  .lightbox-img {
    width: 100%;
    height: auto;
    max-height: 75vh;
    object-fit: contain;
    display: block;
  }

  .lightbox-info {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(5,3,0,0.98) 0%, transparent 100%);
    padding: 40px 28px 24px;
    animation: fadeIn 0.4s 0.15s ease both;
  }
  .lightbox-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(255,106,0,0.15);
    border: 1px solid rgba(255,106,0,0.3);
    color: var(--fire2);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 50px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .lightbox-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 4px;
  }
  .lightbox-caption {
    font-size: 13px;
    color: var(--muted);
    font-weight: 300;
  }

  /* Lightbox controls */
  .lb-close {
    position: absolute;
    top: 18px; right: 18px;
    width: 44px; height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    color: var(--text);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 20px;
    transition: background 0.2s, transform 0.2s;
    z-index: 10;
    backdrop-filter: blur(8px);
  }
  .lb-close:hover { background: rgba(255,106,0,0.2); transform: rotate(90deg); }

  .lb-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 52px; height: 52px;
    border-radius: 50%;
    background: rgba(255,106,0,0.12);
    border: 1px solid rgba(255,106,0,0.3);
    color: var(--fire2);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 22px;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);
    z-index: 10;
  }
  .lb-nav:hover {
    background: rgba(255,106,0,0.25);
    box-shadow: var(--glow-sm);
    transform: translateY(-50%) scale(1.08);
  }
  .lb-prev { left: 16px; }
  .lb-next { right: 16px; }
  @media (max-width: 640px) {
    .lb-prev { left: 8px; }
    .lb-next { right: 8px; }
    .lb-nav { width: 42px; height: 42px; font-size: 18px; }
  }

  /* Counter */
  .lb-counter {
    position: absolute;
    top: 22px; left: 50%;
    transform: translateX(-50%);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    padding: 5px 16px;
    border-radius: 50px;
    font-size: 12px;
    color: var(--muted);
    letter-spacing: 1px;
  }

  /* Thumbnail strip */
  .lb-thumbs {
    position: absolute;
    bottom: 18px; left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }
  .lb-thumb {
    width: 48px; height: 36px;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    opacity: 0.5;
  }
  .lb-thumb.active {
    border-color: var(--fire);
    opacity: 1;
    box-shadow: var(--glow-sm);
  }
  .lb-thumb:hover { opacity: 0.85; }
  .lb-thumb img { width: 100%; height: 100%; object-fit: cover; }
  @media (max-width: 560px) {
    .lb-thumb { width: 38px; height: 28px; }
    .lb-thumbs { gap: 5px; bottom: 12px; }
  }

  /* ─── Stats bar ─── */
  .gallery-stats {
    display: flex;
    justify-content: center;
    gap: 0;
    max-width: 560px;
    margin: 0 auto 50px;
    position: relative;
    z-index: 1;
    animation: fadeIn 0.8s 0.4s ease both;
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    background: var(--surface);
    backdrop-filter: blur(8px);
  }
  .stat-item {
    flex: 1;
    text-align: center;
    padding: 16px 12px;
    position: relative;
  }
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0; top: 20%; bottom: 20%;
    width: 1px;
    background: var(--border);
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 900;
    background: var(--fire-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 3px;
  }
  .stat-label {
    font-size: 10px;
    color: var(--dim);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* ─── CTA Banner ─── */
  .gallery-cta {
    margin: 60px 24px 0;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(135deg, #1a0f00 0%, #120a00 50%, #1f1200 100%);
    border: 1px solid rgba(255,106,0,0.2);
    border-radius: 24px;
    padding: 40px 32px;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .gallery-cta::before {
    content: '';
    position: absolute;
    top: -40px; left: 50%;
    transform: translateX(-50%);
    width: 300px; height: 200px;
    background: radial-gradient(ellipse, rgba(255,106,0,0.15), transparent 65%);
    pointer-events: none;
  }
  .cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 4vw, 34px);
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text);
  }
  .cta-sub {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 24px;
    font-weight: 300;
    line-height: 1.6;
  }
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--fire-grad);
    color: #0a0500;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 14px;
    padding: 13px 28px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.3px;
    box-shadow: var(--glow-sm);
    text-decoration: none;
  }
  .cta-btn:hover {
    box-shadow: var(--glow-md);
    transform: scale(1.04);
  }

  /* ─── Section divider ─── */
  .fire-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 200px;
    margin: 0 auto 40px;
    position: relative;
    z-index: 1;
  }
  .divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,106,0,0.4), transparent);
  }
  .divider-gem {
    width: 8px; height: 8px;
    background: var(--fire-grad);
    border-radius: 2px;
    transform: rotate(45deg);
    box-shadow: var(--glow-sm);
    animation: glowPulse 2s ease infinite;
  }

  /* Loading skeleton */
  .img-skeleton {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--surface) 25%, var(--surface2) 50%, var(--surface) 75%);
    background-size: 200% auto;
    animation: shimmer 1.5s infinite;
  }
`;

// ─── Lightbox Component ───────────────────────────────────────────────────────
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [animDir, setAnimDir] = useState(null);

  const go = useCallback((dir) => {
    setAnimDir(dir);
    setCurrent(c => (c + dir + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const img = images[current];

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${img.title}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close */}
      <button className="lb-close" onClick={onClose} aria-label="Close lightbox">✕</button>

      {/* Counter */}
      <div className="lb-counter" aria-live="polite">{current + 1} / {images.length}</div>

      {/* Nav */}
      <button className="lb-nav lb-prev" onClick={() => go(-1)} aria-label="Previous image">‹</button>
      <button className="lb-nav lb-next" onClick={() => go(1)} aria-label="Next image">›</button>

      {/* Main image */}
      <div className="lightbox-inner">
        <div className="lightbox-img-wrap">
          <img
            key={current}
            className="lightbox-img"
            src={img.src}
            alt={img.alt}
            loading="eager"
          />
          {/* Overlay info */}
          <div className="lightbox-info">
            <div className="lightbox-tag">
              <span>✦</span> {img.tag}
            </div>
            <div className="lightbox-title">{img.title}</div>
            <div className="lightbox-caption">{img.caption}</div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="lb-thumbs" role="tablist" aria-label="Image thumbnails">
        {images.map((im, i) => (
          <button
            key={im.id}
            className={`lb-thumb${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={im.title}
          >
            <img src={im.src} alt={im.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Gallery Item ─────────────────────────────────────────────────────────────
function GalleryItem({ image, index, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className="gallery-item"
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      aria-label={`View image: ${image.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(index)}
    >
      {!loaded && <div className="img-skeleton" style={{ height: 220 }} />}
      <img
        className="gallery-img"
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      />
      <div className="gallery-overlay" aria-hidden="true">
        <div className="overlay-tag"><span>✦</span>{image.tag}</div>
        <div className="overlay-title">{image.title}</div>
        <div className="overlay-caption">{image.caption}</div>
      </div>
      <div className="expand-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB347" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Main Gallery Component ───────────────────────────────────────────────────
export default function FlorisGallery() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeTag === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.tag === activeTag);

  const openLightbox = (index) => {
    // Map filtered index back to filtered array
    setLightboxIndex(index);
  };

  return (
    <>
      <style>{css}</style>

      {/* SEO: hidden structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Floris Restaurant & Banquet - Photo Gallery",
            "description": "Explore the elegant interiors, luxury ambience, and event setups at Floris Restaurant & Banquet, Patan, Gujarat.",
            "url": "https://florisrestaurant.in/gallery",
            "image": GALLERY_IMAGES.map(img => ({
              "@type": "ImageObject",
              "url": img.src,
              "name": img.title,
              "description": img.alt,
            })),
            "provider": {
              "@type": "Restaurant",
              "name": "Floris Restaurant & Banquet",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor, Mashruwala Complex, Opp. New Circuit House",
                "addressLocality": "Patan",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />

      <section
        className="gallery-section"
        aria-label="Floris Restaurant Photo Gallery"
        itemScope
        itemType="https://schema.org/ImageGallery"
      >
        {/* Hero Header */}
        <header className="gallery-hero">
          <div className="hero-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Our Space</span>
            <div className="eyebrow-line" />
          </div>
          <h2 className="hero-title">
            Where Ambience<br /><em>Speaks Louder</em>
          </h2>
          <p className="hero-sub">
            Step inside Floris — a world of curated interiors, warm amber lighting,
            and spaces crafted for memories that last.
          </p>
        </header>

        {/* Stats Bar */}
        <div className="gallery-stats" aria-label="Restaurant highlights">
          <div className="stat-item">
            <div className="stat-num">200+</div>
            <div className="stat-label">Covers</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2</div>
            <div className="stat-label">Floors</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5★</div>
            <div className="stat-label">Ambience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Pure Veg</div>
          </div>
        </div>

        {/* Divider */}
        <div className="fire-divider" aria-hidden="true">
          <div className="divider-line" />
          <div className="divider-gem" />
          <div className="divider-line" />
        </div>

        {/* Filter Tabs */}
        <nav className="filter-bar" aria-label="Filter gallery by category" role="tablist">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              className={`filter-btn${activeTag === tag ? " active" : ""}`}
              onClick={() => setActiveTag(tag)}
              role="tab"
              aria-selected={activeTag === tag}
              aria-label={`Filter by ${tag}`}
            >
              {tag}
            </button>
          ))}
        </nav>

        {/* Masonry Gallery Grid */}
        <main
          className="gallery-grid"
          role="list"
          aria-label={`Gallery images — ${filtered.length} photo${filtered.length !== 1 ? "s" : ""}`}
        >
          {filtered.map((image, i) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={i}
              onClick={openLightbox}
            />
          ))}
        </main>

        {/* CTA Banner */}
        <div className="gallery-cta" aria-label="Book a table or event">
          <h3 className="cta-title">
            Ready to Experience <em style={{ fontStyle: "italic", background: "linear-gradient(110deg, #FF6A00, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Floris</em>?
          </h3>
          <p className="cta-sub">
            Reserve your table or plan your next celebration with us.<br />
            Birthdays, family dinners, corporate events — we do it all.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+91" className="cta-btn" aria-label="Call to reserve a table">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Reserve a Table
            </a>
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent",
                color: "#FFB347",
                fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14,
                padding: "13px 28px", borderRadius: "50px",
                border: "1px solid rgba(255,106,0,0.35)",
                cursor: "pointer", transition: "all 0.3s ease",
                letterSpacing: "0.3px"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,106,0,0.12)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(255,106,0,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}
              aria-label="Book banquet for events"
            >
              Book Banquet
            </button>
          </div>
          <p style={{ fontSize: 11, color: "var(--dim)", marginTop: 20, letterSpacing: "0.3px" }}>
            📍 1st Floor, Mashruwala Complex, Opp. New Circuit House, Patan-Chanasma Highway, Patan, Gujarat
          </p>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </section>
    </>
  );
}
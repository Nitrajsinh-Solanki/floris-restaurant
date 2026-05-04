/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // ─── Floris Brand Fire Colors ──────────────────────────────────────
      colors: {
        fire: {
          DEFAULT: '#FF6A00',
          primary:  '#FF6A00',   // main orange — was text-[#FF6A00]
          golden:   '#FFB347',   // golden orange — was text-[#FFB347]
          glow:     '#FF8C00',   // glow effects — was text-[#FF8C00]
          ember:    '#CC5500',   // dark accent — was text-[#CC5500]
        },
        floris: {
          bg:       '#0A0A0A',   // deep black background
          surface:  '#121212',   // slightly lifted
          card:     '#1A1A1A',   // card / section backgrounds
          border:   'rgba(255,255,255,0.08)',
        }
      },
      // ─── Floris Brand Gradients (usable as bg-gradient-to-r from-fire-primary etc.) ─
      backgroundImage: {
        'fire-gradient': 'linear-gradient(90deg, #FF6A00, #FFB347)',
        'fire-glow':     'radial-gradient(circle, rgba(255,106,0,0.4), transparent 70%)',
        'fire-overlay':  'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95))',
      },
      // ─── Box shadows ──────────────────────────────────────────────────
      boxShadow: {
        'fire-sm': '0 0 12px rgba(255,106,0,0.3)',
        'fire-md': '0 0 25px rgba(255,106,0,0.4)',
        'fire-lg': '0 0 50px rgba(255,106,0,0.6)',
      },
    },
  },
  plugins: [],
};

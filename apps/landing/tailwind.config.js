/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds - Ultra Light
        ivory: '#FDFCFB',
        pearl: '#FAF9F7',
        linen: '#F5F4F2',
        
        // Dark Slate Grey Family
        slate: {
          900: '#1E293B',
          800: '#293548',
          700: '#374151',
          500: '#64748B',
          400: '#94A3B8',
          200: '#E2E8F0',
          100: '#F1F5F9',
        },
        
        // Therapy Accent - Ocean Blue
        therapy: {
          DEFAULT: '#5B7B9A',
          light: '#7B9BB8',
          dark: '#4A6A85',
          muted: 'rgba(91, 123, 154, 0.12)',
        },
        
        // Wellness Accent - Sage Green
        wellness: {
          DEFAULT: '#5A8A7A',
          light: '#7BA898',
          muted: 'rgba(90, 138, 122, 0.12)',
        },
        
        // Secondary - Warm Copper
        copper: {
          DEFAULT: '#B8886A',
          light: '#D4A888',
        },
        
        // Crisis
        crisis: '#4A6A85',
        
        // Footer - Chalkboard Dark Grey
        chalkboard: '#2D2D2D',
      },
      fontFamily: {
        // Titles - Raleway
        title: ['Raleway', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Body - Clarendon
        body: ['Clarendon', 'Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}

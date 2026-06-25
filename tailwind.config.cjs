/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"Azeret Mono"', 'monospace'],
      },
      colors: {
        ink: '#090909',
        paper: '#f4f4f4',
        acid: '#d8ff2f',
        bolt: '#00d8c6',
        heat: '#ff4b3e',
      },
      boxShadow: {
        hard: '8px 8px 0 #090909',
        hardSm: '4px 4px 0 #090909',
        glow: '0 0 0 1px #090909, 0 18px 50px rgba(0, 216, 198, 0.22)',
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        scan: 'scan 7s linear infinite',
        rise: 'rise 0.8s cubic-bezier(.16, 1, .3, 1) both',
        blink: 'blink 1.1s steps(2, start) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 180px' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

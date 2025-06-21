/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      letterSpacing: {
        widestCustom: '0.05em',
      },
  animation: {
    'float': 'float 6s ease-in-out infinite',
    'float-reverse': 'float 6s ease-in-out infinite reverse',
    'fade-in': 'fadeIn 1s ease-out forwards',
  },
  backgroundSize: {
      '400%': '400% 100%',
    },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    fadeIn: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
  }
}

  },
  plugins: [],
};

const { blueGray } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray,
        'accent-1': '#333',
        'brand-50': '#edecff',
        'brand-100': '#d3d1fe',
        'brand-200': '#a8a4fd',
        'brand-300': '#7c76fb',
        'brand-400': '#5149fa',
        'brand-500': '#251bf9',
        'brand-600': '#1e16c7',
        'brand-700': '#161095',
        'brand-800': '#0f0b64',
        'brand-900': '#070532',
      },
      zIndex: {
        1: '1',
        '-1': '-1',
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

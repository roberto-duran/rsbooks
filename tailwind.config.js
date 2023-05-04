/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        rsbooks: {
          "primary": "#0370a1",
          "secondary": "#cc3c67",          
          "accent": "#1FB2A5",          
          "neutral": "#191D24",          
          "base-100": "#2A303C",          
          "info": "#3ABFF8",          
          "success": "#36D399",          
          "warning": "#FBBD23",          
          "error": "#F87272",
        }
      }, 'emerald'],
  }
}

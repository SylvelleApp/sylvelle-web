/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#FBF9F6',
        marble:    '#F4F1EC',
        linen:     '#EAE4D9',
        copper:    '#B58A7C',
        brass:     '#A68A64',
        amber:     '#E6AA68',
        ink:       '#2F2C2A',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        body:    ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

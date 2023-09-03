import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-dark-blue': '#081F2C',
        'primary-yellow': '#F1BE48',
        'primary-red': '#FC4235',
        'primary-orange': '#FF7E28',
        'primary-cyan': '#3CDBC0',
        'primary-green': '#25D65A',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a2e',
        ivory: '#f5f0e8',
        gold: '#c9a96e',
        burgundy: '#800020',
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // watches all JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

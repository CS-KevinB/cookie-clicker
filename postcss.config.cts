import type { Plugin } from 'postcss';

const config: {
  plugins: Record<string, Plugin | {}>;
} = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;

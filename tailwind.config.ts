import type { Config } from 'tailwindcss';

/**
 * Os tokens da marca (herdados do site atual: navy hsl(222 47% 5%) + verde hsl(142 71% 45%))
 * vivem em src/app/globals.css como custom properties. Aqui eles são expostos ao Tailwind
 * para que utilitários novos usem exatamente as mesmas cores — nunca um hex avulso.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'var(--ink-950)',
          900: 'var(--ink-900)',
          850: 'var(--ink-850)',
          800: 'var(--ink-800)',
          750: 'var(--ink-750)',
          700: 'var(--ink-700)',
          600: 'var(--ink-600)',
          400: 'var(--ink-400)',
          300: 'var(--ink-300)',
          200: 'var(--ink-200)',
          100: 'var(--ink-100)',
          50: 'var(--ink-50)',
        },
        brand: {
          900: 'var(--brand-900)',
          800: 'var(--brand-800)',
          700: 'var(--brand-700)',
          600: 'var(--brand-600)',
          500: 'var(--brand-500)',
          400: 'var(--brand-400)',
          300: 'var(--brand-300)',
          200: 'var(--brand-200)',
          100: 'var(--brand-100)',
          50: 'var(--brand-50)',
        },
      },
      fontFamily: {
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        quote: ['Newsreader', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
      },
      maxWidth: {
        container: 'var(--container)',
        'container-wide': 'var(--container-wide)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.16, 1, .3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

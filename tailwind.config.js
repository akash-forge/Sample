import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: 'var(--gold)',
        'gold-light': 'var(--gold-light)',
        dark: 'var(--dark)',
        'dark-mid': 'var(--dark-mid)',
        'dark-surface': 'var(--dark-surface)',
      },
    },
  },
  plugins: [],
}

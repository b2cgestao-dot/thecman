/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* -------------------------------------------------------------- */
        /*  TOKENS DO DESIGN SYSTEM (spec Thecman)                          */
        /* -------------------------------------------------------------- */
        brand: {
          navy: '#0D1B2E', // hero e seções escuras
          'navy-light': '#13233D', // cards em seções escuras
          blue: '#2563EB', // primária — botões, ícones, ênfase
          'blue-dark': '#1E50C8', // hover
          'blue-light': '#3B82F6', // accent
        },
        surface: {
          muted: '#F4F6F9', // bandas claras / footer
        },
        ink: {
          DEFAULT: '#0D1B2E',
          secondary: '#5B6573',
          muted: '#8A93A0',
        },
        line: '#E5E8EC', // bordas
        success: '#22C55E',
        warning: '#F5C518',
        error: '#EF4444',

        /* -------------------------------------------------------------- */
        /*  TOKENS LEGADOS (remapeados para a paleta do spec)              */
        /*  Mantidos para que as classes existentes renderizem as cores    */
        /*  oficiais sem reescrever todos os componentes.                  */
        /* -------------------------------------------------------------- */
        navy: {
          50: '#F4F6F9',
          100: '#D6DEEA',
          200: '#B3C0D4',
          300: '#8A93A0',
          400: '#71808F',
          500: '#6B7585',
          600: '#5B6573',
          700: '#33415A',
          800: '#13233D', // navy-light (cards escuros)
          900: '#0D1B2E', // navy (seções escuras / ink)
          950: '#0A1422', // profundidade de gradiente
        },
        weg: {
          // Remapeado para a primária azul do spec (#2563EB)
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1E50C8',
        },
        accent: {
          // Spec não usa vermelho — remapeado para azul
          DEFAULT: '#2563EB',
          dark: '#1E50C8',
          light: '#3B82F6',
        },
      },
      fontFamily: {
        sans: [
          'Manrope',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '12px',
        xl2: '16px',
      },
      spacing: {
        section: '6rem',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0, 0, 0, 0.06)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 32px rgba(13, 27, 46, 0.18)',
        strong: '0 12px 32px rgba(13, 27, 46, 0.18)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

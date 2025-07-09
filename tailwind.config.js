
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-myeongjo)', 'sans-serif'],
      },
      fontSize: {
        // Inter
        'inter-title': ['10rem', { lineHeight: '120%' }],
        'inter-subtitle': ['5.75rem', { lineHeight: '120%' }],
        'inter-desc': ['0.875rem', { lineHeight: '120%' }],

        // Inter(Mobile)
        'inter-title-xs': ['3rem', { lineHeight: '120%' }],
        'inter-subtitle-xs': ['2.75rem', { lineHeight: '120%' }],
        'inter-desc-xs': ['0.875rem', { lineHeight: '120%' }],

        // Pretendard
        'pt-title': ['5.75rem', { lineHeight: '150%' }],
        'pt-section-title': ['3rem', { lineHeight: '150%' }],
        'pt-subsection-title': ['2rem', { lineHeight: '150%' }],
        'pt-subtitle': ['1.5rem', { lineHeight: '150%' }],
        'pt-body': ['1rem', { lineHeight: '150%' }],

        // Pretendard(Mobile)
        'pt-title-xs': ['3rem', { lineHeight: '150%' }],
        'pt-section-title-xs': ['2rem', { lineHeight: '150%' }],
        'pt-subsection-title-xs': ['1.125rem', { lineHeight: '150%' }],
        'pt-subtitle-xs': ['1rem', { lineHeight: '150%' }],
        'pt-body-xs': ['0.875rem', { lineHeight: '150%' }],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          extraLight: 'E0E0E0',
          deepLight: '#888888',
          light: '#757575',
          dark: '#333333',
        },
        green: {
          DEFAULT: '#05C753',
        },
        yellow: {
          DEFAULT: '#F0E9E3',
          dark: '#896A50',
        },
        blue: {
          DEFAULT: '#4A4AD3',
        },
        background: {
          DEFAULT: '#000000',
          light: '#ffffff',
          gray: '#f4f4f4',
          green: '#05C753',
          blue: '#EFF1FF',
        },
      },
      screens: {
        'xs': '360px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};

export default config;
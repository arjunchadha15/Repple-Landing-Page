import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        repple: {
          purple: '#7F3DFF',
          violet: '#8A2BE2',
          dark: '#0F0F0F',
          'dark-secondary': '#1A1A1A',
          'card-bg': '#2A2A2A',
          success: '#00D9A3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 10px 40px -10px rgba(127, 61, 255, 0.3)',
        'purple-glow-lg': '0 20px 60px -10px rgba(127, 61, 255, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 1s ease-out',
        'slide-up-delayed-1': 'slideUp 0.8s ease-out 0.2s both',
        'slide-up-delayed-2': 'slideUp 0.8s ease-out 0.4s both',
        'slide-up-delayed-3': 'slideUp 0.8s ease-out 0.6s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.5) rotate(-10deg)' },
          '60%': { transform: 'scale(1.05) rotate(5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config


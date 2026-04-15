import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F7F7F5',
        'surface-hover': '#EFEFED',
        border: '#E8E8E5',
        'border-strong': '#D3D3CE',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        'text-tertiary': '#9B9B9B',
        accent: '#7C5CFC',
        'accent-hover': '#6B4EDB',
        'accent-light': '#F0EDFF',
        destructive: '#E5484D',
        success: '#30A46C',
        warning: '#F76B15',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: '11px',
        sm: '13px',
        base: '14px',
        md: '15px',
        lg: '17px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.06)',
        md: '0 2px 8px rgba(0,0,0,0.08)',
        lg: '0 4px 16px rgba(0,0,0,0.10)',
        xl: '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
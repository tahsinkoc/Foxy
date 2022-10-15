/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        res: 'url(../public/assets/irelia_2.png)',
        resa: 'url(../public/assets/key-art-v2.webp)'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(-100%,0)' },
          '100%': { transform: 'translate(0,0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        wiggle: 'wiggle .4s ease-in-out',
        fade: 'fade .4s ease-in-out',
      }
    },
    colors: {
      transparent: 'transparent',
      bg: '#060606',
      white: '#ffff',
      lbg: 'rgb(24, 24, 27)',
      borderColor: '#ff4900',
      darker: '#ff4e00',
      text: '#E2E2E2',
      gray: '#eeee',
      bgt: 'rgba(0,0,0,.7)',
      rr: '#FC4D32',
      tt: '#ed8b00',
      t: '#ED7600',
      rbg: '#13151B',
      tgb: '#111318',
      secondTextColor: '#989BA2',
      Lb: '#0C0E13',
      RB: '#07090e',
      SL: '#0E1015',
      pink: '#fc326c',
      purple: '#7c32fc',
      green: '#32fc61',
      bl: '#32b4fc',
      ft: '#12141B'
    }
  },
  plugins: [],
}
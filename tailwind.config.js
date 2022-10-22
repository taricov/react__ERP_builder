/** @type {import('tailwindcss').Config} */

function withOpacity(CSSVariable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${CSSVariable}), ${opacityValue})`
    } else {
      return `rgba(var(${CSSVariable}))`
    }
  }
}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        trans: "var(--trans)",
      },
      textColor: {
        dimmed: withOpacity("--color-ff-1"),
        "bg-rev": withOpacity("--color-light-0"),
        'white': '#ffffff',
        'gray-lightest': '#f8f8f9',
        'gray-lighter': '#e5e4e5',
        'gray-light': '#d1d1d1',
        'gray': '#bebebe',
        'gray-dark': '#969697',
        'gray-darker': '#6f6f6f',
        'gray-darkest': '#484848',
        'black': '#212121',

        'brand-light': '#d6d3da',
        'brand': '#645972',
        'brand-dark': '#332e39',

        'cta-light': '#dad9d3',
        'cta': '#727059',
        'cta-dark': '#39382e',

        'info-light': '#daf0f8',
        'info': '#51c1e1',
        'info-dark': '#2f5c6a',

        'warning-light': '#fcefcf',
        'warning': '#e1c139',
        'warning-dark': '#6b5c23',

        'success-light': '#d9f4d4',
        'success': '#53cf54',
        'success-dark': '#2f632d',

        'danger-light': '#ffd3d0',
        'danger': '#e2444e',
        'danger-dark': '#6d2829',

      },
      skin: {
        base: withOpacity("--color-txt-base"),
      },
      backgroundColor: {
        hover: "",
        'primary': {
          '50': '#fbfafc',
          '100': '#f6f4f9',
          '200': '#e9e5ef',
          '300': '#dbd5e5',
          '400': '#c1b5d2',
          '500': '#a695be',
          '600': '#9586ab',
          '700': '#7d708f',
          '800': '#645972',
          '900': '#51495d'
        },
        skin: {
          hue0: withOpacity("--color-light-0"),
          hue1: withOpacity("--color-light-1"),
          hue2: withOpacity("--color-light-2"),
          builderRow: withOpacity("--color-row-bg"),
          builderRowIconBg: withOpacity("--color-bg-Icon"),
          // grid: "conic-gradient(from 90deg at 2px 2px,var(--_g)) 0 0/var(--s) var(--s), conic-gradient(from 90deg at 1px 1px,var(--_g)) 0 0/calc(var(--s)/5) calc(var(--s)/5);"
        }
      },
      gradientColorStops: {
        skin: {
          hue0: withOpacity("--color-light-0"),
          hue1: withOpacity("--color-light-1"),
          hue2: withOpacity("--color-light-2"),
        }
      },
      borderRadius: {
        panel: ".3rem",
      },
      boxShadow: {
        statusBar: "var(--shadow-status-bar)",
      },

    },
  },
  plugins: [],
};

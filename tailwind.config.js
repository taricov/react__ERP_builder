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
        skin: {
          base: withOpacity("--color-txt-base")
        }
      },
      backgroundColor: {
        skin: {
          builderRow: withOpacity("--color-row-bg"),
          builderRowIconBg: withOpacity("--color-bg-Icon"),
          // grid: "conic-gradient(from 90deg at 2px 2px,var(--_g)) 0 0/var(--s) var(--s), conic-gradient(from 90deg at 1px 1px,var(--_g)) 0 0/calc(var(--s)/5) calc(var(--s)/5);"
        }
      },
      gradientColorStops: {
        skin: {
          hue1: withOpacity("--color-bg-grad1"),
          hue2: withOpacity("--color-bg-grad2")
        }
      },
      borderRadius: {
        panel: ".3rem",
      }

    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
      "./resources/**/*.antlers.html",
      "./resources/**/*.js",
      "./resources/**/*.css",
      "./resources/**/*.scss",
    ],
    safelist: [
        {
            pattern: /m(t|b|l|r)-(0|0.5|1|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|60|64|80|96)/,
            variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'hover', 'focus'],
        },
        {
            pattern: /p(t|b|l|r)-(0|0.5|1|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|60|64|80|96)/,
            variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'hover', 'focus'],
        },
    ],
    theme: {
      colors: {
        "primary": "#ED1C24", //red
        "accent": "#D4AF35", //yellow
        "neutral": "#231F20", // grey
        "white": "#FFFFFF", //white
        "black": "#000", //black
        "transparent": "transparent", //transparent
      },
      screens: {
        "xs": "20rem", // 320px
        "sm": "40rem", // 640px
        "md": "48rem", // 768px
        "lg": "61rem", // 976px
        "xl": "74rem", // 1184px
        "2xl": "80rem", // 1280px
        "3xl": "90rem", // 1440px
      },
      fontFamily: {
        sans: ['Stellar'],
        writter: ['Writter'],
        murmure: ['Le murmure'],
      },
      extend: {
        fontSize: {
          "7xl": "12.125rem", //194px
          "6xl": "7.9375rem", //127px
          "5xl": "6.87500rem", //110px
          "4xl": "5.87500rem", //94px
          "3xl": "5.5625rem", //89px 
          "2xl": "3.12500rem", //50px
          "xl": "2.5rem", //40px
          "lg": "2.3125rem", //37px
          "md": "1.87500rem", //30px
          "sm": "1.25rem", //20px
          "xs": "1.1875rem", //19px
          "2xs": "1rem", //16px
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translate3d(0%, 0%, 0)' },
            '100%': { transform: 'translate3d(-100%, 0%, 0)' }
          },
        },
        animation: {
          'marquee': 'marquee 40s linear infinite',
        },
      },
    },
    plugins: [require("tailwindcss-convert-px-to-rem")]
  }
/** @type {import('tailwindcss').Config} */
import{
    Carousel,
    initTE,
}
from "tw-elements";
initTE({Carousel});

module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens:{
            'sm': '6400px',
            'md': '768px',
            'lg': '1024px',
            'xl':'1280px',
            '2xl': '1536px',
        },
        borderRadius:{
            'none': '0',
            DEFAULT: '0.25rem',
            'large': '12px',
        },
        colors:{
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
    }

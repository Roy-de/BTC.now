/** @type {import('tailwindcss').Config} */
import { Carousel } from 'flowbite';

const carousel = new Carousel(items, options);

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ["./src/**/*.{html,js}",
            "./node_modules/flowbite/**/*.js"],
    theme: {
        screens: {
            'sm': '6400px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        borderRadius: {
            'none': '0',
            DEFAULT: '0.25rem',
            'large': '12px',
        },
        colors: {
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
            'gold': '#ffbf00',
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
            animation: {
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

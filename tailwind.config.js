module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    media: false, // or 'media' or 'className'
    theme: {
        cursor: { crosshair: 'crosshair' },
        fontSize: {
            base: '1rem',
            lg: '2rem',
            xl: '3rem',
            '4xl': '4rem',
            '5xl': '5rem',
            '6xl': '6rem',
            '7xl': '7rem',
            '8xl': '8rem',
            '9xl': '9rem',
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            xxl: '2560px',
        },
        colors: {
            white: '#f8f8ff',
            black: '#000',
            red: '#e53e3e',
            yellow: '#ffff00',
            toxic: '#61de2a',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

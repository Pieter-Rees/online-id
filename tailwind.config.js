module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'className'
    theme: {
        cursor: { crosshair: 'crosshair' },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            white: '#f8f8ff',
            black: '#3b444b',
            red: '#e53e3e',
            toxic: '#61de2a',
        },
        fontFamily: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

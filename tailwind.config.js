module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    media: false, // or 'media' or 'className'
    theme: {
        cursor: { crosshair: 'crosshair' },
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

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    media: false, // or 'media' or 'className'
    theme: {
        cursor: { crosshair: 'crosshair' },
        fontSize: {
            base: '1.2rem',
            lg: '1.6rem',
            xl: '3rem',
            xxl: '4rem',
            xxxl: '5rem',
            xxxxl: '6rem',
            xxxxxl: '7rem',
            xxxxxxl: '8rem',
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
            blue: '#89cff0',
            green: '#9bdb69',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

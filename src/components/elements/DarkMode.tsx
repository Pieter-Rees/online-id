import { useEffect, useState } from 'react';
import Moon from './../svg/Moon';
import Sun from './../svg/Sun';
import SvgContainer from './SvgContainer';

function DarkMode() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <span
            className='cursor-crosshair text-sm text-black hover:text-red dark:text-white font-bold'
            onClick={toggleTheme}
        >
            {theme == 'light' ? (
                <SvgContainer svg={<Moon />} />
            ) : (
                <SvgContainer svg={<Sun />} />
            )}
        </span>
    );
}

export default DarkMode;

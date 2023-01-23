import React, { useState, useEffect } from 'react';
import SvgContainer from './SvgContainer'
import Moon from './../svg/Moon'
import Sun from './../svg/Sun'


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
    return <span onClick={toggleTheme}>{theme == 'light' ? <SvgContainer svg={<Moon />} /> : <SvgContainer svg={<Sun />} />}</span>
}

export default DarkMode

import DarkMode from './DarkMode';

import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';
import SvgContainer from './SvgContainer';

const isFirefox = () => {
    const isFirefox = navigator.userAgent.indexOf('Firefox') != -1;
    return isFirefox;
};

const Social = () => (
    <div className='fixed left-0 bottom-0 m-6 p-3 rounded-3xl shadow-xl backdrop-blur-sm ease-in-out duration-100 border-white border-solid border-2'>
        <div className='flex items-center'>
            <div className='mx-2'>
                <a
                    aria-label='Github'
                    className='cursor-crosshair'
                    href='https://github.com/pieter-rees'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <SvgContainer svg={<Github />} />
                </a>
            </div>

            <div className='mx-2'>
                <a
                    aria-label='Linkedin'
                    className='cursor-crosshair'
                    href='https://www.linkedin.com/in/pieter-rees-1299a52a/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <SvgContainer svg={<Linkedin />} />
                </a>
            </div>

            <div className='mx-2 flex items-center'>
                <a
                    aria-label='Email'
                    className='cursor-crosshair text-sm text-black hover:text-red dark:text-white font-bold'
                    href='mailto:pieter@pieterrees.nl'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    pieter@pieterrees.nl
                </a>
            </div>

            {!isFirefox() ? (
                <div className='mx-2 flex items-center cursor-crosshair hidden lg:flex'>
                    <DarkMode />
                </div>
            ) : null}
        </div>
    </div>
);

export default Social;

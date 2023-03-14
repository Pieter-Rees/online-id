import { Link } from 'react-scroll';
import Fader from '../elements/Fader';

import FooterDate from '../elements/FooterDate';
import SvgContainer from '../elements/SvgContainer';
import Tag from '../svg/Tag';

const Footer = () => (
    <div className='pb-8' id='footer'>
        <Fader>
            <p className='text-center text-sm dark:text-white'>
                <span className='block'>Made in Amsterdam</span>
                <FooterDate />
            </p>
        </Fader>

        <Fader>
            <div className='my-4'>
                <Link
                    activeClass='text-red dark:text-red'
                    className='cursor-crosshair ease-in-out duration-100 hover:text-red no-underline dark:text-white'
                    duration={500}
                    offset={-70}
                    smooth={true}
                    spy={true}
                    to='landing'
                >
                    <SvgContainer color='grey' size='small' svg={<Tag />} />
                </Link>
            </div>
        </Fader>
    </div>
);

export default Footer;

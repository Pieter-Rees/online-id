import React, { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'
import { Link } from 'react-scroll'

const SvgContainer = lazy(async () => await import('../elements/SvgContainer'))
const Tag = lazy(async () => await import('../svg/Tag'))
const FooterDate = lazy(async () => await import('../elements/FooterDate'))

const Footer = () => (
    <Suspense fallback={Renderloader()}>
        <div className='pb-8' id='footer'>
            <p className='text-center text-sm dark:text-white'>
                <div>Made in Amsterdam
                </div>
                <FooterDate />
            </p>
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
        </div>
    </Suspense>
)

export default Footer

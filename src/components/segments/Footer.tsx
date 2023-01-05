import React, { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const SvgContainer = lazy(async () => await import('../elements/SvgContainer'))
const Tag = lazy(async () => await import('../svg/Tag'))
const FooterDate = lazy(async () => await import('../elements/FooterDate'))

const Footer = () => (
    <Suspense fallback={Renderloader()}>
        <div className='pb-8' id='footer'>
            <p className='text-center text-sm dark:text-white'>
                Made in Amsterdam
                <br />
                Released under the DBAD PUBLIC LICENCE
                <br />
                <FooterDate />
            </p>
            <div className='my-4'>
                <SvgContainer color='grey' size='small' svg={<Tag />} />
            </div>
        </div>
    </Suspense>
)

export default Footer

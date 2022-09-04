import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const SvgContainer = lazy(() => import('../elements/SvgContainer'))
const Tag = lazy(() => import('../svg/Tag'))
const FooterDate = lazy(() => import('../elements/FooterDate'))

const Footer = () => (
    <Suspense fallback={Renderloader()}>
        <div id="footer" className="pb-8">
            <p className="text-center text-sm dark:text-white">
                Made in Amsterdam
                <br />
                Released under the DBAD PUBLIC LICENCE
                <br />
                <FooterDate />
            </p>
            <div className="my-4">
                <SvgContainer size="small" svg={<Tag />} color="grey" />
            </div>
        </div>
    </Suspense>
)

export default Footer

import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(() => import('../elements/Title'))
const Availability = lazy(() => import('../elements/Availability'))

const Work = () => (
    <Suspense fallback={Renderloader()}>
        <div className="" id="work">
            <Title title={'Work?!'} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mx-auto">
                <div className="flex self-center justify-center">
                    <div className="flex overflow-hidden items-center">
                        <p className="dark:text-white">
                            Currently I am working @ GoodUp. We provide The #1
                            tech solution for activating employees on your
                            company purpose. I am always up for a nice talk
                            about innovative ideas. Please drop me a line via{' '}
                            <a
                                className="ease-in-out duration-100 hover:text-red"
                                href="mailto:pieter@pieterrees.nl"
                            >
                                E-mail
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Availability available={true} />
                </div>
            </div>
        </div>
    </Suspense>
)

export default Work

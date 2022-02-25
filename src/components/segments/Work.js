import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(() => import('../elements/Title'))
const Availability = lazy(() => import('../elements/Availability'))
const ContentContainer = lazy(() => import('../elements/ContentContainer'))

const Work = () => (
    <Suspense fallback={Renderloader()}>
        <div className="" id="work">
            <Title large={true} title={'Work?!'} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mx-auto">
                <div className="flex flex-col self-center justify-center">
                    <div className="flex flex-col items-center">
                        <ContentContainer
                            content={
                                ' Currently I am working @ GoodUp. We provide The #1 tech solution for activating employees on your company purpose. I am always up for a nice talk about innovative ideas.'
                            }
                        />
                    </div>
                    <div className="flex mt-8">
                        <a
                            className="font-bold ease-in-out duration-100 hover:text-red dark:text-white"
                            href="mailto:pieter@pieterrees.nl"
                        >
                            pieter@pieterrees.nl
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Availability available={true} />
                </div>
            </div>
        </div>
    </Suspense>
)

export default Work

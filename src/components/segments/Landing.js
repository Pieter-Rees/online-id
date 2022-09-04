import { lazy, Suspense } from 'react'

import Renderloader from '../elements/Renderloader'
const Title = lazy(() => import('../elements/Title'))

const Landing = () => (
    <Suspense fallback={Renderloader()}>
        <div id="landing" className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <Title size={'xxxl'} title={'Pieter Rees'} />
                <Title size={'xl'} title={'I make web things, and more'} />
            </div>
        </div>
    </Suspense>
)

export default Landing

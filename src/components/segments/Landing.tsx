import React, { Suspense, lazy } from 'react'

import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))

const Landing = () => (
    <Suspense fallback={Renderloader()}>
        <div className='h-full' id='landing'>
            <div className='h-full flex flex-col items-center justify-center'>
                <Title size={'xxxl'} title={'Pieter Rees'} />
                <Title size={'xl'} title={'I make web things, and more'} />
            </div>
        </div>
    </Suspense>
)

export default Landing

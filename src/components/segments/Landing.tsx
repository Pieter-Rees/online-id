import { Suspense, lazy } from 'react'

import Renderloader from '../elements/Renderloader'

const Fader = lazy(async () => await import('../elements/Fader'))

const Title = lazy(async () => await import('../elements/Title'))

const Landing = () => (
    <Suspense fallback={Renderloader()}>
        <div className='h-full' id='landing'>
            <div className='h-full flex flex-col items-center justify-center'>
                <Fader>
                    <Title size={'xxxxl'} title={'Pieter Rees'} />
                </Fader>
                <Fader>
                    <Title size={'xxl'} title={'I make web things, and more'} />
                </Fader>

            </div>
        </div>
    </Suspense>
)

export default Landing

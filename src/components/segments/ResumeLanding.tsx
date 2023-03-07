import { Suspense, lazy } from 'react'

import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))

const ResumeLanding = () => (
    <Suspense fallback={Renderloader()}>
        <div className='h-full' id='landing'>
            <div className='h-full flex flex-col items-center justify-center'>
                <Title size={'xxxxl'} title={'Resume'} />
            </div>
        </div>
    </Suspense>
)

export default ResumeLanding

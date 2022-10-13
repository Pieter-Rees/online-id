import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(() => import('../elements/Title'))
const ContentContainer = lazy(() => import('../elements/ContentContainer'))
const Iot = lazy(() => import('../svg/Iot'))
const Rc = lazy(() => import('../svg/Rc'))
const Linux = lazy(() => import('../svg/Linux'))
const Tech = lazy(() => import('../svg/Tech'))

const Exitement = () => (
    <Suspense fallback={Renderloader()}>
        <div id="exitement">
            <Title large={true} title={'Exitement'} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                <ContentContainer
                    image={<Iot />}
                    title={'IOT'}
                    content={
                        'I enjoy myself with almost everything that has an IP address. From single board computers to home automation systems, I love it all.'
                    }
                />
                <ContentContainer
                    image={<Rc />}
                    title={'RC'}
                    content={
                        'If it is controllable from a distance, I love it. I am interested DIY drone building and everything related.'
                    }
                />
                <ContentContainer
                    image={<Linux />}
                    title={'Linux'}
                    content={'Distrohopper & Linux explorer'}
                />
                <ContentContainer
                    image={<Tech />}
                    title={'(Ancient) tech'}
                    content={
                        'I will get highly enthusiastic from ancient and not so ancient technology.'
                    }
                />
            </div>
        </div>
    </Suspense>
)

export default Exitement

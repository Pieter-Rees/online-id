import React from 'react'
import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(() => import('../elements/Title'))
const ContentContainer = lazy(() => import('../elements/ContentContainer'))
const IotLogo = lazy(() => import('../svg/Iot'))
const RcLogo = lazy(() => import('../svg/Rc'))
const LinuxLogo = lazy(() => import('../svg/Linux'))
const TechLogo = lazy(() => import('../svg/Tech'))

const ExitementTitle = 'Exitement'

const Iot = {
    title: 'IOT',
    content:
        'I enjoy myself with almost everything that has an IP address. From single board computers to home automation systems, I love it all.',
}

const Rc = {
    title: 'RC',
    content:
        'If it is controllable from a distance, I love it. I am interested DIY drone building and everything related',
}

const Linux = {
    title: 'Linux',
    content: 'Distrohopper & Linux explorer',
}

const At = {
    title: '(Ancient) tech',
    content:
        'I will get highly enthusiastic from ancient and not so ancient technology.',
}

const Exitement = () => (
    <Suspense fallback={Renderloader()}>
        <div id="exitement">
            <Title large={true} title={ExitementTitle} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                <ContentContainer
                    image={<IotLogo />}
                    title={Iot.title}
                    content={Iot.content}
                />
                <ContentContainer
                    image={<RcLogo />}
                    title={Rc.title}
                    content={Rc.content}
                />
                <ContentContainer
                    image={<LinuxLogo />}
                    title={Linux.title}
                    content={Linux.content}
                />
                <ContentContainer
                    image={<TechLogo />}
                    title={At.title}
                    content={At.content}
                />
            </div>
        </div>
    </Suspense>
)

export default Exitement

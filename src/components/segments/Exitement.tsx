import { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))
const ContentContainer = lazy(async () => await import('../elements/ContentContainer'))
const IotLogo = lazy(async () => await import('../svg/Iot'))
const RcLogo = lazy(async () => await import('../svg/Rc'))
const LinuxLogo = lazy(async () => await import('../svg/Linux'))
const TechLogo = lazy(async () => await import('../svg/Tech'))
const Fader = lazy(async () => await import('../elements/Fader'))

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
    content: 'I will get highly enthusiastic from ancient and not so ancient technology.',
}

const Exitement = () => (
    <Suspense fallback={Renderloader()}>
        <div id='exitement'>
            <Fader content={<Title size={'xxl'} title={ExitementTitle} />} />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-24'>
                <Fader
                    content={
                        <ContentContainer
                            content={Iot.content}
                            image={<IotLogo />}
                            title={Iot.title}
                        />
                    }
                />

                <Fader
                    content={
                        <ContentContainer
                            content={Rc.content}
                            image={<RcLogo />}
                            title={Rc.title}
                        />
                    }
                />
                <Fader
                    content={
                        <ContentContainer
                            content={Linux.content}
                            image={<LinuxLogo />}
                            title={Linux.title}
                        />
                    }
                />
                <Fader
                    content={
                        <ContentContainer
                            content={At.content}
                            image={<TechLogo />}
                            title={At.title}
                        />
                    }
                />
            </div>
        </div>
    </Suspense>
)

export default Exitement

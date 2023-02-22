import { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))
const Image = lazy(async () => await import('../elements/Image'))
const ContentContainer = lazy(async () => await import('../elements/ContentContainer'))
const Fader = lazy(async () => await import('../elements/Fader'))

const AboutContent = {
    title: 'This guy..',
    content:
        'My name is Pieter Rees. I am a Developer with full stack experience and a huge interest for everything that is related to electronics and technology.',
}
const About = () => (
    <Suspense fallback={Renderloader()}>
        <div id='about'>
            <Fader content={<Title size={'xxl'} title={AboutContent.title} />} />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mx-auto mt-8'>
                <div className='flex self-center justify-center'>
                    <div className='flex overflow-hidden items-center'>
                        <div className='rounded-full border-2 border-white border-solid overflow-hidden flex justify-center align-center'>
                            <Fader content={<Image />} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Fader content={<ContentContainer content={AboutContent.content} />} />
                </div>
            </div>
        </div>
    </Suspense>
)

export default About

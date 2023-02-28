import { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))
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

            <div className='grid grid-cols-1 gap-24 mx-auto mt-8'>
                <div className='flex items-center'>
                    <Fader content={<ContentContainer content={AboutContent.content} />} />
                </div>
            </div>
        </div>
    </Suspense>
)

export default About

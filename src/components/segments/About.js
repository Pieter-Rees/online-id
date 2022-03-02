import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(() => import('../elements/Title'))
const Paragraph = lazy(() => import('../elements/Paragraph'))
const Image = lazy(() => import('../elements/Image'))

const About = () => (
    <Suspense fallback={Renderloader()}>
        <div id="about">
            <Title large={true} title={'This guy..'} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mx-auto">
                <div className="flex self-center justify-center">
                    <div className="flex overflow-hidden items-center">
                        <div className="border-2 border-white border-solid rounded-full overflow-hidden flex justify-center align-center">
                            <Image />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <Paragraph
                        content={
                            'My name is Pieter Rees. I am a Developer with full stack experience and a huge interest for everything that is related to electronics and technology.'
                        }
                    />
                </div>
            </div>
        </div>
    </Suspense>
)

export default About

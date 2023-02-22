import { Suspense, lazy } from 'react'
import { InView } from 'react-intersection-observer'

import Renderloader from './Renderloader'

import SvgContainer from './SvgContainer'
import Paragraph from './Paragraph'
const Title = lazy(async () => await import('./Title'))

interface ContentContainerProps {
    title?: string
    image?: JSX.Element
    content: string
}

const ContentContainer = (props: ContentContainerProps) => (
    <Suspense fallback={Renderloader()}>
        <InView>
            {({ inView, ref }) => (
                <div className='flex flex-col mt-8' ref={ref}>
                    <div
                        className={`transition-all duration-1000 xl:px-16 pb-4 mx-auto text-center text-black dark:text-white ${
                            inView ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {props.title ? <Title title={props.title} /> : null}

                        {props.image != null ? (
                            <div className='mt-8'>
                                <SvgContainer size='medium' svg={props.image} />
                            </div>
                        ) : null}

                        <Paragraph content={props.content}></Paragraph>
                    </div>
                </div>
            )}
        </InView>
    </Suspense>
)

export default ContentContainer

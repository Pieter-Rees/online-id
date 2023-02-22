import { Suspense, lazy } from 'react'

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
        <div className='flex flex-col mt-8'>
            {props.title ? <Title title={props.title} /> : null}

            {props.image != null ? (
                <div className='mt-8'>
                    <SvgContainer size='medium' svg={props.image} />
                </div>
            ) : null}

            <Paragraph content={props.content}></Paragraph>
        </div>
    </Suspense>
)

export default ContentContainer

import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

import SvgContainer from './SvgContainer'
import Paragraph from './Paragraph'
const Title = lazy(() => import('../elements/Title'))

const ContentContainer = (props) => (
    <Suspense fallback={Renderloader()}>
        <div className="flex flex-col rounded-3xl">
            <Title title={props.title} />
            <SvgContainer size="medium" svg={props.image} />
            <Paragraph
                content={props.content}
                className="mt-8 dark:text-white"
            ></Paragraph>
        </div>
    </Suspense>
)

export default ContentContainer

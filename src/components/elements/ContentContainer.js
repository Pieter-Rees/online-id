import React from 'react'
import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

import SvgContainer from './SvgContainer'
import Paragraph from './Paragraph'
const Title = lazy(() => import('../elements/Title'))

const ContentContainer = (props) => (
    <Suspense fallback={Renderloader()}>
        <div className="flex flex-col rounded-3xl mt-8">
            {props.title ? <Title title={props.title} /> : null}
            {props.image ? (
                <div className="mt-8">
                    <SvgContainer size="medium" svg={props.image} />
                </div>
            ) : null}

            <Paragraph
                content={props.content}
                className="mt-8 dark:text-white"
            ></Paragraph>
        </div>
    </Suspense>
)

export default ContentContainer

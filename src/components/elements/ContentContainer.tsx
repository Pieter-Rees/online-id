import { ReactNode } from 'react';

import Paragraph from './Paragraph';
import SvgContainer from './SvgContainer';
import Title from './Title';

interface ContentContainerProps {
    title?: string;
    image?: ReactNode;
    content: string;
}

const ContentContainer = (props: ContentContainerProps) => (
    <div className='flex flex-col mt-8'>
        {props.title ? <Title title={props.title} /> : null}

        {props.image != null ? (
            <div className='mt-8'>
                <SvgContainer size='medium' svg={props.image} />
            </div>
        ) : null}

        <Paragraph content={props.content}></Paragraph>
    </div>
);

export default ContentContainer;

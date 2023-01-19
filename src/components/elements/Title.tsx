import React from 'react'

interface TitleProps {
    size?: string
    title?: string
    large?: boolean
    underline?: string
}

function size(props: TitleProps) {
    switch (props.size) {
        case 'xsmall':
        case 'large':
            return 'xl:text-lg'
        case 'xl':
            return 'text-lg lg:text-xl'
        case 'xxl':
            return 'text-xl lg:text-xxl'
        case 'xxxl':
            return 'text-xxl lg:text-xxxl'
        case 'xxxxl':
            return 'text-xxxl lg:text-xxxxl'
        case 'xxxxxl':
            return 'text-xxxxl lg:text-xxxxxl'
        default:
            return 'text-lg lg:text-xl'
    }
}

const Title = (props: TitleProps) => (
    <div
        className={`pb-4 mb-10 mx-auto text-center text-black dark:text-white  ${size(
            props,
        )}`}
    >
        {props.title}
    </div>
)

export default Title

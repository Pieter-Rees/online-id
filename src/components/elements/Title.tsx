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
            return 'text-lg'
        case 'xl':
            return 'text-xl'
        case 'xxl':
            return 'text-xxl'
        case 'xxxl':
            return 'text-xxxl'
        case 'xxxxl':
            return 'text-xxxxl'
        case 'xxxxxl':
            return 'text-xxxxxl'
        default:
            return 'text-xl'
    }
}

const Title = (props: TitleProps) => (
    <div
        className={`px-16 pb-4 mb-10 mx-auto text-center text-black dark:text-white  ${size(
            props,
        )}`}
    >
        {props.title}
    </div>
)

export default Title

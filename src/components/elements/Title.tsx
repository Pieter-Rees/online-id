import React from 'react'
interface TitleProps {
    size?: string
    title?: string
    large?: boolean
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
        default:
            return 'text-xl'
    }
}

const Title = (props: TitleProps) => (
    <div
        className={`mx-auto ease-in-out duration-100 text-center text-black dark:text-white ${size(
            props
        )}`}
    >
        {props.title}
    </div>
)

export default Title

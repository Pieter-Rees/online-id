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
            return 'text-md xl:text-lg'
        case 'xl':
            return 'text-lg xl:text-xl'
        case 'xxl':
            return 'text-xl xl:text-xxl'
        case 'xxxl':
            return 'text-xxl xl:text-xxxl'
        case 'xxxxl':
            return 'text-xxxl xl:text-xxxxl'
        case 'xxxxxl':
            return 'text-xxxxl xl:text-xxxxxl'
        default:
            return 'text-lg xl:text-xl'
    }
}

const Title = (props: TitleProps) => (
    <div
        className={`px-16 pb-4 mx-auto text-center text-black dark:text-white ${size(

            props,
        )}`}
    >
        {props.title}
    </div>
)

export default Title

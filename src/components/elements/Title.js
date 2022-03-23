import React from 'react'
function size(props) {
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

const Title = (props) => (
    <div
        className={`mx-auto ease-in-out duration-100 text-center text-black dark:text-white ${size(
            props
        )}`}
    >
        {props.title}
    </div>
)

export default Title

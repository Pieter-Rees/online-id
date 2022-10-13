interface SvgContainerProps {
    size?: string,
    inline?: boolean,
    color?: string,
    svg?: JSX.Element
}

function size(props: SvgContainerProps) {
    switch (props.size) {
        case 'xsmall':
            return 'w-4 h-4'
        case 'small':
            return 'w-8 h-8'
        case 'medium':
            return 'w-16 h-16 md:w-20 md:w-20 lg:w-24 lg:h-24'
        case 'large':
            return 'w-48 h-48'
        default:
            return 'w-4 h-4 lg:w-6 lg:h-6'
    }
}

const SvgContainer = (props: SvgContainerProps) => (
    <div
        className={`mx-auto ease-in-out ${props.inline ? 'inline-flex mx-1' : ''
            } duration-100 ${size(props)}`}
    >
        {props.svg}
    </div>
)

export default SvgContainer

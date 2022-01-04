function size(props) {
    switch (props.size) {
        case 'medium':
            return 'w-16 h-16 md:w-20 md:w-20 lg:w-24 lg:h-24'
        case 'large':
            return 'w-48 h-48'
        default:
            return 'w-6 h-6 lg:w-10 lg:h-10'
    }
}

const SvgContainer = (props) => (
    <div
        className={`container mx-auto ease-in-out duration-300 fill-${
            props.color
        } ${size(props)}`}
    >
        {props.svg}
    </div>
)

export default SvgContainer

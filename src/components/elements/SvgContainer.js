function size(props) {
    if (props.size === 'small') {
        return 'w-6 h-6 lg:w-12 lg:h-12'
    } else if (props.size === 'medium') {
        return 'w-24 h-24'
    } else {
        return 'w-48 h-48'
    }
}

const SvgContainer = (props) => (
    <div className={`container mx-auto fill-${props.color} ${size(props)}`}>
        {props.svg}
    </div>
)

export default SvgContainer

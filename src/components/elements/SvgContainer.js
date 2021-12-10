function size(props) {
    if (props.size === 'small') {
        return 'w-8 h-8'
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

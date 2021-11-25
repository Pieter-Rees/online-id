const SvgContainer = (props) => (
    <div
        className={`container mx-auto ${props.big ? 'h-28 w-28' : 'h-12 w-12'}`}
    >
        {props.svg}
    </div>
)

export default SvgContainer

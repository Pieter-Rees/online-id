import SvgContainer from './SvgContainer'

const ContentContainer = (props) => (
    <div className="flex flex-col">
        <h3 className="flex-1 text-center mb-8">{props.title}</h3>
        <SvgContainer size="medium" svg={props.image} color="white" />
        <p className="mt-8">{props.content}</p>
    </div>
)

export default ContentContainer

import SvgContainer from './SvgContainer'

const ContentContainer = (props) => (
    <div className="flex flex-col rounded-3xl">
        <h4 className="text-center mb-8">{props.title}</h4>
        <SvgContainer size="medium" svg={props.image} color="white" />
        <p className="mt-8">{props.content}</p>
    </div>
)

export default ContentContainer

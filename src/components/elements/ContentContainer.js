import SvgContainer from './SvgContainer'

const ContentContainer = (props) => (
    <div className="p-16">
        <div className="flex flex-col">
            <h3 className="flex-1 text-center mb-8">{props.title}</h3>
            <SvgContainer big={true} svg={props.image} className="mb-8" />
            <p>{props.content}</p>
        </div>
    </div>
)

export default ContentContainer

import SvgContainer from '../svg/SvgContainer'

const ContentContainer = (props) => (
    <div className="px-16 my-16">
        {/* <div className="flex">
            <div className="flex-1">
                <SvgContainer svg={props.image} />
            </div>
            <h4 className="flex-1">{props.title}</h4>
        </div>
        <p className="mt-4">{props.content}</p> */}
        <div className="flex flex-col">
            <h3 className="flex-1 text-center mb-8">{props.title}</h3>
            <SvgContainer big={true} svg={props.image} />
        </div>
    </div>
)

export default ContentContainer

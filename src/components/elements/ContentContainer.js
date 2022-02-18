import SvgContainer from './SvgContainer'

const ContentContainer = (props) => (
    <div className="flex flex-col rounded-3xl">
        <h4 className="text-center mb-8 dark:text-white">{props.title}</h4>
        <SvgContainer size="medium" svg={props.image} />
        <p className="mt-8 dark:text-white">{props.content}</p>
    </div>
)

export default ContentContainer

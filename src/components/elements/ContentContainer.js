import SvgContainer from './SvgContainer'
import Paragraph from './Paragraph'

const ContentContainer = (props) => (
    <div className="flex flex-col rounded-3xl">
        <h4 className="text-center mb-8 dark:text-white">{props.title}</h4>
        <SvgContainer size="medium" svg={props.image} />
        <Paragraph
            content={props.content}
            className="mt-8 dark:text-white"
        ></Paragraph>
    </div>
)

export default ContentContainer

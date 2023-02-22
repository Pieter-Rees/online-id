interface ParagraphProps {
    content: string
}

const Paragraph = (props: ParagraphProps) => (
    <p className='mt-8 text-base lg:text-lg text-black dark:text-white'>{props.content}</p>
)

export default Paragraph

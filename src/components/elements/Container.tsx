interface ContainerProps {
    fullHeight: boolean
    content: any
}

const Container = (props: ContainerProps) => (
    <section
        className={`container mx-auto px-8 
        ${props.fullHeight ? 'h-screen' : ''}`}
    >
        {props.content}
    </section>
)

export default Container

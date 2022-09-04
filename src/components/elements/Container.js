const Container = (props) => (
    <section
        className={`container mx-auto px-8 
        ${props.fullHeight ? 'h-screen' : ''}`}
    >
        {props.content}
    </section>
)

export default Container

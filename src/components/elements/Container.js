const Container = (props) => (
    <section
        className={`container mx-auto 
        ${props.fullHeight ? 'h-screen' : ''}`}
    >
        {props.content}
    </section>
)

export default Container

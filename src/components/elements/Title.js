const Title = (props) => (
    <h2
        className={
            'my-16 lg:my-20 text-center text-black dark:text-red ' +
            (props.large ? 'text-6xl' : 'text-xl ')
        }
    >
        {props.title}
    </h2>
)

export default Title

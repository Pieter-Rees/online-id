const Title = (props) => (
    <h2
        className={
            'text-center text-black dark:text-red ' +
            (props.large ? 'text-5xl' : 'text-xl ')
        }
    >
        {props.title}
    </h2>
)

export default Title

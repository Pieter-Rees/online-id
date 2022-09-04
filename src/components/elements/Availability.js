function IsAvailable(props) {
    const Available = props.Available
    if (Available) {
        return 'Available'
    }
    return 'Not Available'
}

const Availability = (props) => (
    <div>
        <p className="dark:text-white text-lg">
            Availability for freelance work:
        </p>
        <p className="text-center mt-4 dark:text-white text-lg">
            <IsAvailable Available={props.available} />
        </p>
    </div>
)

export default Availability

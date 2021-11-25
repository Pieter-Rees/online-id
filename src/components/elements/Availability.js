function IsAvailable(props) {
    const Available = props.Available
    if (Available) {
        return 'Available 🙂'
    }
    return 'Not Available 😑'
}

const Availability = (props) => (
    <p>
        Availability for freelance work:{' '}
        <IsAvailable Available={props.available} />
    </p>
)

export default Availability

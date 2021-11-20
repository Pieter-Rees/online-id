function IsAvailable(props) {
    const Available = props.Available
    if (Available) {
        return 'Available 🙂'
    }
    return 'Not Available 😑'
}

const Availability = () => (
    <p>
        Availability for freelance work: <IsAvailable Available={false} />
    </p>
)

export default Availability

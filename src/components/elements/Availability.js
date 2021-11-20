function IsAvailable(props) {
    const Available = props.Available
    if (Available) {
        return 'Available 🙂'
    }
    return 'Not Available 😑'
}

const Availability = () => (
    <div>
        Availability for freelance work: <IsAvailable Available={false} />
    </div>
)

export default Availability

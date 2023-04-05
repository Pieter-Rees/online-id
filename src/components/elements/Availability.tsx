interface AvailabilityProps {
    available: boolean;
}

function IsAvailable(props: AvailabilityProps) {
    const Available = props.available;
    return <span>{Available ? 'Available' : 'Not Available'}</span>;
}

export default IsAvailable;

import { useState, useEffect } from 'react';

function ResumeContent() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://pietserver.nl:5050/resume/')
            .then(response => response.json())
            .then(data => setData(data));
        console.log(data)
    }, [])

    return (
        <div>
            {data}
        </div>
    )
}

export default ResumeContent

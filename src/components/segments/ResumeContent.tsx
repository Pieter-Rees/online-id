import { useState, useEffect } from 'react'

interface Powers {
    name: string
}
interface DataInterface {
    isLoggedIn: boolean
    title?: string
    subTitle?: string
    powers?: Powers[]
}

function ResumeContent(props: DataInterface) {
    const [data, setData] = useState<DataInterface[]>([])

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                username: 'test',
                password: 'kaas',
            }),
        }

        fetch('http://localhost:5050/resume', options)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            console.log(data)
        }
    }, [data])

    return (
        <div className='h-full' id='landing'>
            {props.isLoggedIn && (
                <>
                    {data && (
                        <ul className='flex justify-center flex-wrap items-stretch'>
                            {data.map((data, index) => (
                                <li className='w-96 m-8' key={index}>
                                    <h3 className='text-xl'>{data.title}</h3>
                                    {data.subTitle && <h4 className='text-lg'>{data.subTitle}</h4>}
                                    <ul>
                                        {data.powers &&
                                            data.powers.map((powers, index) => (
                                                <li className='text-base' key={index}>
                                                    {powers.name}
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    )
}

export default ResumeContent

import { useState, useEffect, ReactNode } from 'react'

interface Powers {
    name: string
}
interface DataInterface {
    title?: string
    subTitle?: string
    powers?: Powers[]
}

function ResumeContent() {
    const [data, setData] = useState<DataInterface[]>([])

    useEffect(() => {
        fetch('http://localhost:5050/test/')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <div className='h-full' id='landing'>
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
        </div>
    )
}

export default ResumeContent

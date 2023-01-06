import React from 'react'
export interface HrProperties {
    id: string
}

export default function Hr() {
    return <hr className='block border-0 mx-auto h-px w-16 my-32 bg-red rotate-90' />
}

import React from 'react'

import Pieter from '../../img/p.webp'

const Image = () => (
    <picture>
        <source type='image/webp' />
        <img alt="Pieter's head" className='h-48 w-48' src={Pieter} />
    </picture>
)

export default Image

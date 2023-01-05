import React, { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))
const Availability = lazy(async () => await import('../elements/Availability'))
const ContentContainer = lazy(async () => await import('../elements/ContentContainer'))

const WorkContent = {
  title: 'Work',
  content:
        'Currently I am working @ GoodUp. We provide The #1 tech solution for activating employees on your company purpose. I am always up for a nice talk about innovative ideas.'
}

const EmailAddress = 'pieter@pieterrees.nl'

const Work = () => (
    <Suspense fallback={Renderloader()}>
        <div className='' id='work'>
            <Title large={true} title={WorkContent.title} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mx-auto'>
                <div className='flex flex-col self-center justify-center'>
                    <div className='flex flex-col items-center'>
                        <ContentContainer content={WorkContent.content} />
                    </div>
                    <div className='flex mt-8'>
                        <a
                            className='font-bold ease-in-out duration-100 hover:text-red dark:text-white'
                            href={`mailto:${EmailAddress}`}
                        >
                            {EmailAddress}
                        </a>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='dark:text-white text-lg'>Availability for freelance work:</p>
                    <p className='text-center mt-4 dark:text-white text-lg'>
                        <Availability available={true} />
                    </p>
                </div>
            </div>
        </div>
    </Suspense>
)

export default Work

import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

import Renderloader from '../elements/Renderloader'

const SvgContainer = lazy(async () => await import('./SvgContainer'))
const Linkedin = lazy(async () => await import('../svg/Linkedin'))
const Github = lazy(async () => await import('../svg/Github'))
const Resume = lazy(async () => await import('../svg/Resume'))
const ModeToggle = lazy(async () => await import('../elements/ModeToggle'))

const Social = () => (
    <Suspense fallback={Renderloader()}>
        <div className='fixed left-0 bottom-0 m-4 p-2 rounded-3xl shadow-xl backdrop-blur-sm ease-in-out duration-100 border-white border-solid border-2'>
            <div className='flex items-center'>
                <div className='mx-2'>
                    <a
                        aria-label='Github'
                        href='https://github.com/pieter-rees'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <SvgContainer svg={<Github />} />
                    </a>
                </div>

                <div className='mx-2'>
                    <a
                        aria-label='Linkedin'
                        href='https://www.linkedin.com/in/pieter-rees-1299a52a/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <SvgContainer svg={<Linkedin />} />
                    </a>
                </div>

                <div className='mx-2'>
                    <Link to='/resume'>
                        <SvgContainer svg={<Resume />} />
                    </Link>
                </div>
                <span className='relative mx-2'>
                    <span className='absolute bg-grey block w-px h-full border-solid border-grey border-1'></span>
                </span>
                <div className='mx-2 flex items-center'>
                    <a
                        aria-label='Email'
                        className='ease-in-out duration-100 text-sm text-black dark:text-white hover:text-red font-bold'
                        href='mailto:pieter@pieterrees.nl'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        pieter@pieterrees.nl
                    </a>
                </div>
                <div className='mx-2'>
                    <ModeToggle />
                </div>
            </div>
        </div>
    </Suspense>
)

export default Social

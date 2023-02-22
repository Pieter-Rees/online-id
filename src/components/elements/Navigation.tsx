import { Suspense } from 'react'

import Renderloader from '../elements/Renderloader'
import { Link } from 'react-scroll'

const Navigation = () => (
    <Suspense fallback={Renderloader()}>
        <div className='fixed h-full right-0 p-2 lg:px-4 xl:px-6 rounded-3xl ease-in-out duration-100'>
            <div className='flex h-full items-center'>
                <div className='flex items-center'>
                    <ul className='m-0 p-0'>
                        <li>
                            <Link
                                activeClass='text-red dark:text-red'
                                className='cursor-crosshair ease-in-out duration-100 hover:text-red no-underline dark:text-white'
                                duration={500}
                                offset={-70}
                                smooth={true}
                                spy={true}
                                to='landing'
                            >
                                *
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass='text-red dark:text-red'
                                className='cursor-crosshair ease-in-out duration-100 hover:text-red no-underline dark:text-white'
                                duration={500}
                                offset={-70}
                                smooth={true}
                                spy={true}
                                to='about'
                            >
                                *
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass='text-red dark:text-red'
                                className='cursor-crosshair ease-in-out duration-100 hover:text-red no-underline dark:text-white'
                                duration={500}
                                offset={-70}
                                smooth={true}
                                spy={true}
                                to='skills'
                            >
                                *
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass='text-red dark:text-red'
                                className='cursor-crosshair ease-in-out duration-100 hover:text-red no-underline dark:text-white'
                                duration={500}
                                offset={-70}
                                smooth={true}
                                spy={true}
                                to='exitement'
                            >
                                *
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Suspense>
)

export default Navigation

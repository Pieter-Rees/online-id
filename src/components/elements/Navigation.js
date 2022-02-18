import { Suspense } from 'react'
import Renderloader from '../elements/Renderloader'
import { Link } from 'react-scroll'

const Navigation = (props) => (
    <Suspense fallback={Renderloader()}>
        <div className="fixed h-full right-0 p-2 lg:px-4 xl:px-6 rounded-3xl ease-in-out duration-100">
            <div className="flex h-full items-center">
                <div className="flex items-center">
                    <ul className="text-xl m-0 p-0">
                        <li>
                            <Link
                                activeClass="text-red"
                                to="landing"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-crosshair ease-in-out duration-100 hover:text-red no-underline"
                            >
                                *
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="text-red"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-crosshair ease-in-out duration-100 hover:text-red no-underline"
                            >
                                *
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="text-red"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-crosshair ease-in-out duration-100 hover:text-red no-underline"
                            >
                                *
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="text-red"
                                to="exitement"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-crosshair ease-in-out duration-100 hover:text-red no-underline"
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

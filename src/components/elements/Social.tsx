import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'
const SvgContainer = lazy(() => import('./SvgContainer'))
const Linkedin = lazy(() => import('../svg/Linkedin'))
const Github = lazy(() => import('../svg/Github'))
const ModeToggle = lazy(() => import('../elements/ModeToggle'))

const Social = () => (
    <Suspense fallback={Renderloader()}>
        <div className="fixed left-0 bottom-0 m-4 p-2 rounded-3xl shadow-xl backdrop-blur-sm ease-in-out duration-100 border-white border-solid border-2">
            <div className="flex items-center">
                <div className="mx-2">
                    <a
                        rel="noopener noreferrer"
                        aria-label="Github"
                        target="_blank"
                        href="https://github.com/pieter-rees"
                    >
                        <SvgContainer svg={<Github />} />
                    </a>
                </div>

                <div className="mx-2">
                    <a
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                        target="_blank"
                        href="https://www.linkedin.com/in/pieter-rees-1299a52a/"
                    >
                        <SvgContainer svg={<Linkedin />} />
                    </a>
                </div>
                <span className="relative mx-2">
                    <span className="absolute bg-grey block w-px h-full border-solid border-grey border-1"></span>
                </span>
                <div className="mx-2 flex items-center">
                    <a
                        rel="noopener noreferrer"
                        aria-label="Email"
                        target="_blank"
                        href="mailto:pieter@pieterrees.nl"
                        className="ease-in-out duration-100 text-sm text-black dark:text-white hover:text-red font-bold"
                    >
                        pieter@pieterrees.nl
                    </a>
                </div>
                <div className="mx-2">
                    <ModeToggle />
                </div>
            </div>
        </div>
    </Suspense>
)

export default Social

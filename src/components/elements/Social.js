import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'
const SvgContainer = lazy(() => import('./SvgContainer'))
const Linkedin = lazy(() => import('../svg/Linkedin'))
const Github = lazy(() => import('../svg/Github'))
const ModeToggle = lazy(() => import('../elements/ModeToggle'))

const Social = (props) => (
    <Suspense fallback={Renderloader()}>
        <div className="fixed left-0 bottom-0 m-4 p-2 lg:px-4 xl:px-6 rounded-3xl shadow-xl backdrop-blur-sm ease-in-out duration-100 border-white border-solid border">
            <div className="flex items-center">
                <div className="mx-2">
                    <ModeToggle />
                </div>
                <div className="mx-2">
                    <a
                        aria-label="Github"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/pieter-rees"
                    >
                        <SvgContainer svg={<Github />} color="white" />
                    </a>
                </div>

                <div className="mx-2">
                    <a
                        aria-label="Linkedin"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/pieter-rees-1299a52a/"
                    >
                        <SvgContainer svg={<Linkedin />} color="white" />
                    </a>
                </div>
                <span className="relative mx-2">
                    <span className="absolute bg-white block w-px h-full border-solid border-white border-1"></span>
                </span>
                <div className="mx-2 flex items-center">
                    <a
                        aria-label="Email"
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:pieter@pieterrees.nl"
                        className="ease-in-out duration-100 text-sm hover:text-red font-bold"
                    >
                        pieter@pieterrees.nl
                    </a>
                </div>
            </div>
        </div>
    </Suspense>
)

export default Social

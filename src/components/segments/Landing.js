import { lazy, Suspense } from 'react'

import Renderloader from '../elements/Renderloader'
// import { Link } from 'react-router-dom'
const Title = lazy(() => import('../elements/Title'))

const Landing = () => (
    <Suspense fallback={Renderloader()}>
        <div id="landing" className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <Title large={true} title={'Pieter Rees'} />
                <Title title={'I make web things, and more'} />

                {/* <h1 className="text-center text-black dark:text-white">
                    Pieter
                    <Link to="/resume" className="no-underline">
                        {' '}
                        R
                    </Link>
                    ees
                </h1> */}
                {/* <h2 className="text-center text-black mt-8 text-4xl dark:text-white">
                    I make
                    <span className="dark:text-white"> web </span>
                    things, and more
                </h2> */}
            </div>
        </div>
    </Suspense>
)

export default Landing

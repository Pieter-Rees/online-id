import React from 'react'
import '../../App.css'
import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Container = lazy(() => import('../elements/Container'))
const ResumeContent = lazy(() => import('../segments/ResumeContent'))
const Social = lazy(() => import('../elements/Social'))

function App() {
    return (
        <div className="dark:bg-black">
            <Suspense fallback={Renderloader()}>
                <Social />

                {/* <Container fullHeight={true} content={<ResumeLanding />} /> */}

                <Container content={<ResumeContent />} />
            </Suspense>
        </div>
    )
}

export default App

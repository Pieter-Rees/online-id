import '../../App.css'
import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const Container = lazy(() => import('../elements/Container'))
const ResumeLanding = lazy(() => import('../segments/ResumeLanding'))
// const ResumeContent = lazy(() => import('../segments/ResumeContent'))
const Social = lazy(() => import('../elements/Social'))

function App() {
    return (
        <div className="dark:bg-black">
            <Suspense fallback={Renderloader()}>
                <Social />

                <Container fullHeight={true} content={<ResumeLanding />} />

                {/* <Container fullHeight={true} content={<ResumeContent />} /> */}
            </Suspense>
        </div>
    )
}

export default App

//Todo: Implement hidden resume ;)

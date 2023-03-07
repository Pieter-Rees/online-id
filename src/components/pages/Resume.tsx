import { Suspense, lazy } from 'react'
import '../../App.css'
import Renderloader from '../elements/Renderloader'
import Container from '../elements/Container'
import ResumeLanding from '../segments/ResumeLanding'
// const Container = lazy(async () => await import('../elements/Container'))
// const ResumeLanding = lazy(async () => await import('../segments/ResumeLanding'))
import ResumeContent from '../segments/ResumeContent'
const Social = lazy(async () => await import('../elements/Social'))

function App() {
    return (
        <div className='dark:bg-black'>
            <Suspense fallback={Renderloader()}>
                <Social />
                <Container content={<ResumeLanding />} fullHeight={true} />
                <Container content={<ResumeContent />} fullHeight={true} />
            </Suspense>
        </div>
    )
}

export default App

// Todo: Implement hidden resume ;)

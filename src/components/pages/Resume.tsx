import '../../App.css'
import { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const Container = lazy(async () => await import('../elements/Container'))
const ResumeLanding = lazy(async () => await import('../segments/ResumeLanding'))
// const ResumeContent = lazy(() => import('../segments/ResumeContent'))
const Social = lazy(async () => await import('../elements/Social'))

function App () {
  return (
        <div className='dark:bg-black'>
            <Suspense fallback={Renderloader()}>
                <Social />

                <Container content={<ResumeLanding />} fullHeight={true} />

                {/* <Container fullHeight={true} content={<ResumeContent />} /> */}
            </Suspense>
        </div>
  )
}

export default App

// Todo: Implement hidden resume ;)

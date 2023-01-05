import React, { Suspense, lazy } from 'react'
import '../../App.css'
import Renderloader from '../elements/Renderloader'

// const Container = lazy(async () => await import('../elements/Container'))
// const ResumeLanding = lazy(async () => await import('../segments/ResumeLanding'))
// const ResumeContent = lazy(() => import('../segments/ResumeContent'))
const Social = lazy(async () => await import('../elements/Social'))

function App() {
  return (
    <div className='dark:bg-black'>
      <Suspense fallback={Renderloader()}>
        <Social />
        {/* <Container content={<ResumeLanding />} fullHeight={true} /> */}
      </Suspense>
    </div>
  )
}

export default App

// Todo: Implement hidden resume ;)

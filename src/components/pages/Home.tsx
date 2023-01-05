import React, { Suspense, lazy } from 'react'
import '../../App.css'

import Renderloader from '../elements/Renderloader'

const About = lazy(async () => await import('../segments/About'))
const Landing = lazy(async () => await import('../segments/Landing'))
const Skills = lazy(async () => await import('../segments/Skills'))
const Exitement = lazy(async () => await import('../segments/Exitement'))
const Work = lazy(async () => await import('../segments/Work'))
const Footer = lazy(async () => await import('../segments/Footer'))
const Social = lazy(async () => await import('../elements/Social'))
const Navigation = lazy(async () => await import('../elements/Navigation'))
const Hr = lazy(async () => await import('../elements/Hr'))
const Container = lazy(async () => await import('../elements/Container'))
const Test = lazy(async () => await import('../elements/Test'))

function App () {
  return (
        <div className='dark:bg-black'>
            <Suspense fallback={Renderloader()}>
                <Social />
                <Navigation />
                <Test />
                <Container content={<Landing />} fullHeight={true} />
                <Container content={<About />} fullHeight={false} />
                <Hr />
                <Container content={<Skills />} fullHeight={false} />
                <Hr />
                <Container content={<Exitement />} fullHeight={false} />
                <Hr />
                <Container content={<Work />} fullHeight={false} />
                <Hr />
                <Footer />
            </Suspense>
        </div>
  )
}

export default App

import React from 'react'
import '../../App.css'
import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const About = lazy(() => import('../segments/About'))
const Landing = lazy(() => import('../segments/Landing'))
const Skills = lazy(() => import('../segments/Skills'))
const Exitement = lazy(() => import('../segments/Exitement'))
const Work = lazy(() => import('../segments/Work'))
const Footer = lazy(() => import('../segments/Footer'))
const Social = lazy(() => import('../elements/Social'))
const Navigation = lazy(() => import('../elements/Navigation'))
const Hr = lazy(() => import('../elements/Hr'))
const Container = lazy(() => import('../elements/Container'))

function App() {
    return (
        <div className="dark:bg-black">
            <Suspense fallback={Renderloader()}>
                <Social />
                <Navigation />
                <Container fullHeight={true} content={<Landing />} />
                <Container smallContainer={true} content={<About />} />
                <Hr />

                <Container content={<Skills />} />
                <Hr />

                <Container content={<Exitement />} />
                <Hr />

                <Container content={<Work />} />
                <Hr />

                <Footer />
            </Suspense>
        </div>
    )
}

export default App

import '../../App.css'
import { lazy, Suspense } from 'react'
import Renderloader from '../elements/Renderloader'

const About = lazy(() => import('../segments/About'))
const Landing = lazy(() => import('../segments/Landing'))
const Skills = lazy(() => import('../segments/Skills'))
const Hobbys = lazy(() => import('../segments/Hobbys'))
const Work = lazy(() => import('../segments/Work'))
const Footer = lazy(() => import('../segments/Footer'))
const Social = lazy(() => import('../elements/Social'))
const Hr = lazy(() => import('../elements/Hr'))
const Container = lazy(() => import('../elements/Container'))

function App() {
    return (
        <Suspense fallback={Renderloader()}>
            <div>
                <Social />
                <Container fullHeight={true} content={<Landing />} />
                <Container smallContainer={true} content={<About />} />
                <Hr />

                <Container content={<Skills />} />
                <Hr />

                <Container content={<Hobbys />} />
                <Hr />

                <Container content={<Work />} />
                <Hr />

                <Footer />
            </div>
        </Suspense>
    )
}

export default App

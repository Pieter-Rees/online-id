import './App.css'
import Navigation from './components/Navigation'
import Landing from './components/segments/Landing'
import About from './components/segments/About'
import Skills from './components/segments/Skills'
import Hobbys from './components/segments/Hobbys'
import Work from './components/segments/Work'
import Footer from './components/Footer'
import Container from './components/Container'
import Hr from './components/elements/Hr'

function App() {
    return (
        <div className="bg-white">
            <Navigation />
            <Container fullHeight={true} content={<Landing />} />
            <Container content={<About />} />
            <Hr />

            <Container content={<Skills />} />
            <Hr />

            <Container content={<Hobbys />} />
            <Hr />

            <Container content={<Work />} />
            <Hr />

            <Footer />
        </div>
    )
}

export default App

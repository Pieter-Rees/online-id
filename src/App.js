import './App.css'
import Navigation from './components/Navigation'
import Landing from './components/segments/Landing'
import About from './components/segments/About'
import Skills from './components/segments/Skills'
import Hobbys from './components/segments/Hobbys'
import Work from './components/segments/Work'
import Footer from './components/Footer'
import Container from './components/Container'

function App() {
    return (
        <div className="bg-white">
            <Navigation />
            <Landing />
            <Container content={<About />} />
            <Container content={<Skills />} />
            <Container content={<Hobbys />} />
            <Container content={<Work />} />
            <Footer />
        </div>
    )
}

export default App

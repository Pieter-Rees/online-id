import './App.css'
import Landing from './components/segments/Landing'
import About from './components/segments/About'
import Skills from './components/segments/Skills'
import Hobbys from './components/segments/Hobbys'
import Work from './components/segments/Work'
import Footer from './components/Footer'
import Container from './components/elements/Container'

function App() {
    return (
        <div>
            <Container fullHeight={true} content={<Landing />} />
            <Container smallContainer={true} content={<About />} />
            <Container content={<Skills />} />
            <Container content={<Hobbys />} />
            <Container content={<Work />} />
            <Footer />
        </div>
    )
}

export default App

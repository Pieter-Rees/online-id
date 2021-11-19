import './App.css'
import Navigation from './components/Navigation'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Hobbys from './components/Hobbys'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
    return (
        <div className="container mx-auto">
            <Navigation />
            <Landing />
            <About />
            <Skills />
            <Hobbys />
            <Work />
            <Footer />
        </div>
    )
}

export default App

import '../../App.css'
import Landing from '../segments/Landing'
import About from '../segments/About'
import Skills from '../segments/Skills'
import Hobbys from '../segments/Hobbys'
import Work from '../segments/Work'
import Social from '../elements/Social'
import Footer from '../Footer'
import Container from '../elements/Container'

function App() {
    return (
        <div className="px-16">
            <Social />
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

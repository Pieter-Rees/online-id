import '../../App.css'
import Landing from '../segments/Landing'
import About from '../segments/About'
import Skills from '../segments/Skills'
import Hobbys from '../segments/Hobbys'
import Work from '../segments/Work'
import Social from '../elements/Social'
import Footer from '../segments/Footer'
import Container from '../elements/Container'
import Hr from '../elements/Hr'

function App() {
    return (
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
    )
}

export default App

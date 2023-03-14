import '../../App.css';

import About from '../segments/About';
import Container from '../elements/Container';
import Exitement from '../segments/Exitement';
import Footer from '../segments/Footer';
import Hr from '../elements/Hr';
import Landing from '../segments/Landing';
import Navigation from '../elements/Navigation';
import Skills from '../segments/Skills';
import Social from '../elements/Social';
import Work from '../segments/Work';

function App() {
    return (
        <div className='dark:bg-black'>
            <Social />
            <Navigation />
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
        </div>
    );
}

export default App;

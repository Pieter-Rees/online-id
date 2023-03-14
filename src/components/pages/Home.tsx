import '../../App.css';

import Container from '../elements/Container';
import Hr from '../elements/Hr';
import Navigation from '../elements/Navigation';
import Social from '../elements/Social';
import About from '../segments/About';
import Exitement from '../segments/Exitement';
import Footer from '../segments/Footer';
import Landing from '../segments/Landing';
import Skills from '../segments/Skills';
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

import '../../App.css';

import { Link } from 'react-router-dom';
import About from '../segments/About';
import Container from '../elements/Container';
import Exitement from '../segments/Exitement';
import Footer from '../segments/Footer';
import Hr from '../elements/Hr';
import Landing from '../segments/Landing';
import Navigation from '../elements/Navigation';
import Skills from '../segments/Skills';
import Social from '../elements/Social';
import SvgContainer from '../elements/SvgContainer';
import Tag from '../svg/Tag';
import Work from '../segments/Work';

function App() {
    return (
        <div className='dark:bg-black'>
            <div className='fixed top-0 h-full w-full'>
                <div className=' top-plane'></div>
                <div className='bottom-plane'></div>
            </div>
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
            <div className='fixed left-4 top-4 z-1000'>
                <Link to='/resume'>
                    <SvgContainer color='grey' size='small' svg={<Tag />} />
                </Link>
            </div>
        </div>
    );
}

export default App;

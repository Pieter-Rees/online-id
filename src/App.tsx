import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import ReactGA from 'react-ga';
import Resume from './components/pages/Resume';

ReactGA.initialize('UA-156298268-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Resume />} path='/resume' />
            </Routes>
        </>
    );
}

export default App;

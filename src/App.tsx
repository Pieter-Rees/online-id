import { Route, Routes } from 'react-router-dom';
import './App.css';

import ReactGA from 'react-ga';
import Home from './components/pages/Home';
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

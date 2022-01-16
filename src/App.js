import './App.css'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'

import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}

export default App

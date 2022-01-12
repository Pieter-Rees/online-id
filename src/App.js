import './App.css'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import ModeToggle from './components/elements/ModeToggle'

import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <ModeToggle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>
    )
}

export default App

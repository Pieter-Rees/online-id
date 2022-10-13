import React from 'react'
import './App.css'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import { Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-156298268-1')
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume/" element={<Resume />} />
        </Routes>
    )
}

export default App

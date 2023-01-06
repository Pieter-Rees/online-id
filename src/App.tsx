import './App.css'

import React from 'react'
import ReactGA from 'react-ga'
import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Resume from './components/pages/Resume'

ReactGA.initialize('UA-156298268-1')
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Resume />} path='/' />
        </Routes>
    )
}

export default App

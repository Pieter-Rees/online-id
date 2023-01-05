import './App.css'

import React, { useState } from 'react'
import ReactGA from 'react-ga'
import { Route, Routes } from 'react-router-dom'

import Protected from './components/elements/Protected'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'

ReactGA.initialize('UA-156298268-1')
ReactGA.pageview(window.location.pathname + window.location.search)

function App () {
  return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route
                action={async ({ params, request }) => {
                  const res = await fetch(`/api/properties/${params.id}`, {
                    method: 'put',
                    body: await request.formData()
                  })
                  if (!res.ok) throw res
                  return { ok: true }
                }}
                element={
                    <Protected isAuthenticated={true}>
                        <Resume />
                    </Protected>
                }
                path='/resume'
            />
        </Routes>
  )
}

export default App

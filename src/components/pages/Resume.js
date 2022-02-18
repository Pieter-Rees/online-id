import React from 'react'

import '../../App.css'
import Social from '../elements/Social'
import axios from 'axios'

const baseURL = 'https://pietserver.nl:5050/api/resume/'

function App() {
    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
        })
    }, [])

    if (!post) return null

    return (
        <div className="px-16">
            <Social />
        </div>
    )
}

export default App

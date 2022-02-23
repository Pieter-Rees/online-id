import React from 'react'

import '../../App.css'
import axios from 'axios'

const baseURL = 'http://localhost:5050/resume/'

export default class Resume extends React.Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get(baseURL).then((response) => {
            const posts = response.data
            this.setState({ posts: posts })
        })
        debugger
    }

    render() {
        return (
            <div className="col">
                {this.state.posts.map((post, i) => (
                    <div key={i}>
                        <div>{post.name}</div>
                        <div>{post.age}</div>
                        <ul>
                            {post.powers.map((power) => (
                                <li>{power.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

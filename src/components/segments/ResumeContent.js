import React from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:5050/resume/'

export default class Resume extends React.Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios
            .get(baseURL, {
                auth: {
                    username: 'ben',
                    password: 'my-favorite-password', // Bad password
                },
            })
            .then((response) => {
                const posts = response.data
                this.setState({ posts: posts })
            })
    }

    render() {
        return (
            <div className="col">
                {this.state.posts.map((post, i) => (
                    <div key={i}>
                        <h4 className="text-black dark:text-white">
                            {post.title}
                        </h4>
                        <h5>{post.subTitle}</h5>
                        <ul>
                            {post.powers.map((power, i) => (
                                <li key={i}>{power.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

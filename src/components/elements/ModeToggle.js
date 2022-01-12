// function ToggleMode() {
//     console.log(localStorage.theme)
//     return localStorage.theme
// }

// const ModeToggle = () => <ToggleMode />

// export default ModeToggle
import React, { Component } from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }))
        if (!this.state.isToggleOn) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            document.documentElement.classList.remove('light')
        } else {
            document.documentElement.classList.add('light')
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        }
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

const ToggleTheme = () => <Toggle />
export default ToggleTheme

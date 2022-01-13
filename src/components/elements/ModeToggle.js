import React from 'react'
import SvgContainer from './SvgContainer'
import Moon from '../svg/Moon'
import Sun from '../svg/Sun'

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
            <button
                className="flex justify-center items-center"
                onClick={this.handleClick}
            >
                {this.state.isToggleOn ? (
                    <SvgContainer size="xsmall" color="white" svg=<Moon /> />
                ) : (
                    <SvgContainer size="xsmall" color="white" svg=<Sun /> />
                )}
            </button>
        )
    }
}

const ToggleTheme = () => <Toggle />
export default ToggleTheme

import React from 'react'
import SvgContainer from './SvgContainer'
import Moon from '../svg/Moon'
import Sun from '../svg/Sun'

typeof IProps = { }

interface IState {
  isToggleOn?: boolean
}

class Toggle extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { isToggleOn: false }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    // if (localStorage.theme === 'light') {
    //     document.documentElement.classList.add('light')
    //     this.state.isToggleOn = true
    // } else {
    //     this.state.isToggleOn = false
    //     document.documentElement.classList.add('dark')
    // }
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))

    if (this.state.isToggleOn) {
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
      <button className='flex justify-center items-center' onClick={this.handleClick}>
        {this.state.isToggleOn
          ? (
            <div>
              <SvgContainer svg=<Moon /> />
            </div>
          )
          : (
            <div>
              <SvgContainer svg=<Sun /> />
            </div>
          )}
      </button>
    )
  }
}

const ToggleTheme = () => <Toggle />
export default ToggleTheme

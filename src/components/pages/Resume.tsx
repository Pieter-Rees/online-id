import { Suspense, lazy } from 'react'
import '../../App.css'
import Renderloader from '../elements/Renderloader'
const Container = lazy(async () => await import('../elements/Container'))
const ResumeLanding = lazy(async () => await import('../segments/ResumeLanding'))
const ResumeContent = lazy(async () => await import('../segments/ResumeContent'))
const Social = lazy(async () => await import('../elements/Social'))
const Footer = lazy(async () => await import('../segments/Footer'))
const Wall = lazy(async () => await import('../elements/Wall'))

import { useState } from 'react'
function Resume() {
    const [state, setState] = useState(false)
    const [password, setPassword] = useState('')

    debugger

    const logIn = () => {
        setState(true)
    }
    const logOut = () => {
        setState(false)
    }

    return (
        <div className='dark:bg-black'>
            <Suspense fallback={Renderloader()}>
                {!state ? <Wall setPassword={setPassword} stateChanger={setState} /> : null}
                {password}
                {state ? <>
                    <Social />
                    <button onClick={logOut}>Logout</button>

                    <Container content={<ResumeLanding />} fullHeight={true} />
                    {state ? (
                        <Container
                            content={<ResumeContent isLoggedIn={state} />}
                            fullHeight={true}
                        />
                    ) : null}

                    <Footer />
                </> : null}
            </Suspense>
        </div>
    )
}

export default Resume

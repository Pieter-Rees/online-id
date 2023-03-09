import { Suspense, lazy } from 'react'
import '../../App.css'
import Renderloader from '../elements/Renderloader'
const Container = lazy(async () => await import('../elements/Container'))
const ResumeLanding = lazy(async () => await import('../segments/ResumeLanding'))
const ResumeContent = lazy(async () => await import('../segments/ResumeContent'))
const Social = lazy(async () => await import('../elements/Social'))
const Footer = lazy(async () => await import('../segments/Footer'))
import { useState } from 'react'

function Resume() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const logIn = () => {
        setisLoggedIn(true)
    }
    const logOut = () => {
        setisLoggedIn(false)
    }
    return (
        <div className='dark:bg-black'>
            <Suspense fallback={Renderloader()}>
                <Social />
                {isLoggedIn ? (
                    <button onClick={logOut}>Logout</button>
                ) : (
                    <button onClick={logIn}>Login</button>
                )}
                <Container content={<ResumeLanding />} fullHeight={true} />
                <Container
                    content={<ResumeContent isLoggedIn={isLoggedIn} />}
                    fullHeight={isLoggedIn}
                />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Resume

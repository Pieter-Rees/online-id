import { Link } from 'react-router-dom'
import Test from '../elements/Test'

const Landing = () => (
    <div className="h-full flex items-center">
        <h2 className="text-center flex-1">Developer</h2>
        <Test />
        <div className="absolute top-8 left-8">
            <h1 className="text-right">
                Pieter{' '}
                <Link className="no-underline" to="/resume">
                    R
                </Link>
                ees
            </h1>
        </div>
    </div>
)

export default Landing

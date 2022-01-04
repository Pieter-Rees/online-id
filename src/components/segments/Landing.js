import { Link } from 'react-router-dom'

const Landing = () => (
    <div className="flex justify-center h-full items-center flex-col mt-0 mb-4">
        <div className="p-12">
            <h1 className="my-8 text-center">
                Pieter{' '}
                <Link className="no-underline" to="/resume">
                    R
                </Link>
                ees
            </h1>
            <h2 className="my-8 text-center">Develops stuff</h2>
        </div>
    </div>
)

export default Landing

import { Link } from 'react-router-dom'

const Landing = () => (
    <div className="flex justify-center items-center h-full flex-col mt-0 mb-4">
        <div className="border-2 border-white p-12 rounded-3xl">
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

import Tag from './svg/Tag'

const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full section bg-white z-50 hide-on-print shadow-md">
        <div className="container mx-auto flex justify-center p-4">
            <a
                className="flex flex-1 justify-center items-center"
                href="mailto:pieter@pieterrees.nl"
            >
                Email
            </a>

            <div className="flex flex-1 justify-center items-center">
                <span className="cursor-crosshair">
                    <Tag />
                </span>
            </div>

            <a
                rel="noreferrer"
                href="https://github.com/Pieter-Rees"
                target="_blank"
                className="flex flex-1 justify-center items-center m-8"
            >
                Github
            </a>
        </div>
    </nav>
)

export default Navigation

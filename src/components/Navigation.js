import Tag from './svg/Tag'

const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full section bg-white z-50 hide-on-print shadow-md">
        <div className="container mx-auto flex justify-center p-4">
            <a
                v-if="!resume"
                className="flex flex-1 justify-center items-center"
                href="mailto:pieter@pieterrees.nl"
            >
                mail
            </a>

            <div className="flex flex-1 justify-center items-center">
                <span className="cursor-crosshair">
                    <Tag />
                </span>
            </div>

            <a
                v-if="!resume"
                href="tel:+31612589043"
                className="flex flex-1 justify-center items-center"
            >
                Phone
            </a>
        </div>
    </nav>
)

export default Navigation

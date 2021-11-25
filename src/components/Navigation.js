import Email from './svg/Email'
import Github from './svg/Github'
import Tag from './svg/Tag'
import SvgContainer from './svg/SvgContainer'

const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 hide-on-print shadow-md">
        <div className="container mx-auto flex justify-center">
            <a
                className="flex flex-1 justify-center items-center"
                href="mailto:pieter@pieterrees.nl"
            >
                <SvgContainer svg={<Email />} />
            </a>

            <div className="flex flex-1 justify-center items-center">
                <span className="cursor-crosshair">
                    <SvgContainer svg={<Tag />} />
                </span>
            </div>

            <a
                rel="noreferrer"
                href="https://github.com/Pieter-Rees"
                target="_blank"
                className="flex flex-1 justify-center items-center m-8"
            >
                <SvgContainer svg={<Github />} />
            </a>
        </div>
    </nav>
)

export default Navigation

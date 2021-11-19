const Navigation = () => (
    <div className="fixed h-96 bg-red">
        <div className="w-12/12 flex justify-center items-center h-full flex-col">
            <nav className="fixed top-0 left-0 w-full section bg-darkBlue z-50 hide-on-print">
                <div className="container mx-auto flex justify-center p-4">
                    <a
                        v-if="!resume"
                        className="flex flex-1 justify-center items-center"
                        href="mailto:pieter@pieterrees.nl"
                    >
                        mail
                    </a>

                    <div className="flex flex-1 justify-center items-center">
                        <span className="cursor-crosshair" to="/">
                            tag
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
        </div>
    </div>
)

export default Navigation

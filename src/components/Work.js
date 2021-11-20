import Availability from './elements/Availability'

const Work = () => (
    <section className="container mx-auto my-24">
        <h2 className="mb-6">Work?!</h2>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <p>
                    Currently I am working @ GoodUp. We provide The #1 tech
                    solution for activating employees on your company purpose. I
                    am always up for a nice talk about innovative ideas. Please
                    drop me a line via E-mail.
                </p>
                <Availability />
            </div>
            <div>
                <a
                    href="tel:+31612589043"
                    className="flex flex justify-center align-center"
                >
                    <div className="w-32 h-32 flex overflow-hidden rounded-full shadow-xl">
                        <div className="w-full h-auto">
                            <img
                                alt="Gif of ringing phone. Lol"
                                className="h-full"
                                data-src="//pieterrees.nl/gif/phone.gif"
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
)

export default Work

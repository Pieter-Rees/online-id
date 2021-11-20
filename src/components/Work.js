import Availability from './elements/Availability'

const Work = () => (
    <section className="grid grid-cols-2 gap-4">
        <div className="flex lg:justify-center">
            <h2 className="mb-6">Work?!</h2>
        </div>
        <div className="my-8">
            <div className="w-6/6 flex justify-center items-start h-full flex-col">
                <p>
                    Currently I am working @ GoodUp. We provide The #1 tech
                    solution for activating employees on your company purpose. I
                    am always up for a nice talk about innovative ideas. Please
                    drop me a line via E-mail.
                </p>
                <p>
                    <Availability />
                </p>
                <a
                    href="tel:+31612589043"
                    className="flex align-center w-auto self-center"
                >
                    <div className="w-32 h-32 flex overflow-hidden rounded-full mt-8 self-center shadow-xl">
                        <div
                            v-lazy-container="{ selector: 'img' }"
                            className="w-full h-auto"
                        >
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

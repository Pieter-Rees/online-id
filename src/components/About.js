const About = () => (
    <section className="row h-full mx-auto">
        <section className="w-12/12 flex justify-center items-center h-full flex-col">
            <div className="container mx-auto h-full origin-center">
                <div className="row flex lg:justify-center">
                    <h2 className="mb-6">The guy</h2>
                </div>
                <div className="row my-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-1 mb-6 lg:mb-0 self-center justify-center">
                            <div className="flex overflow-hidden h-64 justify-center">
                                <div className="shadow-huge h-48 w-48 rounded-full overflow-hidden flex justify-center align-center">
                                    <picture>
                                        <source
                                            type="image/webp"
                                            alt="Pieter's head"
                                        />
                                        <img
                                            src="/img/p.jpg"
                                            alt="Pieter's head"
                                            className="h-48 w-48"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 pr-8">
                            <p>
                                My name is Pieter Rees. I am a Developer with
                                full stack experience and a huge interest for
                                everything that is related to electronics and
                                technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
)

export default About

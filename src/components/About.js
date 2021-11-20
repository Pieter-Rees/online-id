const About = () => (
    <section className="container mx-auto my-24">
        <h2>This guy..</h2>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex lg:mb-0 self-center justify-center">
                <div className="flex overflow-hidden h-64 justify-center">
                    <div className="shadow-medium h-48 w-48 rounded-full overflow-hidden flex justify-center align-center">
                        <picture>
                            <source type="image/webp" alt="Pieter's head" />
                            <img
                                src="/img/p.jpg"
                                alt="Pieter's head"
                                className="h-48 w-48"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="pr-8">
                <p>
                    My name is Pieter Rees. I am a Developer with full stack
                    experience and a huge interest for everything that is
                    related to electronics and technology.
                </p>
            </div>
        </div>
    </section>
)

export default About

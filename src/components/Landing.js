const Landing = () => (
    <section className="row h-screen mx-auto">
        <div className="w-12/12 flex justify-center items-center h-full flex-col text-base font-light leading-relaxed mt-0 mb-4 text-lightBlue-800">
            <div>
                <h1 className="text-center">Pieter Rees</h1>
                <h3 className="text-center">Develops stuff</h3>

                <div className="flex">
                    <a
                        href="mailto:pieter@pieterrees.nl"
                        className="flex flex-1 justify-center items-center m-8"
                        rel="noreferrer"
                    >
                        mail
                    </a>

                    <a
                        href="tel:+31612589043"
                        className="flex flex-1 justify-center items-center m-8"
                        rel="noreferrer"
                    >
                        Phone
                    </a>
                    {/* <a
                        rel="noreferrer"
                        href="https://github.com/Pieter-Rees"
                        target="_blank"
                        className="flex flex-1 justify-center items-center m-8"
                    ></a> */}
                </div>
            </div>
        </div>
    </section>
)

export default Landing

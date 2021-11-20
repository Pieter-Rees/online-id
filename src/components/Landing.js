const Landing = () => (
    <section className="h-screen mx-auto">
        <div className="w-12/12 flex justify-center items-center h-full flex-col mt-0 mb-4">
            <div>
                <h1 className="text-center">Pieter Rees</h1>
                <h2 className="text-center">Develops stuff</h2>

                <div className="flex">
                    <a
                        href="mailto:pieter@pieterrees.nl"
                        className="flex flex-1 justify-center items-center m-8"
                        rel="noreferrer"
                    >
                        mail
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://github.com/Pieter-Rees"
                        target="_blank"
                        className="flex flex-1 justify-center items-center m-8"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default Landing

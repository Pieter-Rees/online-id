const Landing = () => (
    <div class="container h-full mx-auto">
        <div class="row h-full">
            <div class="w-12/12 flex justify-center items-center h-full flex-col">
                <div>
                    <h1 class="text-center md:text-6xl">Pieter Rees</h1>
                    <h3 class="text-center">Develops stuff</h3>

                    <div class="flex lg:m-16">
                        <a
                            href="mailto:pieter@pieterrees.nl"
                            class="flex flex-1 justify-center items-center m-8"
                        >
                            <mail class="h-8 w-8 lg:h-16 lg:w-16" />
                        </a>

                        <a
                            href="tel:+31612589043"
                            class="flex flex-1 justify-center items-center m-8"
                        >
                            <phone class="h-8 w-8 lg:h-16 lg:w-16" />
                        </a>
                        <a
                            href="https://github.com/Pieter-Rees"
                            target="_blank"
                            class="flex flex-1 justify-center items-center m-8"
                        >
                            <github class="h-8 w-8 lg:h-16 lg:w-16" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Landing

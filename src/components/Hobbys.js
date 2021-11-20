const Hobbys = () => (
    <section className="container h-full mx-auto my-24">
        <div className="w-12/12 flex justify-center items-center h-full flex-col">
            <div className="container mx-auto h-full">
                <div className="w-full flex flex-col lg:justify-center">
                    <div className="w-full flex">
                        <h2 className="mb-6">I like</h2>
                    </div>
                </div>
                <div className="flex lg:flex-row-reverse flex-1">
                    <div className="w-full lg:w-2/6 flex justify-center items-center flex-col self-center  lg:mt-0">
                        <svg
                            className="fill-current h-32 w-32 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                        >
                            <path d="M29 39c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.201.542 2.266 1.382 3A3.974 3.974 0 0021 45c0 2.206 1.794 4 4 4s4-1.794 4-4a3.974 3.974 0 00-1.382-3A3.974 3.974 0 0029 39zm-2 6c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-4-6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zM31 37h2v2h-2zM31 44h2v2h-2zM39 35c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4s4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-1.103.897-2 2-2s2 .897 2 2zM49 35c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4s4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-1.103.897-2 2-2s2 .897 2 2zM15 35c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4s4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-1.103.897-2 2-2s2 .897 2 2z" />
                            <path d="M57 31H7c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h50c1.103 0 2-.897 2-2V33c0-1.103-.897-2-2-2zM7 51V33h50l.002 18z" />
                            <path d="M58 27H37v-1c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v1h-2v-1c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v1H6c-2.757 0-5 2.243-5 5v20a5.01 5.01 0 004 4.899V58c0 2.757 2.243 5 5 5h44c2.757 0 5-2.243 5-5v-1.101A5.009 5.009 0 0063 52V32c0-2.757-2.243-5-5-5zm-33-1a1 1 0 011-1h8a1 1 0 011 1v1H25zM9 26a1 1 0 011-1h8a1 1 0 011 1v1H9zm45 35H10c-1.654 0-3-1.346-3-3v-1h50v1c0 1.654-1.346 3-3 3zm7-9c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V32c0-1.654 1.346-3 3-3h52c1.654 0 3 1.346 3 3zM46 20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            <path d="M53.242 17.172l4.243-4.243-.707-.707C54.701 10.144 51.938 9 49 9s-5.701 1.144-7.778 3.222l-.707.707 4.243 4.243.707-.707C46.409 15.521 47.665 15 49 15s2.591.521 3.535 1.465zm-8.434-2.778l-1.426-1.426a9.016 9.016 0 0111.236 0l-1.426 1.426C51.989 13.489 50.532 13 49 13s-2.989.489-4.192 1.394z" />
                            <path d="M39.808 10.808C42.263 8.353 45.527 7 49 7s6.737 1.353 9.192 3.808l.707.707 4.242-4.242-.707-.707C58.846 2.977 54.075 1 49 1s-9.846 1.977-13.435 5.565l-.707.707 4.242 4.242zM49 3a16.87 16.87 0 0111.293 4.293l-1.417 1.416C56.142 6.311 52.672 5 49 5s-7.142 1.311-9.876 3.709l-1.417-1.416A16.87 16.87 0 0149 3z" />
                        </svg>
                    </div>
                    <div className="w-full lg:w-4/6 flex justify-center items-start h-full flex-col">
                        <h3 className="mb-6">IOT</h3>
                        <p>
                            I enjoy myself with almost everything that has an IP
                            address. From single board computers to home
                            automation systems, I love it all.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col lg:flex-row  flex-1">
                    <div className="w-full lg:w-4/6 flex justify-start items-start h-full flex-col">
                        <h3 className="mb-6">RC</h3>
                        <p>
                            If it is controllable from a distance, I love it. I
                            am interested DIY drone building and everything
                            related.
                        </p>
                    </div>
                    <div className="w-full lg:w-2/6 flex justify-center items-start h-full flex-col items-center  lg:mt-0 lg:self-center">
                        <svg
                            className="fill-current h-32 w-32"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M343.028 190.794l-9.068-12.306c-2.387-3.239-6.95-3.929-10.189-1.544-3.24 2.388-3.931 6.95-1.544 10.189l9.068 12.306c1.429 1.938 3.636 2.965 5.872 2.965 1.501 0 3.016-.463 4.317-1.421 3.24-2.388 3.931-6.949 1.544-10.189zM367.555 190.794l-9.067-12.306c-2.387-3.239-6.947-3.929-10.189-1.544-3.239 2.387-3.931 6.949-1.544 10.189l9.067 12.306c1.429 1.938 3.636 2.965 5.872 2.965 1.501 0 3.015-.463 4.317-1.421 3.239-2.387 3.931-6.949 1.544-10.189zM316.81 190.794l-9.068-12.306c-2.388-3.239-6.95-3.929-10.189-1.544-3.24 2.388-3.931 6.95-1.544 10.189l9.068 12.306c1.429 1.938 3.636 2.965 5.872 2.965 1.501 0 3.016-.463 4.317-1.421 3.24-2.388 3.931-6.949 1.544-10.189zM188.229 176.945c-3.238-2.385-7.8-1.695-10.189 1.544l-9.068 12.305c-2.387 3.239-1.696 7.801 1.544 10.189 1.301.958 2.816 1.421 4.317 1.421 2.236 0 4.443-1.027 5.872-2.965l9.068-12.306c2.386-3.238 1.696-7.8-1.544-10.188zM163.701 176.945c-3.24-2.385-7.801-1.695-10.189 1.544l-9.067 12.305c-2.387 3.24-1.695 7.802 1.544 10.189 1.302.958 2.816 1.421 4.317 1.421 2.236 0 4.443-1.027 5.872-2.965l9.067-12.306c2.387-3.24 1.695-7.802-1.544-10.188zM214.447 176.945c-3.238-2.385-7.801-1.695-10.189 1.544l-9.068 12.305c-2.387 3.239-1.696 7.801 1.544 10.189 1.301.958 2.816 1.421 4.317 1.421 2.236 0 4.443-1.027 5.872-2.965l9.068-12.306c2.387-3.238 1.696-7.8-1.544-10.188zM256 297.609c-11.25 0-20.402 9.153-20.402 20.402s9.152 20.402 20.402 20.402 20.402-9.153 20.402-20.402c0-11.25-9.153-20.402-20.402-20.402zm0 26.231c-3.214 0-5.829-2.615-5.829-5.829 0-3.214 2.615-5.829 5.829-5.829s5.829 2.615 5.829 5.829c0 3.214-2.615 5.829-5.829 5.829z" />
                            <path d="M494.512 164.294c9.642 0 17.488-7.845 17.488-17.488s-7.845-17.488-17.488-17.488h-54.801c-9.642 0-17.488 7.845-17.488 17.488s7.845 17.488 17.488 17.488h20.114v4.898h-33.284l-117.249-38.881c-5.139-1.706-10.493-2.57-15.913-2.57H218.62c-5.418 0-10.771.864-15.911 2.569l-117.25 38.882H52.175v-4.898h20.114c9.642 0 17.488-7.845 17.488-17.488s-7.845-17.488-17.488-17.488H17.488C7.845 129.32 0 137.164 0 146.807s7.845 17.488 17.488 17.488h20.114v4.898h-5.15c-11.75 0-21.308 9.559-21.308 21.308v10.907c0 13.666 11.118 24.784 24.784 24.784h75.754v45.717c0 4.025 3.262 7.287 7.287 7.287s7.287-3.262 7.287-7.287v-45.717h12.915l-8.547 143.494h-2.394c-1.088 0-1.973-.885-1.973-1.973v-58.64c0-4.025-3.262-7.287-7.287-7.287s-7.287 3.262-7.287 7.287v58.64c0 9.123 7.423 16.546 16.546 16.546h9.259c3.856 0 7.045-3.004 7.273-6.853l9.007-151.214h4.861c3.646 0 6.866 2.193 8.203 5.584 3.545 9.002 12.087 14.818 21.763 14.818h12.514v2.365c0 11.742 9.552 21.294 21.294 21.294h4.128v10.677h-5.663c-7.503 0-13.606 6.103-13.606 13.606v46.949c0 7.503 6.103 13.606 13.606 13.606h70.266c7.503 0 13.606-6.103 13.606-13.606v-46.949c0-7.503-6.103-13.606-13.606-13.606h-5.663v-10.677h4.128c11.742 0 21.294-9.552 21.294-21.294v-2.365h12.514c9.676 0 18.218-5.816 21.762-14.817 1.338-3.393 4.558-5.585 8.204-5.585h4.861l9.007 151.214c.229 3.849 3.417 6.853 7.273 6.853h9.259c9.123 0 16.546-7.423 16.546-16.546v-58.44c0-4.025-3.262-7.287-7.287-7.287s-7.287 3.262-7.287 7.287v58.44c0 1.088-.885 1.973-1.973 1.973h-2.394l-8.547-143.494h12.915v45.717c0 4.025 3.262 7.287 7.287 7.287s7.287-3.262 7.287-7.287v-45.717h75.754c13.666 0 24.784-11.118 24.784-24.784V190.5c0-11.75-9.559-21.308-21.308-21.308h-5.15v-4.898h20.112zM17.488 149.721c-1.607 0-2.915-1.307-2.915-2.915s1.307-2.915 2.915-2.915h54.801c1.607 0 2.915 1.307 2.915 2.915s-1.307 2.915-2.915 2.915H17.488zm272.678 145.782v45.015h-68.332v-45.015h68.332zm-49.063-14.573v-10.677h29.793v10.677h-29.793zm55.217-31.972c-.001 3.706-3.016 6.721-6.722 6.721h-67.195c-3.706 0-6.721-3.015-6.721-6.721v-2.365h80.638v2.365zm183.228-65.192c3.713 0 6.735 3.022 6.735 6.735v10.907c0 5.63-4.581 10.211-10.211 10.211h-122.7c-9.674 0-18.215 5.816-21.763 14.818-1.336 3.393-4.556 5.584-8.203 5.584H188.594c-3.647 0-6.867-2.192-8.204-5.585-3.546-9.001-12.088-14.817-21.762-14.817H35.927c-5.63 0-10.211-4.581-10.211-10.211V190.5c0-3.713 3.022-6.735 6.735-6.735h54.183c.779 0 1.554-.125 2.293-.37l118.368-39.253c3.657-1.213 7.468-1.828 11.324-1.828h74.761c3.857 0 7.666.615 11.324 1.829l118.367 39.252c.739.245 1.514.37 2.293.37h54.184zm-39.836-34.045c-1.607 0-2.915-1.307-2.915-2.915s1.307-2.915 2.915-2.915h54.801c1.607 0 2.915 1.307 2.915 2.915s-1.307 2.915-2.915 2.915h-54.801z" />
                        </svg>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col-reverse lg:flex-row-reverse flex-1">
                    <div className="lg:w-2/6 flex justify-center items-center flex-col self-center  lg:mt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current h-32 w-32"
                            viewBox="0 0 512 512"
                        >
                            <path d="M432 0H0v80h432V0zm-16 64H16V16h400v48z" />
                            <path d="M32 32h16v16H32zM64 32h16v16H64zM96 32h16v16H96zM16 96H0v320h240v-16H16zM416 96h16v136h-16zM496 382.248v-44.496l-27.928-6.984c-2.928-10.84-7.496-21.168-13.592-30.76l-13.504 8.584c6.008 9.44 10.272 19.704 12.672 30.504l1.072 4.832 25.28 6.32v19.504l-25.28 6.32-1.072 4.832c-2.4 10.8-6.664 21.064-12.672 30.504l-2.656 4.168 13.424 22.384-13.792 13.792-22.384-13.424-4.168 2.656c-9.44 6.008-19.704 10.272-30.504 12.672l-4.832 1.072L369.752 480h-19.504l-6.32-25.28-4.832-1.072c-10.8-2.4-21.064-6.664-30.504-12.672l-4.168-2.656-22.384 13.424-18.208-18.208-11.312 11.312 27.048 27.048 24.712-14.832c8.36 4.824 17.24 8.504 26.488 11L337.752 496h44.496l6.984-27.928c9.248-2.496 18.128-6.184 26.488-11l24.712 14.832 31.464-31.464-14.832-24.712c4.824-8.36 8.504-17.24 11-26.488L496 382.248z" />
                            <path d="M279.024 411.408c-6.008-9.44-10.272-19.704-12.672-30.504l-1.072-4.832-25.28-6.32v-19.504l25.28-6.32 1.072-4.832c2.4-10.8 6.664-21.064 12.672-30.504l2.656-4.168-13.424-22.384 13.792-13.792 22.384 13.424 4.168-2.656c9.44-6.008 19.704-10.272 30.504-12.672l4.832-1.072 6.32-25.28h19.504l6.32 25.28 4.832 1.072c10.8 2.4 21.064 6.664 30.504 12.672l4.168 2.656 22.384-13.424 18.208 18.208 11.312-11.312-27.048-27.048-24.712 14.832c-8.36-4.824-17.24-8.504-26.488-11L382.248 224h-44.496l-6.984 27.928c-9.248 2.496-18.128 6.184-26.488 11l-24.712-14.832-31.464 31.464 14.832 24.712c-4.824 8.36-8.504 17.24-11 26.488L224 337.752v44.496l27.928 6.984c2.928 10.84 7.496 21.168 13.592 30.76l13.504-8.584z" />
                            <path d="M360 280c-44.112 0-80 35.888-80 80s35.888 80 80 80 80-35.888 80-80-35.888-80-80-80zm0 144c-35.288 0-64-28.712-64-64s28.712-64 64-64 64 28.712 64 64-28.712 64-64 64z" />
                            <path d="M360 312c-26.472 0-48 21.528-48 48s21.528 48 48 48 48-21.528 48-48-21.528-48-48-48zm0 80c-17.648 0-32-14.352-32-32s14.352-32 32-32 32 14.352 32 32-14.352 32-32 32zM384 208v-96H48v256h160v-16H64V128h304v80z" />
                            <path d="M80 144h16v64H80zM160 208v-64h-48v64h48zm-32-48h16v32h-16v-32zM256 208v-64h-48v64h48zm-32-48h16v32h-16v-32zM320 208v-64h-48v64h48zm-32-48h16v32h-16v-32zM176 144h16v64h-16zM336 144h16v64h-16z" />
                        </svg>
                    </div>
                    <div className="w-full lg:w-4/6 flex justify-center items-start h-full flex-col">
                        <h3 className="mb-6">Linux</h3>
                        <p>Daily driver. Arch BTW</p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col lg:flex-row flex-1">
                    <div className="w-full lg:w-4/6 flex justify-start items-start h-full flex-col">
                        <h3 className="mb-6">(Ancient) tech</h3>
                        <p>
                            In these modern times people should respect the
                            elders. I will get highly enthusiastic from ancient
                            and not so ancient tech.
                        </p>
                    </div>
                    <div className="w-full lg:w-2/6 flex justify-center items-start h-full flex-col items-center  lg:mt-0 lg:self-center">
                        <svg
                            className="fill-current h-32 w-32"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 37v16c0 1.103.897 2 2 2h50c1.103 0 2-.897 2-2V37c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2zm2 0h50v16H7l-.001-16z" />
                            <path d="M58 29c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5H6C3.243 1 1 3.243 1 6v18c0 2.757 2.243 5 5 5h1v2H6c-2.757 0-5 2.243-5 5v18c0 2.757 2.243 5 5 5h1.219l1 4h9.562l1-4h26.438l1 4h9.562l1-4H58c2.757 0 5-2.243 5-5V36c0-2.757-2.243-5-5-5h-1v-2zM3 24V6c0-1.654 1.346-3 3-3h52c1.654 0 3 1.346 3 3v18c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3zm16 7v-2h26v2zM9 29h8v2H9zm7.219 32H9.781l-.5-2h7.438zm38 0h-6.438l-.5-2h7.438zM61 36v18c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V36c0-1.654 1.346-3 3-3h52c1.654 0 3 1.346 3 3zm-6-5h-8v-2h8z" />
                            <path d="M59 23V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h50c1.103 0 2-.897 2-2zM7 7h26v4H6.999V7zm50 16H7l-.001-10H35V7h22zM25 39H9v12h16zm-2 2v6.586l-.172-.172c-1.318-1.318-3.006-2.128-4.828-2.347V43h-2v2.067c-1.822.219-3.51 1.029-4.828 2.347l-.172.172V41zm-6 6c1.667 0 3.235.649 4.414 1.828l.172.172h-9.172l.172-.172C13.765 47.649 15.333 47 17 47zM43 39H27v12h16zm-2 2v6.586l-.172-.172c-1.318-1.318-3.006-2.128-4.828-2.347V43h-2v2.067c-1.822.219-3.51 1.029-4.828 2.347l-.172.172V41zm-6 6c1.667 0 3.235.649 4.414 1.828l.172.172h-9.172l.172-.172C31.765 47.649 33.333 47 35 47zM50 51c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
                            <path d="M12 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM20 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM28 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM39 17h14c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2H39c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2zm0-6h14l.001 4H39zM37 19h2v2h-2zM45 19h2v2h-2zM49 19h2v2h-2zM53 19h2v2h-2zM41 19h2v2h-2z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hobbys

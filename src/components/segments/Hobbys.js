import ContentContainer from '../elements/ContentContainer'
import Title from '../elements/Title'

const Hobbys = () => (
    <div>
        <Title title={'Exitement'} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-36">
            <ContentContainer
                image={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        className="fill-inherit"
                    >
                        <path d="M29 39c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.201.542 2.266 1.382 3A3.974 3.974 0 0021 45c0 2.206 1.794 4 4 4s4-1.794 4-4a3.974 3.974 0 00-1.382-3A3.974 3.974 0 0029 39zm-2 6c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-4-6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zM31 37h2v2h-2zM31 44h2v2h-2zM39 35c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4s4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-1.103.897-2 2-2s2 .897 2 2zM49 35c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4s4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-1.103.897-2 2-2s2 .897 2 2zM15 35c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4s4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-1.103.897-2 2-2s2 .897 2 2z" />
                        <path d="M57 31H7c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h50c1.103 0 2-.897 2-2V33c0-1.103-.897-2-2-2zM7 51V33h50l.002 18z" />
                        <path d="M58 27H37v-1c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v1h-2v-1c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v1H6c-2.757 0-5 2.243-5 5v20a5.01 5.01 0 004 4.899V58c0 2.757 2.243 5 5 5h44c2.757 0 5-2.243 5-5v-1.101A5.009 5.009 0 0063 52V32c0-2.757-2.243-5-5-5zm-33-1a1 1 0 011-1h8a1 1 0 011 1v1H25zM9 26a1 1 0 011-1h8a1 1 0 011 1v1H9zm45 35H10c-1.654 0-3-1.346-3-3v-1h50v1c0 1.654-1.346 3-3 3zm7-9c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V32c0-1.654 1.346-3 3-3h52c1.654 0 3 1.346 3 3zM46 20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        <path d="M53.242 17.172l4.243-4.243-.707-.707C54.701 10.144 51.938 9 49 9s-5.701 1.144-7.778 3.222l-.707.707 4.243 4.243.707-.707C46.409 15.521 47.665 15 49 15s2.591.521 3.535 1.465zm-8.434-2.778l-1.426-1.426a9.016 9.016 0 0111.236 0l-1.426 1.426C51.989 13.489 50.532 13 49 13s-2.989.489-4.192 1.394z" />
                        <path d="M39.808 10.808C42.263 8.353 45.527 7 49 7s6.737 1.353 9.192 3.808l.707.707 4.242-4.242-.707-.707C58.846 2.977 54.075 1 49 1s-9.846 1.977-13.435 5.565l-.707.707 4.242 4.242zM49 3a16.87 16.87 0 0111.293 4.293l-1.417 1.416C56.142 6.311 52.672 5 49 5s-7.142 1.311-9.876 3.709l-1.417-1.416A16.87 16.87 0 0149 3z" />
                    </svg>
                }
                title={'IOT'}
                content={
                    'I enjoy myself with almost everything that has an IP address. From single board computers to home automation systems, I love it all.'
                }
            />
            <ContentContainer
                image={
                    <svg
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-inherit"
                    >
                        <path d="M45.707 28.293l-1.414 1.414L46.586 32l-2.293 2.293 1.414 1.414L49.414 32zM38.293 28.293L34.586 32l3.707 3.707 1.414-1.414L37.414 32l2.293-2.293zM41.0185 36.914375l1.005-9.99975 1.99.2-1.005 9.99975z" />
                        <path d="M42 21c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9z" />
                        <path d="M63 38V4c0-1.654-1.346-3-3-3H20c-1.654 0-3 1.346-3 3v19H4c-1.654 0-3 1.346-3 3v34c0 1.654 1.346 3 3 3h40c1.654 0 3-1.346 3-3V46.125c.886-.315 1.734-.708 2.535-1.176l6.93 6.93c.723.723 1.684 1.121 2.706 1.121C61.283 53 63 51.282 63 49.172c0-1.023-.398-1.984-1.122-2.707L56.414 41H60c1.654 0 3-1.346 3-3zm-3 1h-4.744C56.365 36.908 57 34.528 57 32c0-8.271-6.729-15-15-15s-15 6.729-15 15c0 2.528.635 4.908 1.744 7H20c-.551 0-1-.448-1-1V11h42v27c0 .552-.449 1-1 1zm-18 6c-7.168 0-13-5.832-13-13s5.832-13 13-13 13 5.832 13 13-5.832 13-13 13zm-31 2h12v-2h2v8H11zm10-2H7v-8h10v1c0 1.654 1.346 3 3 3h1zM20 3h40c.551 0 1 .448 1 1v5H19V4c0-.552.449-1 1-1zM4 25h13v6H3v-5c0-.552.449-1 1-1zm41 35c0 .552-.449 1-1 1H4c-.551 0-1-.448-1-1V33h14v2H5v12h4v8h18V43h-4v-2h7.028c2.74 3.635 7.079 6 11.972 6 1.027 0 2.03-.105 3-.302zm16-10.828C61 50.18 60.18 51 59.171 51c-.488 0-.948-.19-1.293-.535l-6.658-6.658c.964-.754 1.831-1.622 2.586-2.586l6.658 6.658c.341.341.536.811.536 1.293z" />
                        <path d="M21 5h2v2h-2zM25 5h2v2h-2zM29 5h2v2h-2zM5 27h2v2H5zM9 27h2v2H9zM13 27h2v2h-2zM5 57h2v2H5zM9 57h18v2H9zM29 57h2v2h-2zM33 57h10v2H33zM29 53h14v2H29zM29 49h14v2H29zM21 35h4v2h-4zM21 31h4v2h-4zM21 27h4v2h-4zM21 25h6V13h-6zm2-10h2v8h-2zM29 13h2v2h-2zM33 13h26v2H33zM53 17h6v2h-6z" />
                    </svg>
                }
                title={'RC'}
                content={
                    'If it is controllable from a distance, I love it. I am interested DIY drone building and everything related.'
                }
            />
            <ContentContainer
                image={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fill-inherit"
                    >
                        <path d="M432 0H0v80h432V0zm-16 64H16V16h400v48z" />
                        <path d="M32 32h16v16H32zM64 32h16v16H64zM96 32h16v16H96zM16 96H0v320h240v-16H16zM416 96h16v136h-16zM496 382.248v-44.496l-27.928-6.984c-2.928-10.84-7.496-21.168-13.592-30.76l-13.504 8.584c6.008 9.44 10.272 19.704 12.672 30.504l1.072 4.832 25.28 6.32v19.504l-25.28 6.32-1.072 4.832c-2.4 10.8-6.664 21.064-12.672 30.504l-2.656 4.168 13.424 22.384-13.792 13.792-22.384-13.424-4.168 2.656c-9.44 6.008-19.704 10.272-30.504 12.672l-4.832 1.072L369.752 480h-19.504l-6.32-25.28-4.832-1.072c-10.8-2.4-21.064-6.664-30.504-12.672l-4.168-2.656-22.384 13.424-18.208-18.208-11.312 11.312 27.048 27.048 24.712-14.832c8.36 4.824 17.24 8.504 26.488 11L337.752 496h44.496l6.984-27.928c9.248-2.496 18.128-6.184 26.488-11l24.712 14.832 31.464-31.464-14.832-24.712c4.824-8.36 8.504-17.24 11-26.488L496 382.248z" />
                        <path d="M279.024 411.408c-6.008-9.44-10.272-19.704-12.672-30.504l-1.072-4.832-25.28-6.32v-19.504l25.28-6.32 1.072-4.832c2.4-10.8 6.664-21.064 12.672-30.504l2.656-4.168-13.424-22.384 13.792-13.792 22.384 13.424 4.168-2.656c9.44-6.008 19.704-10.272 30.504-12.672l4.832-1.072 6.32-25.28h19.504l6.32 25.28 4.832 1.072c10.8 2.4 21.064 6.664 30.504 12.672l4.168 2.656 22.384-13.424 18.208 18.208 11.312-11.312-27.048-27.048-24.712 14.832c-8.36-4.824-17.24-8.504-26.488-11L382.248 224h-44.496l-6.984 27.928c-9.248 2.496-18.128 6.184-26.488 11l-24.712-14.832-31.464 31.464 14.832 24.712c-4.824 8.36-8.504 17.24-11 26.488L224 337.752v44.496l27.928 6.984c2.928 10.84 7.496 21.168 13.592 30.76l13.504-8.584z" />
                        <path d="M360 280c-44.112 0-80 35.888-80 80s35.888 80 80 80 80-35.888 80-80-35.888-80-80-80zm0 144c-35.288 0-64-28.712-64-64s28.712-64 64-64 64 28.712 64 64-28.712 64-64 64z" />
                        <path d="M360 312c-26.472 0-48 21.528-48 48s21.528 48 48 48 48-21.528 48-48-21.528-48-48-48zm0 80c-17.648 0-32-14.352-32-32s14.352-32 32-32 32 14.352 32 32-14.352 32-32 32zM384 208v-96H48v256h160v-16H64V128h304v80z" />
                        <path d="M80 144h16v64H80zM160 208v-64h-48v64h48zm-32-48h16v32h-16v-32zM256 208v-64h-48v64h48zm-32-48h16v32h-16v-32zM320 208v-64h-48v64h48zm-32-48h16v32h-16v-32zM176 144h16v64h-16zM336 144h16v64h-16z" />
                    </svg>
                }
                title={'Unix'}
                content={'Daily driver. Arch BTW'}
            />
            <ContentContainer
                image={
                    <svg
                        className="fill-inherit"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M5 37v16c0 1.103.897 2 2 2h50c1.103 0 2-.897 2-2V37c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2zm2 0h50v16H7l-.001-16z" />
                        <path d="M58 29c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5H6C3.243 1 1 3.243 1 6v18c0 2.757 2.243 5 5 5h1v2H6c-2.757 0-5 2.243-5 5v18c0 2.757 2.243 5 5 5h1.219l1 4h9.562l1-4h26.438l1 4h9.562l1-4H58c2.757 0 5-2.243 5-5V36c0-2.757-2.243-5-5-5h-1v-2zM3 24V6c0-1.654 1.346-3 3-3h52c1.654 0 3 1.346 3 3v18c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3zm16 7v-2h26v2zM9 29h8v2H9zm7.219 32H9.781l-.5-2h7.438zm38 0h-6.438l-.5-2h7.438zM61 36v18c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V36c0-1.654 1.346-3 3-3h52c1.654 0 3 1.346 3 3zm-6-5h-8v-2h8z" />
                        <path d="M59 23V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h50c1.103 0 2-.897 2-2zM7 7h26v4H6.999V7zm50 16H7l-.001-10H35V7h22zM25 39H9v12h16zm-2 2v6.586l-.172-.172c-1.318-1.318-3.006-2.128-4.828-2.347V43h-2v2.067c-1.822.219-3.51 1.029-4.828 2.347l-.172.172V41zm-6 6c1.667 0 3.235.649 4.414 1.828l.172.172h-9.172l.172-.172C13.765 47.649 15.333 47 17 47zM43 39H27v12h16zm-2 2v6.586l-.172-.172c-1.318-1.318-3.006-2.128-4.828-2.347V43h-2v2.067c-1.822.219-3.51 1.029-4.828 2.347l-.172.172V41zm-6 6c1.667 0 3.235.649 4.414 1.828l.172.172h-9.172l.172-.172C31.765 47.649 33.333 47 35 47zM50 51c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
                        <path d="M12 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM20 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM28 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM39 17h14c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2H39c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2zm0-6h14l.001 4H39zM37 19h2v2h-2zM45 19h2v2h-2zM49 19h2v2h-2zM53 19h2v2h-2zM41 19h2v2h-2z" />
                    </svg>
                }
                title={'(Ancient) tech'}
                content={
                    ' In these modern times people should respect the elders. I will get highly enthusiastic from ancient and not so ancient tech.'
                }
            />
        </div>
    </div>
)

export default Hobbys

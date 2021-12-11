import SvgContainer from './SvgContainer'

const Social = (props) => (
    <div className="fixed right-0 m-8 p-2 lg:p-4 xl:p-8 rounded-3xl backdrop-blur-sm ease-in-out duration-300 border-white border-solid border-2 hover:border-red">
        <div className="flex">
            <div class="mx-2 lg:mx-4">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/pieter-rees"
                >
                    <SvgContainer
                        svg={props.github}
                        size="small"
                        color="white"
                    />
                </a>{' '}
            </div>{' '}
            <div class="mx-2 lg:mx-4">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:pieter@pieterrees.nl"
                >
                    <SvgContainer
                        svg={props.email}
                        size="small"
                        color="white"
                    />
                </a>{' '}
            </div>{' '}
        </div>{' '}
    </div>
)

export default Social

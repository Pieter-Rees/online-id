import SvgContainer from './SvgContainer'

const Social = (props) => (
    <div className="fixed right-0 m-8 p-4 rounded-3xl backdrop-blur-sm	border-white border-solid border-2">
        <div className="flex">
            <div class="mx-4">
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
            <div class="mx-4">
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

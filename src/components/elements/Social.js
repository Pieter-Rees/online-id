import SvgContainer from './SvgContainer'
import Email from '../svg/Email'
import Github from '../svg/Github'

const Social = (props) => (
    <div className="fixed right-0 m-8 p-2 lg:p-4 xl:p-6 rounded-3xl backdrop-blur-sm ease-in-out duration-300 border-white border-solid border-2 hover:border-red">
        <div className="flex">
            <div class="mx-2 lg:mx-4">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/pieter-rees"
                >
                    <SvgContainer svg={<Github />} color="white" />
                </a>
            </div>
            <div class="mx-2 lg:mx-4">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:pieter@pieterrees.nl"
                >
                    <SvgContainer svg={<Email />} color="white" />
                </a>{' '}
            </div>{' '}
        </div>{' '}
    </div>
)

export default Social

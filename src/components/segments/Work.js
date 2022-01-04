import Availability from '../elements/Availability'
import Title from '../elements/Title'

const Work = () => (
    <div>
        <Title title={'Work?!'} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 mx-auto">
            <div className="flex self-center justify-center">
                <div className="flex overflow-hidden items-center">
                    <p>
                        Currently I am working @ GoodUp. We provide The #1 tech
                        solution for activating employees on your company
                        purpose. I am always up for a nice talk about innovative
                        ideas. Please drop me a line via{' '}
                        <a href="mailto:pieter@pieterrees.nl">E-mail</a>.
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <Availability available={true} />
            </div>
        </div>
    </div>
)

export default Work

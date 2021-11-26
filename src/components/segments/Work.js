import Availability from '../elements/Availability'
import Title from '../elements/Title'
import Hr from '../elements/Hr'

const Work = () => (
    <div>
        <Title title={'Work?!'} />

        <div className="grid w-2/4 mx-auto">
            <p>
                Currently I am working @ GoodUp. We provide The #1 tech solution
                for activating employees on your company purpose. I am always up
                for a nice talk about innovative ideas. Please drop me a line
                via <a href="mailto:pieter@pieterrees.nl">E-mail</a>.
            </p>
            <Availability available={true} />
        </div>
        <Hr />
    </div>
)

export default Work

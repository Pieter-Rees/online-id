import Availability from '../elements/Availability'
import Title from '../elements/Title'

const Work = () => (
    <div>
        <Title title={'Work?!'} />

        <div className="grid">
            <p>
                Currently I am working @ GoodUp. We provide The #1 tech solution
                for activating employees on your company purpose. I am always up
                for a nice talk about innovative ideas. Please drop me a line
                via E-mail.
            </p>
            <Availability available={true} />
        </div>
    </div>
)

export default Work

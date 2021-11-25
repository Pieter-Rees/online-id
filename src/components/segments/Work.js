import Availability from '../elements/Availability'

const Work = () => (
    <div>
        <h2 className="mb-6">Work?!</h2>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <p>
                    Currently I am working @ GoodUp. We provide The #1 tech
                    solution for activating employees on your company purpose. I
                    am always up for a nice talk about innovative ideas. Please
                    drop me a line via E-mail.
                </p>
                <Availability available={true} />
            </div>
        </div>
    </div>
)

export default Work

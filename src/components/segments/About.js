import p from '../../img/p.webp'
import Title from '../elements/Title'
import Hr from '../elements/Hr'

const About = () => (
    <div>
        <Title title={'This guy..'} />
        <div className="grid grid-cols-2 gap-4 w-3/4 mx-auto my-16">
            <div className="flex self-center justify-center">
                <div className="flex overflow-hidden h-64 items-center">
                    <div className="shadow-medium h-48 w-48 rounded-full overflow-hidden flex justify-center align-center">
                        <picture>
                            <source type="image/webp" alt="Pieter's head" />
                            <img
                                src={p}
                                alt="Pieter's head"
                                className="h-48 w-48"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <p>
                    My name is Pieter Rees. I am a Developer with full stack
                    experience and a huge interest for everything that is
                    related to electronics and technology.
                </p>
            </div>
        </div>
        <Hr />
    </div>
)

export default About

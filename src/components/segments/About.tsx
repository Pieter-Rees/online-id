import ContentContainer from '../elements/ContentContainer';
import Fader from '../elements/Fader';
import Title from '../elements/Title';

const AboutContent = {
    title: 'This guy..',
    content:
        'My name is Pieter Rees. I am a Developer with full stack experience and a huge interest for everything that is related to electronics and technology.'
};
const About = () => (
    <div id='about'>
        <Fader>
            <Title size={'xxl'} title={AboutContent.title} />
        </Fader>

        <div className='grid grid-cols-1 gap-24 mx-auto mt-8'>
            <div className='flex items-center'>
                <Fader>
                    <ContentContainer content={AboutContent.content} />
                </Fader>
            </div>
        </div>
    </div>
);

export default About;

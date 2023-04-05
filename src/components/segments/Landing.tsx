import Fader from '../elements/Fader';
import Title from '../elements/Title';

const Landing = () => (
    <>
        <div className='h-full' id='landing'>
            <div className='h-full flex flex-col items-center justify-center'>
                <Fader>
                    <Title size={'xxxxl'} title={'Pieter Rees'} />
                </Fader>
                <Fader>
                    <Title size={'xxl'} title={'I make web things, and more'} />
                </Fader>
            </div>
        </div>
    </>
);

export default Landing;

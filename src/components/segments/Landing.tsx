import Fader from '../elements/Fader';
import Title from '../elements/Title';

const Landing = () => (
    <>
        <div>
            <div className='lights x1'></div>
            <div className='lights x2'></div>
            <div className='lights x3'></div>
            <div className='lights x4'></div>
            <div className='lights x5'></div>
            <div className='lights x6'></div>
            <div className='lights x7'></div>
            <div className='lights x8'></div>
            <div className='lights x9'></div>
        </div>
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

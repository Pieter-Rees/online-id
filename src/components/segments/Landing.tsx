import { Link } from 'react-router-dom';
import Fader from '../elements/Fader';
import SvgContainer from '../elements/SvgContainer';
import Title from '../elements/Title';
import Tag from '../svg/Tag';

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
        <div className='absolute left-4 top-4 z-1000'>
            <Link to='/resume'>
                <SvgContainer color='grey' size='small' svg={<Tag />} />
            </Link>
        </div>
    </>
);

export default Landing;

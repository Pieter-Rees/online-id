import { Suspense, lazy } from 'react';

import Renderloader from '../elements/Renderloader';
import { Link } from 'react-router-dom';
const Fader = lazy(async () => await import('../elements/Fader'));
const SvgContainer = lazy(async () => await import('../elements/SvgContainer'));
const Tag = lazy(async () => await import('../svg/Tag'));
const Title = lazy(async () => await import('../elements/Title'));

const Landing = () => (
    <Suspense fallback={Renderloader()}>
        <>
            <div className='h-full' id='landing'>
                <div className='h-full flex flex-col items-center justify-center'>
                    <Fader>
                        <Title size={'xxxxl'} title={'Pieter Rees'} />
                    </Fader>
                    <Fader>
                        <Title
                            size={'xxl'}
                            title={'I make web things, and more'}
                        />
                    </Fader>
                </div>
            </div>
            <div className='absolute left-4 top-4 z-1000'>
                <Link to='/resume'>
                    <SvgContainer color='grey' size='small' svg={<Tag />} />
                </Link>
            </div>
        </>
    </Suspense>
);

export default Landing;

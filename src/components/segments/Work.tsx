import Fader from '../elements/Fader';

import Availability from '../elements/Availability';
import ContentContainer from '../elements/ContentContainer';
import Title from '../elements/Title';

const WorkContent = {
    title: 'Work',
    content:
        'Currently I am working @ GoodUp. We provide The #1 tech solution for activating employees on your company purpose. I am always up for a nice talk about innovative ideas.'
};

const EmailAddress = 'pieter@pieterrees.nl';

const Work = () => (
    <div className='' id='work'>
        <Fader>
            <Title size={'xxl'} title={WorkContent.title} />
        </Fader>

        <Fader>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 mx-auto'>
                <div className='flex flex-col self-center justify-center'>
                    <div className='flex flex-col items-center'>
                        <ContentContainer content={WorkContent.content} />
                    </div>
                    <div className='flex mt-8'>
                        <a
                            className='cursor-crosshair font-bold ease-in-out duration-100 hover:text-red dark:text-white'
                            href={`mailto:${EmailAddress}`}
                        >
                            {EmailAddress}
                        </a>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='dark:text-white text-lg'>
                        Availability for freelance work:
                    </p>
                    <p className='mt-4 dark:text-white text-lg'>
                        <Availability available={true} />
                    </p>
                </div>
            </div>
        </Fader>
    </div>
);

export default Work;

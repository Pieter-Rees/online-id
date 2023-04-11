import ContentContainer from '../elements/ContentContainer';
import Fader from '../elements/Fader';
import IotLogo from '../svg/Iot';
import LinuxLogo from '../svg/Linux';
import RcLogo from '../svg/Rc';
import TechLogo from '../svg/Tech';
import Title from '../elements/Title';

const ExitementTitle = 'Exitement';

const Iot = {
    title: 'IOT',
    content:
        'I enjoy myself with almost everything that has an IP address. From single board computers to home automation systems, I love it all.'
};

const Rc = {
    title: 'RC',
    content:
        'If it is controllable from a distance, I love it. I am interested DIY drone building and everything related'
};

const Linux = {
    title: 'Linux',
    content: 'Distrohopper & Linux explorer'
};

const At = {
    title: '(Ancient) tech',
    content:
        'I will get highly enthusiastic from ancient and not so ancient technology.'
};

const Exitement = () => (
    <div id='exitement'>
        <Fader>
            <Title size={'xxl'} title={ExitementTitle} />
        </Fader>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-24'>
            <Fader>
                <ContentContainer
                    content={Iot.content}
                    image={<IotLogo />}
                    title={Iot.title}
                />
            </Fader>

            <Fader>
                <ContentContainer
                    content={Rc.content}
                    image={<RcLogo />}
                    title={Rc.title}
                />
            </Fader>
            <Fader>
                <ContentContainer
                    content={Linux.content}
                    image={<LinuxLogo />}
                    title={Linux.title}
                />
            </Fader>
            <Fader>
                <ContentContainer
                    content={At.content}
                    image={<TechLogo />}
                    title={At.title}
                />
            </Fader>
        </div>
    </div>
);

export default Exitement;

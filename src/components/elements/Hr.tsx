import Fader from './Fader';
export interface HrProperties {
    id: string;
}

export default function Hr() {
    return (
        <Fader>
            <hr className='block border-0 mx-auto h-px w-16 my-32 bg-red rotate-90' />
        </Fader>
    );
}

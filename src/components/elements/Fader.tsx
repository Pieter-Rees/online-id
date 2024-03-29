import { InView } from 'react-intersection-observer';
import { ReactNode } from 'react';
interface FaderProps {
    children: ReactNode;
}

const Fader = (props: FaderProps) => (
    <InView>
        {({ inView, ref }) => (
            <div ref={ref}>
                <div
                    className={`transition-all duration-500 ${
                        inView ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {props.children}
                </div>
            </div>
        )}
    </InView>
);

export default Fader;

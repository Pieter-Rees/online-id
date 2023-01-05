import { InView } from 'react-intersection-observer'

const Component = () => (
    <InView>
        {({ inView, ref, entry }) => (
            <div ref={ref}>
                <h2 className='fixed text-white'>{`Header inside viewport ${inView}.`}</h2>
            </div>
        )}
    </InView>
)

export default Component

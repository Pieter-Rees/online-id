import { InView } from 'react-intersection-observer'
interface TitleProps {
    size?: string
    title?: string
    large?: boolean
    underline?: string
}

function size(props: TitleProps) {
    switch (props.size) {
        case 'xsmall':
        case 'large':
            return 'text-md xl:text-lg'
        case 'xl':
            return 'text-lg xl:text-xl'
        case 'xxl':
            return 'text-xl xl:text-xxl'
        case 'xxxl':
            return 'text-xxl xl:text-xxxl'
        case 'xxxxl':
            return 'text-xxxl xl:text-xxxxl'
        case 'xxxxxl':
            return 'text-xxxxl xl:text-xxxxxl'
        default:
            return 'text-lg xl:text-xl'
    }
}

const Title = (props: TitleProps) => (
    <InView>
        {({ inView, ref }) => (
            <div ref={ref}>
                <h2></h2>
                <div
                    className={`transition-all duration-500 xl:px-16 pb-4 mx-auto text-center text-black dark:text-white ${
                        inView ? 'opacity-100' : 'opacity-0'
                    } ${size(props)}`}
                >
                    {props.title}
                </div>
            </div>
        )}
    </InView>
)

export default Title

import SvgContainer from './elements/SvgContainer'
import Tag from './svg/Tag'
import FooterDate from './elements/FooterDate'

const Footer = () => (
    <div className="pb-8">
        <p className="text-center">
            Made with 💙 in Amsterdam
            <br />
            Released under the DBAD PUBLIC LICENCE
            <br />
            <FooterDate />
        </p>
        <div className="my-4">
            <SvgContainer size="small" svg={<Tag />} color="white" />
        </div>
    </div>
)

export default Footer

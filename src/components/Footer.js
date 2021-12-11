import SvgContainer from './elements/SvgContainer'
import Tag from './svg/Tag'
import FooterDate from './elements/FooterDate'

const Footer = () => (
    <div className="pb-8">
        <div className="my-8">
            <SvgContainer size="small" svg={<Tag />} color="white" />
        </div>

        <p className="text-center">
            Made with 💙 in Amsterdam
            <br />
            Released under the DBAD PUBLIC LICENCE
            <br />
            <FooterDate />
        </p>
    </div>
)

export default Footer

import SvgContainer from './elements/SvgContainer'
import Tag from './svg/Tag'
import FooterDate from './elements/FooterDate'

const Footer = () => (
    <div className="pb-8">
        <SvgContainer svg={<Tag />} />

        <h5 className="text-center">
            Made with 💙 in Amsterdam
            <br />
            Released under the DBAD PUBLIC LICENCE
            <br />
            <FooterDate />
        </h5>
    </div>
)

export default Footer

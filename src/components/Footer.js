import SvgContainer from './elements/SvgContainer'
import Tag from './svg/Tag'
import FooterDate from './elements/FooterDate'

const Footer = () => (
    <footer className="container mx-auto">
        <div className="w-12/12 flex justify-center items-center h-full flex-col">
            <div className="container h-full mx-auto">
                <div className=" lex justify-center flex-col align-center">
                    <div className="flex justify-center my-4">
                        <SvgContainer svg={<Tag />} />
                    </div>

                    <h5 className="text-center">
                        Made with 💙 in Amsterdam
                        <br />
                        Released under the DBAD PUBLIC LICENCE
                        <br />
                        <FooterDate />
                    </h5>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer

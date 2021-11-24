import SvgContainer from './svg/SvgContainer'
import Tag from './svg/Tag'

const Footer = () => (
    <footer className="container mx-auto">
        <div className="w-12/12 flex justify-center items-center h-full flex-col">
            <div className="container h-full mx-auto">
                <div className=" lex justify-center flex-col align-center">
                    <div className="flex justify-center my-4">
                        <SvgContainer svg={<Tag />} />
                    </div>

                    <h5 className="text-center">Made with 💙 in Amsterdam</h5>
                    <h5 className="text-center">
                        Released under the DBAD PUBLIC LICENCE
                    </h5>
                    <h5 className="text-center">© 2021</h5>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer

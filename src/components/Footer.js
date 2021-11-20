import Tag from './svg/Tag'

const Footer = () => (
    <footer className="container row mx-auto">
        <div className="w-12/12 flex justify-center items-center h-full flex-col">
            <div className="container h-full mx-auto">
                <div className="w-full h-full top-0 left-0"></div>

                <div className="container mx-auto relative p-8">
                    <div className="row flex justify-center flex-col align-center">
                        <div className="flex justify-center my-4">
                            <Tag />
                        </div>

                        <h5 className="text-center">
                            Made with 💙 in Amsterdam
                        </h5>
                        <h5 className="text-center">
                            Released under the DBAD PUBLIC LICENCE
                        </h5>
                        <h5 className="text-center">© 2021</h5>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer

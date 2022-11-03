import React from 'react'
import ResumeContent from "./ResumeContent";
import ResumeProps from "../../types/resume.type";

type Props = {};

type State = {
    data: Array<ResumeProps>,
    powers: Array<ResumeProps>,
};

export default class Resume extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: [],
            powers: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        ResumeContent.getAll()
            .then((response: any) => {
                console.log(response.data);

                this.setState({
                    data: response.data
                });
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                {this.state.data.map((piece, index) => {
                    return <div key={index}>
                        <h1 className='text-white'>{piece.title}</h1>
                        {piece.powers.map((power, index) => {
                            return <div className='text-white' key={index}>{power}</div>
                        })}
                    </div>
                })}
            </div>
        )
        // return this.state.data.map((piece) => {
        //     return piece.powers.map((power) => (
        //         <div>
        //             {power}
        //         </div>
        //     ));
        // });
    }
}

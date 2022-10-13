import React from 'react'
import ResumeContent from "../segments/ResumeContent";

export default class Resume extends React.Component {
    componentDidMount() {
        this.getData();
    }

    getData() {
        ResumeContent.getAll()
            .then((response: any) => {
                console.log(response.data);

                this.setState({
                    tutorials: response.data
                });
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    render() {
        return <div className="col text-white">Not yet implemented</div>
    }
}

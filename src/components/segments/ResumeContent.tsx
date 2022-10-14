import http from "../elements/HttpRequest";
import ResumeProps from "../../types/resume.type";

class ResumeDataService {
    getAll() {
        return http.get<Array<ResumeProps>>("resume");
    }

    // get(id: string) {
    //     return http.get<ResumeData>(`/resume/${id}`);
    // }

    //   create(data: ResumeData) {
    //     return http.post<ResumeData>("/tutorials", data);
    //   }

    //   update(data: ResumeData, id: any) {
    //     return http.put<any>(`/tutorials/${id}`, data);
    //   }

    //   delete(id: any) {
    //     return http.delete<any>(`/tutorials/${id}`);
    //   }

    //   deleteAll() {
    //     return http.delete<any>(`/tutorials`);
    //   }

    //   findByTitle(title: string) {
    //     return http.get<Array<ResumeData>>(`/tutorials?title=${title}`);
    //   }
}

export default new ResumeDataService();

// import React from 'react'
// import axios from 'axios'
// const baseURL = 'http://localhost:5050/resume/'

// export default class Resume extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props);

//         this.state = {
//             posts: []
//         };
//     }

//     componentDidMount() {
//         axios
//             .get(baseURL, {
//                 auth: {
//                     username: 'not yet finished',
//                     password: 'my-favorite-password', // Bad password
//                 },
//             })
//             .then((response) => {
//                 const posts = response.data
//                 this.setState({ posts: posts })
//             })
//     }

//     render() {
//         return (
//             <div className="col">
//                 {this.state.posts.map((post, i) => (
//                     <div key={i}>
//                         <h4 className="text-black dark:text-white">
//                             {post.title}
//                         </h4>
//                         <h5>{post.subTitle}</h5>
//                         <ul>
//                             {post.powers.map((power, i) => (
//                                 <li key={i}>{power.name}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }

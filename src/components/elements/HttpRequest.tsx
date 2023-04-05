import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5050/',
    // headers: {
    //     "Content-type": "application/json"
    // },
    // auth: {
    //     username: 'ben',
    //     password: 'my-favorite-password',
    // },
    method: 'get'
});

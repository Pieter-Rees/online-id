import axios from "axios";

export default axios.create({
    baseURL: "https://161.97.176.156:5050/",
    headers: {
        "Content-type": "application/json"
    },
    auth: {
        username: 'ben',
        password: 'my-favorite-password'
    }
});
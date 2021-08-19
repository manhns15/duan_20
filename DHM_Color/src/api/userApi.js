
// import axios from "axios";
import authHeader from "./auth-header";
// const USER_API_BASE_URL = "http://localhost:5000/";
// class UserService {

//     getAll() {
//         return axios.get(USER_API_BASE_URL + 'secure/auth/admin/all', { headers: authHeader() });
//     }
//     getUser() {
//         return axios.get(USER_API_BASE_URL + 'secure/auth/admin/add', { headers: authHeader() });
//     }
//     getUserById(id) {
//         return axios.get(USER_API_BASE_URL + 'secure/auth/admin/add' + '/' + id, { headers: authHeader() });
//     }
//     createUser(user) {
//         return axios.post(USER_API_BASE_URL + 'secure/auth/admin/add', user, { headers: authHeader() });
//     }
//     loginUser(authReq) {
//         return axios.post(USER_API_BASE_URL + 'rest/auth/authenticate', authReq, { headers: authHeader() })
//             .then((res) => {
//                 if (res.data.accessToken) {
//                     localStorage.setItem("user", JSON.stringify(res.data));
//                 }

//                 return res.data;
//             })
//     }
//     getCurrentUser = () => {
//         return JSON.parse(localStorage.getItem("user"));
//     };
// }
// export default new UserService()


import axios from "axios";

const API_URL = "http://localhost:5000/";


const createUser = (username, password) => {
    return axios.post(API_URL + "secure/auth/admin/add", {
        username,
        password,

    });
};

const loginUser = (userName, password) => {
    // debugger
    return axios.post(API_URL + "rest/auth/authenticate", {
        userName,
        password,
    })
        .then((response) => {
            console.log(response.data, "Ok");
            localStorage.setItem("jwt", response.data.jwt);
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
export default {
    getCurrentUser,
    createUser,
    loginUser,
    logout,
};


import http from "./axiosHttp";

const API_URL = "v1/api";
const getAll = () => {
    return http.get(API_URL + "/productdetails");
};
const get = id => {
    return http.get(API_URL + `/productdetails/${id}`);
};

const create = data => {
    return http.post(API_URL + "/productdetail", data);
};

const update = (id, data) => {
    return http.put(API_URL + `/productdetail/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(API_URL + `/productdetail/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};


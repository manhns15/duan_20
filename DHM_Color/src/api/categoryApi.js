import http from "./axiosHttp";

const API_URL = "v1/api";
// class CateService {
const getAll = () => {
    return http.get(API_URL + "/categorys");
};

const get = id => {
    return http.get(API_URL + `/categorys/${id}`);
};

const create = data => {
    return http.post(API_URL + "/category", data);
};

const update = (id, data) => {
    return http.put(API_URL + `/category/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(API_URL + `/category/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
};
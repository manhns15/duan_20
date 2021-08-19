import http from "./axiosHttp";

const API_URL = "v1/api";

const getAll = () => {
    return http.get(API_URL + "/colors");
};

const get = id => {
    return http.get(API_URL + `/colors/${id}`);
};

const create = data => {
    return http.post(API_URL + "/color", data);
};

const update = (id, data) => {
    return http.put(API_URL + `/color/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(API_URL + `/color/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};
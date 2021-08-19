import http from "./axiosHttp";

const API_URL = "v1/api";

const getAll = () => {
    return http.get(API_URL + "/sizes");
};

const get = id => {
    return http.get(API_URL + `/sizes/${id}`);
};

const create = data => {
    return http.post(API_URL + "/size", data);
};

const update = (id, data) => {
    return http.put(API_URL + `/size/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(API_URL + `/size/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};
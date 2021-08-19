
import http from "./axiosHttp";

const API_URL = "v1/api";
const getAll = () => {
    return http.get(API_URL + "/products");
};

const get = id => {
    return http.get(API_URL + `/products/${id}/categorys`);
};

const create = data => {
    return http.post(API_URL + "/product", data);
};

const update = (id, data) => {
    return http.put(API_URL + `/product/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(API_URL + `/product/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,

};


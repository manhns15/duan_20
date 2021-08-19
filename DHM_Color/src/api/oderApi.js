
import http from "./axiosHttp";
const API_URL = "v1/api";

const getAll = () => {
    return http.get(API_URL + "/orders");
};

const get = id => {
    return http.get(`/orders/${id}`);
};

const create = data => {
    return http.post(API_URL + "/order", data);
};

const update = (id, data) => {
    return http.put(`/order/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(API_URL + `/order/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};
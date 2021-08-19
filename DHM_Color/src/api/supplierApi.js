


import http from "./axiosHttp";

const API_URL = "v1/api/";

const getAll = () => {
    return http.get(API_URL + "suppliers")
}
const create = supplierDTO => {
    return http.post(API_URL + "supplier", supplierDTO)
}
const update = (id, supplierDTO) => {
    return http.put(API_URL + `supplier/${id}`, supplierDTO)
}
const remove = id => {
    return http.delete(API_URL + `supplier/${id}`)
}
export default {
    getAll,
    create,
    update,
    remove
};
import {axiosServices} from "./axios.sevices";
import {urls} from "../configs";

const UserServices = {
    getAll: () => axiosServices.get(`${urls.users}`),
    getById: (id) => axiosServices.get(`${urls.users}/${id}`)
}
export {
    UserServices
}
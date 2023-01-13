import {axiosServices} from "./axios.sevices";
import {urls} from "../configs";

const UserServices = {
    getAll: () => axiosServices.get(`${urls.users}`)
}
export {
    UserServices
}
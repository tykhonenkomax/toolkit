import {axiosServices} from "./axios.sevices";
import {urls} from "../configs";

const PostServices = {
    getAll: () => axiosServices.get(`${urls.posts}`)
}

export {
    PostServices
}
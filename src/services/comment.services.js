import {axiosServices} from "./axios.sevices";
import {urls} from "../configs";

const CommentServices = {
    getAll: () => axiosServices(`${urls.comments}`)
}
export {
    CommentServices
}

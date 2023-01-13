import axios from "axios";
import {baseURL} from "../configs";

const axiosServices = axios.create({baseURL})


export {
    axiosServices
}
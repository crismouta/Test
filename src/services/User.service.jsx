import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/v1/";

const getUserImages = () => {
    return axios.get(API_URL + "images", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "users", { headers: authHeader() });
};

const UserService = {
    getUserImages,
    getAdminBoard,
};

export default UserService;
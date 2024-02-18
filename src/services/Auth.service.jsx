import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";


const login = async (username, password) => {
    return await axios
        .post(API_URL + "/login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
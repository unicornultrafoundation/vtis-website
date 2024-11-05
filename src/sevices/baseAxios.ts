import axios from "axios";

const baseAxios = axios.create({
    baseURL: "https://raw.githubusercontent.com/vulhu2u/vtis-data/refs/heads/main",
    headers: {
        "Content-Type": "application/json",
    },
})

baseAxios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default baseAxios;
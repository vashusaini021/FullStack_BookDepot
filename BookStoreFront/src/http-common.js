import axios from "axios";

const baseURLApp = "https://book-depot.onrender.com";
const axios_obj = axios.create({
    baseURL: baseURLApp, 
    headers: {
        "content-type": "application/json"
    }
})

export { baseURLApp, axios_obj };
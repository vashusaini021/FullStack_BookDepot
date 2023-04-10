import axios from "axios";

const axios_obj = axios.create({
    baseURL: "https://book-depot.onrender.com", 
    headers: {
        "content-type": "application/json"
    }
})

export default axios_obj;
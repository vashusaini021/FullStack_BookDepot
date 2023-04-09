import axios from "axios";

const axios_obj = axios.create({
    baseURL: "http://localhost:3000", 
    headers: {
        "content-type": "application/json"
    }
})

export default axios_obj;
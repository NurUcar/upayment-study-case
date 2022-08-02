import axios from "axios";
import config from "../config";

const getCategories = async () => {
    const url = `https://upayments-studycase-api.herokuapp.com/api/categories/`;
    const res = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + config.accessToken
        }
    });
    return res.data;
}

const createProduct = async (data) => {
    const url = `https://upayments-studycase-api.herokuapp.com/api/products`;
    const res = await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + config.accessToken
        }
    });
    return res.data;
}

const getProducts = async () => {
    const url = `https://upayments-studycase-api.herokuapp.com/api/products`;
    const res = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + config.accessToken
        }
    });
    return res.data;
}

const getProductDetail = async (id) =>{
    const url = `https://upayments-studycase-api.herokuapp.com/api/products/${id}`;
    const res = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + config.accessToken
        }
    });

    return res.data;
}


const api = {
    getCategories,
    createProduct,
    getProducts,
    getProductDetail
}


export default api;
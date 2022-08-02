import axios from "axios";

const getCategories = async () => {
    const url = `https://upayments-studycase-api.herokuapp.com/api/categories/`;
    const res = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cjB1Y2FyQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9OdXJVY2FyIiwiaWF0IjoxNjU5MzUyODczLCJleHAiOjE2NTk3ODQ4NzN9.oX0L68ypthoolWVpJ33iCYzBqnfSOmBXGiHSTFJsaaU"
        }
    });
    return res.data;
}

const createProduct = async (data) => {
    const url = `https://upayments-studycase-api.herokuapp.com/api/products`;
    const res = await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cjB1Y2FyQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9OdXJVY2FyIiwiaWF0IjoxNjU5MzUyODczLCJleHAiOjE2NTk3ODQ4NzN9.oX0L68ypthoolWVpJ33iCYzBqnfSOmBXGiHSTFJsaaU"
        }
    });
    return res.data;
}

const getProducts = async () => {
    const url = `https://upayments-studycase-api.herokuapp.com/api/products`;
    const res = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cjB1Y2FyQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9OdXJVY2FyIiwiaWF0IjoxNjU5MzUyODczLCJleHAiOjE2NTk3ODQ4NzN9.oX0L68ypthoolWVpJ33iCYzBqnfSOmBXGiHSTFJsaaU"
        }
    });
    return res.data;
}

const getProductDetail = async (id) =>{
    const url = `https://upayments-studycase-api.herokuapp.com/api/products/${id}`;
    const res = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cjB1Y2FyQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9OdXJVY2FyIiwiaWF0IjoxNjU5MzUyODczLCJleHAiOjE2NTk3ODQ4NzN9.oX0L68ypthoolWVpJ33iCYzBqnfSOmBXGiHSTFJsaaU"
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
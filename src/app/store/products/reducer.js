import produce from "immer";
import { createActions, createReducer } from "reduxsauce";

const initialState = {
    isLoading: false,
    errorMessage: "",
    infoMessage: "",
    products:false,
    productDetail:false
};

const { Types, Creators } = createActions({
    setLoading: ["isLoading"],
    setErrorMessage: ["errorMessage"],
    setInfoMessage: ["infoMessage"],
    getProducts: null,
    setProducts:["products"],
    getProductDetail: ["id"],
    setProductDetail: ["productDetail"],
    createProduct:["avatar", "category", "description", "developerEmail", "name", "price"],
    deleteProduct:["id"]
}, { prefix: 'PRODUCTS/' });

export const ProductsActionTypes = Types;
export const ProductsActions = Creators;

export const productsReducer = createReducer(initialState, {
    [ProductsActionTypes.SET_LOADING]: produce((draft, { isLoading }) => ({ ...draft, isLoading })),
    [ProductsActionTypes.SET_ERROR_MESSAGE]: produce((draft, { errorMessage }) => ({ ...draft, errorMessage })),
    [ProductsActionTypes.SET_INFO_MESSAGE]: produce((draft, { infoMessage }) => ({ ...draft, infoMessage })),
    [ProductsActionTypes.SET_PRODUCTS]: produce((draft, { products }) => ({ ...draft, products })),
    [ProductsActionTypes.SET_PRODUCT_DETAIL]: produce((draft,{productDetail}) =>({...draft, productDetail}))
});

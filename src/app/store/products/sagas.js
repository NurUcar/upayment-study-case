import { call, put, takeLatest } from "redux-saga/effects";
import { ProductsActions, ProductsActionTypes } from "./reducer";
import api from "../../services/api";


function* createProduct({avatar, category, description, developerEmail, name, price}) {
  
    try {
        yield put(ProductsActions.setLoading(true));
        yield call(api.createProduct, {avatar, category, description, developerEmail, name, price});
        yield put(ProductsActions.setInfoMessage("Product created."));
        yield put(ProductsActions.setErrorMessage(""));
        yield put(ProductsActions.setLoading(false));
    }
    catch (e) {
        yield put(ProductsActions.setLoading(false));
        yield put(ProductsActions.setErrorMessage("An Error occurred when creating product."));
    }
}

function* getProducts() {
    try {
        yield put(ProductsActions.setLoading(true));
        let products = yield call(api.getProducts);
        yield put(ProductsActions.setProducts(products));
        yield put(ProductsActions.setErrorMessage(""));
        yield put(ProductsActions.setLoading(false));
    }
    catch (e) {
        yield put(ProductsActions.setLoading(false));
        yield put(ProductsActions.setProducts(null));
        yield put(ProductsActions.setErrorMessage( "An Error occurred while processing API request "));
    }
}

function* getProductDetail({ id }) {
    try {
        yield put(ProductsActions.setLoading(true));
        let product = yield call(api.getProductDetail, id);
        yield put(ProductsActions.setProductDetail(product));
        yield put(ProductsActions.setErrorMessage(""));
        yield put(ProductsActions.setLoading(false));
    }
    catch (e) {
        yield put(ProductsActions.setLoading(false));
        yield put(ProductsActions.setErrorMessage("Cannot get product detail."));
    }
}

const sagas = [
    takeLatest(ProductsActionTypes.CREATE_PRODUCT, createProduct),
    takeLatest(ProductsActionTypes.GET_PRODUCTS, getProducts),
    takeLatest(ProductsActionTypes.GET_PRODUCT_DETAIL, getProductDetail)
];


export default sagas;
    

    
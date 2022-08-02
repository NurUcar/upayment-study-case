import { call, put, takeLatest } from "redux-saga/effects";
import { CategoriesActions, CategoriesActionTypes } from "./reducer";
import api from "../../services/api";


function* getCategories() {
    try {
        yield put(CategoriesActions.setLoading(true));
        let categories = yield call(api.getCategories);
        yield put(CategoriesActions.setCategories(categories));
        yield put(CategoriesActions.setCategoriesErrorMessage(""));
        yield put(CategoriesActions.setLoading(false));
    }
    catch (e) {
        yield put(CategoriesActions.setLoading(false));
        yield put(CategoriesActions.setCategories(null));
        yield put(CategoriesActions.setCategoriesErrorMessage( "An Error occurred while processing API request "));
    }
}

function* getCategory({ id }) {
    try {
        yield put(CategoriesActions.setLoading(true));
        let category = yield call(api.getCategory, id);
        yield put(CategoriesActions.setCategory(category));
        
        yield put(CategoriesActions.setCategoriesErrorMessage(""));
        yield put(CategoriesActions.setLoading(false));
    }
    catch (e) {
        yield put(CategoriesActions.setLoading(false));
        yield put(CategoriesActions.setCategoriesErrorMessage( "An Error occurred while processing API request "));
    }
}

const sagas = [
    takeLatest(CategoriesActionTypes.GET_CATEGORIES, getCategories),
    takeLatest(CategoriesActionTypes.GET_CATEGORY, getCategory)

];


export default sagas;
    

    
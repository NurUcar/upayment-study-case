import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categoriesReducer } from "./categories/reducer";
import { productsReducer } from "./products/reducer";
export const rootReducer = combineReducers({
    products: persistReducer({
        key: "products",
        storage,
        whitelist: ["products", "productDetail"]
    }, productsReducer),
    categories: categoriesReducer
});

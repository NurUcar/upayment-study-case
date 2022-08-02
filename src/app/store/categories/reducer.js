import produce from "immer";
import { createActions, createReducer } from "reduxsauce";

const initialState = {
    isLoading: false,
    categoriesErrorMessage: "",
    categoriesInfoMessage: "",
    categories:false,
    category:false
};

const { Types, Creators } = createActions({
    setLoading: ["isLoading"],
    setCategoriesErrorMessage: ["categoriesErrorMessage"],
    setCategoriesInfoMessage: ["categoriesInfoMessage"],
    getCategories: null,
    setCategories:["categories"],
    getCategory: ["id"],
    setCategory: ["category"]
}, { prefix: 'CATEGORIES/' });

export const CategoriesActionTypes = Types;
export const CategoriesActions = Creators;

export const categoriesReducer = createReducer(initialState, {
    [CategoriesActionTypes.SET_LOADING]: produce((draft, { isLoading }) => ({ ...draft, isLoading })),
    [CategoriesActionTypes.SET_CATEGORIES_ERROR_MESSAGE]: produce((draft, { categoriesErrorMessage }) => ({ ...draft, categoriesErrorMessage })),
    [CategoriesActionTypes.SET_CATEGORIES_INFO_MESSAGE]: produce((draft, { categoriesInfoMessage }) => ({ ...draft, categoriesInfoMessage })),
    [CategoriesActionTypes.SET_CATEGORIES]: produce((draft, { categories }) => ({ ...draft, categories })),
    [CategoriesActionTypes.SET_CATEGORY]: produce((draft,{category}) =>({...draft, category}))
});

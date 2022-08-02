import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

import { InputTextarea } from 'primereact/inputtextarea';
import TopBar from '../../components/topbar';
import notify from "../../util/notify";

import { CategoriesActions } from '../../store/categories/reducer';

import constraints from "../../errorHandler/product/constraints";
import validator from '../../util/validator';
import { ProductsActions } from '../../store/products/reducer';
const AddProduct = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {categories, categoriesErrorMessage} = useSelector((state) => state.categories);
    const {infoMessage, errorMessage} = useSelector((state) => state.products);
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setavatar] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [developerEmail, setDeveloperEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [avatarError, setAvatarError] = useState('');
    const [priceError, setPriceError] = useState('');

    
    useEffect(() =>{
        if(categories === false)
            dispatch(CategoriesActions.getCategories());
    },[categories]);

    useEffect(() => {
        if (categoriesErrorMessage) {
            notify.error(categoriesErrorMessage);
            dispatch(CategoriesActions.setCategoriesErrorMessage(""));
            dispatch(CategoriesActions.getCategories());
        }
    }, [ categoriesErrorMessage]);

    useEffect(() => {
        if (infoMessage) {
            notify.info(infoMessage);
            dispatch(ProductsActions.setInfoMessage(""));
            navigate(`/`);  
        }
        if (errorMessage) {
            notify.error(errorMessage);
            dispatch(ProductsActions.setErrorMessage(""));
        }
    }, [infoMessage, errorMessage]);

    const onSaveClick = () => {
        const errors = [];

        let error = validator(constraints)("name", name);
        (error == null || errors.push(error)) && setNameError(error); 
        error = validator(constraints)("description", description);
        (error == null || errors.push(error)) && setDescriptionError(error); 
        error = validator(constraints)("avatar", avatar);
        (error == null || errors.push(error)) && setAvatarError(error); 
        error = validator(constraints)("category", category);
        (error == null || errors.push(error)) && setCategoryError(error); 
        error = validator(constraints)("price", price);
        (error == null || errors.push(error)) && setPriceError(error); 
        if (errors.length === 0)
            dispatch(ProductsActions.createProduct(avatar, category, description, developerEmail, name, price));
        
        
    };

    return(
        <div >
            <TopBar/>
            <div className='flex flex-column mt-8 justify-content-center align-items-center'>
                <div className='flex flex-column w-4 pr-6 pl-6 pb-6 shadow-2'>
                    
                    <h2 className='flex justify-content-center align-items-center'>Add New Product</h2>
                     <InputText 
                         value = {name} 
                         placeholder="Name"
                         onChange={(e) => {setName(e.target.value); setNameError('')}} 
                     />
                     {nameError &&
                     <div className="flex justify-content-end">
                         <small id="name-help" className="p-error p-d-block">{nameError}</small>
                     </div>
                    }

                     <InputTextarea rows={5} cols={15}
                         value = {description} 
                         autoResize
                         placeholder='Description'
                         onChange={(e) => {setDescription(e.target.value); setDescriptionError('')}} 
                         className="mt-3"
                     />
                     {descriptionError &&
                     <div className="flex justify-content-end">
                         <small id="name-help" className="p-error p-d-block">{descriptionError}</small>
                     </div>
                    }

                    <InputText 
                        value = {avatar} 
                        placeholder="Image URL"
                        onChange={(e) => {setavatar(e.target.value); setAvatarError('')}} 
                        className="mt-3"
                    />
                    {avatarError &&
                    <div className="flex justify-content-end">
                        <small id="name-help" className="p-error p-d-block">{avatarError}</small>
                    </div>
                    }
                    <Dropdown
                        value = {category} 
                        options={(categories) ?
                            Object.keys(categories.categories).map((id) => {
                            return { label: categories.categories[id].name, value: categories.categories[id].name };
                        }):null} 
                        onChange={(e) => {setCategory(e.target.value); setCategoryError('');}} 
                        placeholder='Choose Product Category'
                        className="mt-3"
                    /> 
                        
                        {categoryError && (
                            <div className="flex justify-content-end">
                                <small id="name-help" className="p-error p-d-block"> {categoryError}</small>
                            </div>
                        )}

                        <InputText 
                            value = {price} 
                            placeholder="Price"
                            onChange={(e) => {setPrice(e.target.value); setPriceError('')}} 
                            className="mt-3"
                        />
                        {priceError &&
                        <div className="flex justify-content-end">
                            <small id="name-help" className="p-error p-d-block">{priceError}</small>
                        </div>
                        }
                        <InputText 
                        value = {developerEmail} 
                        onChange={(e) => setDeveloperEmail(e.target.value)} 
                        className="mt-3"
                    />
                        
                    <Button  label="Submit" onClick={onSaveClick} className="p-button-outlined p-button-success mt-3" />
                </div>
            </div>  
            
            
        </div>
    );
}
export default AddProduct;
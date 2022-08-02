import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import TopBar from '../../components/topbar';
import notify from "../../util/notify";

import { ProductsActions } from '../../store/products/reducer';
import { CategoriesActions } from '../../store/categories/reducer';

const Products = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {products,filteredProducts, errorMessage} = useSelector((state) => state.products);
    const {categories, categoriesErrorMessage} = useSelector((state) => state.categories);
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [productList, setProductList] = useState('');
 

    useEffect(() =>{
        if(products === false)
            dispatch(ProductsActions.getProducts())
        setProductList(products.products);
        
    },[products]);

    useEffect(() =>{
        if(categories === false)
            dispatch(CategoriesActions.getCategories());
    },[categories]);

    useEffect(() => {
        if (errorMessage) {
            notify.error(errorMessage);
            dispatch(ProductsActions.setErrorMessage(""));
            dispatch(ProductsActions.getProducts());
            setProductList(products.products);
        }
    }, [ errorMessage]);

    useEffect(() => {
        if (categoriesErrorMessage) {
            notify.error(categoriesErrorMessage);
            dispatch(CategoriesActions.setCategoriesErrorMessage(""));
            dispatch(CategoriesActions.getCategories());
        }
    }, [ categoriesErrorMessage]);

    useEffect(() =>{
        if(selectedCategory !== false){
            setProductList( products.products.filter(product => {
                return product.category === selectedCategory;
            }))
        }
    },[selectedCategory]);

    const onDetailClicked = (id) => {   
       navigate(`product-detail/${id}`);  
    };

    const onAddProductClicked = (id) => {   
        navigate(`add-new-product`);  
     };
    return(
        <div>
            <TopBar/>
            <div className="card mt-8 text-center">
                <div className="flex justify-content-between  align-items-center text-center flex-wrap card-container blue-container mx-8 w-10 ">
                 
                    <span className="p-input-icon-left ml-3">
                        <i className="pi pi-search" />
                        <InputText 
                            value={searchValue} 
                            onChange={(e) => setSearchValue(e.target.value)} 
                            className="w-18rem"
                            placeholder="Apple Watch, Samsung S21,.." />
                    </span>
                    <div className='flex'>
                        
                        <Button label="Add Product" className="p-button-outlined" onClick={onAddProductClicked}/>
                        <Dropdown 
                            value={selectedCategory} 
                            options={(categories) ?
                                Object.keys(categories.categories).map((id) => {
                                return { label: categories.categories[id].name, value: categories.categories[id].name };
                            }):null} 
                            className="mb-1 text-left ml-3 -mr-3"
                            onChange={(e) => setSelectedCategory(e.value)} 
                            placeholder="Categories"/>
                    </div>
                    
 
                </div>
                <div className="flex justify-content-start align-items-center text-center flex-wrap card-container blue-container mx-8">
                
                    {(productList) ?
                        Object.keys(productList).map((id) => {
                            return <div className="product-item m-3 " key={id}>
                                <div className="product-item-content border-solid border-0 border-1 shadow-2 p-4 w-18rem h-25rem">
                                    <div className="mb-3">
                                        <img src={ productList[id]?.avatar} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={"product.name"} height={100} width={100}/>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-overflow-ellipsis white-space-nowrap overflow-hidden">{productList[id]?.name}</h4>
                                        <p className="mt-0 mb-3">${productList[id]?.price}</p>
                                        <p className="mt-0 mb-3">{productList[id]?.category}</p>
                                        <p className="mt-0 mb-3 text-overflow-ellipsis white-space-nowrap overflow-hidden">{productList[id]?.description}</p>
                                        <p className="mt-0 mb-3">
                                        {productList[id]?.developerEmail ? (
                                            productList[id]?.developerEmail   
                                
                                            ) : (
                                            <div><br/></div>
                                        )}
                                        </p>
                                        <div className="car-buttons mt-5">
                                            <Button icon="pi pi-search" 
                                                    className="p-button p-button-rounded mr-2" 
                                                    onClick={(e)=>onDetailClicked(productList[id]?._id)}/>
                                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                                            <Button icon="pi pi-trash" className="p-button-help p-button-rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }) :
                    <div>No product avaible</div>
                    } 
                    
                    
                    
                </div>
            </div>
        </div>
    );
}
export default Products;
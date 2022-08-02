import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import TopBar from '../../components/topbar';
import notify from "../../util/notify";
import { ProductsActions } from '../../store/products/reducer';
const ProductDetail = () => {

    const params = useParams();
    const dispatch = useDispatch();


    const {productDetail, errorMessage} = useSelector((state) => state.products);

    useEffect(() =>{
        dispatch(ProductsActions.getProductDetail(params.id));
    },[params.id]);

    useEffect(() => {
        if (errorMessage) {
            notify.error(errorMessage);
            dispatch(ProductsActions.setErrorMessage(""));
            dispatch(ProductsActions.getProductDetail(params.id));  
        }
    }, [errorMessage]);

    return(
        <div className="card">
            <TopBar/>
            <div className="flex flex-column justify-content-center flex-wrap card-container w-7 p-3 mt-8 ml-auto mr-auto shadow-2 "> 
                <div className='flex flex-row  justify-content-start flex-wrap  '>
                   <div className=" flex justify-content-start align-self-center">  
                        <Image src={productDetail.product?.avatar} alt="Image" width="300" preview className='mr-5'/>
                    </div>
                    <div className="flex flex-column align-content-between w-5 "> 
                        <label className='text-4xl font-bold text mb-4 '>{productDetail.product.name}</label>
                        <label className='text-3xl mt-auto'>${productDetail.product.price}</label>
                    </div>
                    <Divider/>
                </div>
                <div className='flex flex-column'>
                    <h2>Description</h2>
                    <p className="surface-overlay m-0">{productDetail.product.description}</p>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;
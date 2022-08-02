import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/addProduct";
import ProductDetail from "./pages/productDetail";
import Products from "./pages/products";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Products />} />   
                <Route path="product-detail/:id" element={<ProductDetail />} />     
                <Route path="add-new-product" element={<AddProduct />} />               
              
            </Routes>
        </BrowserRouter>
    );
}


export default App;
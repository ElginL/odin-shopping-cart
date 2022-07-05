import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Products from '../pages/Products';

const RouteSwitch = () => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <App 
                            cartProducts={cartProducts} 
                            setCartProducts={setCartProducts} 
                        />
                    } 
                />
                <Route 
                    path="/products" 
                    element={
                    <Products 
                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}
                    />} 
                />
            </Routes>
        </BrowserRouter>
  );
};

export default RouteSwitch;
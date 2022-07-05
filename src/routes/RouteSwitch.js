import React, { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Products from '../pages/Products';

const RouteSwitch = () => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <HashRouter>
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
        </HashRouter>
  );
};

export default RouteSwitch;
import React, { useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import Product from '../components/Product';
import styles from '../styles/Products.module.css';
import allProducts from '../items';

const Products = ({ cartProducts, setCartProducts }) => {
    const [filter, setFilter] = useState("All Products");

    const allFilters = [
        "All Products", 
        "Case", 
        "Mother Board", 
        "Processor", 
        "RAM", 
        "Hard Drive", 
        "Power Supply Unit"
    ];

    const filteredProducts = allProducts.filter(product => {
        if (filter === "All Products") {
            return true;
        }

        return product.class === filter;
    });

    return (
        <div className={styles["page-container"]}>
            <NavigationBar 
                cartProducts={cartProducts}
                setCartProducts={setCartProducts} 
            />
            <div className={styles["background"]} />
            <div className={styles["main-container"]}>
                <div className={styles["items-container"]}>
                    {
                        filteredProducts.length === 0
                            ? (
                                <div className={styles["no-items-text"]}>
                                    There are no items in {filter} yet
                                </div>
                            )
                            : filteredProducts.map(product => (
                                <Product
                                    product={product}
                                    key={product.title}
                                    setCartProducts={setCartProducts} 
                                />
                            ))
                    }
                </div>
                <div className={styles["filter-container"]}>
                    <h2 className={styles["filter-text"]}>
                        Filter / <span>{filter}</span>
                    </h2>
                    <ul className={styles["filter-btns-container"]}>
                        {
                            allFilters.map(filter => {
                                return (
                                    <li className={styles["filter-btn"]} key={filter}>
                                        <button onClick={() => setFilter(filter)}>
                                            {filter}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products;
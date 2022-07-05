import React, { useRef } from 'react';
import styles from '../styles/NavigationBar.module.css';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
import ShoppingCart from '../assets/shopping-cart.svg';

const NavigationBar = ({ cartProducts, setCartProducts }) => {
    const modalRef = useRef(null);
    const backgroundRef = useRef(null);

    return (
        <div>
            <nav className={styles["nav-bar"]}>
                <h1 className={styles["nav-brand"]}>
                    Techware Shop
                </h1>
                <ul className={styles["nav-links"]}>
                    <li>
                        <Link to="/" className={styles["link"]}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className={styles["link"]}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <button 
                            className={styles["cart-container"]} 
                            onClick={() => {
                                modalRef.current.style.transform = "translate(-25vw)";
                                backgroundRef.current.style.display = "block";
                                document.body.style.overflow = 'hidden';
                            }}>
                            <img
                                src={ShoppingCart}
                                alt="Shopping Cart"
                                className={styles["shopping-cart"]}
                            />
                            {
                                cartProducts.length !== 0
                                    ? <div className={styles["cart-item-count"]}>
                                        {cartProducts.length}
                                      </div>
                                    : null
                            }
                        </button>
                    </li>
                </ul>
            </nav>
            <CartModal
                modalRef={modalRef}
                backgroundRef={backgroundRef}
                onClose={() => { 
                    backgroundRef.current.style.display="none";
                    modalRef.current.style.transform = "translate(0)";
                    document.body.style.overflow = 'unset'
                }} 
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                />
            : null
        </div>
    )
};

export default NavigationBar;
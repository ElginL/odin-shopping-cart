import React, { useRef } from 'react';
import styles from '../styles/NavigationBar.module.css';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
import ShoppingCart from '../assets/shopping-cart.svg';
import NavModal from './NavModal';

const NavigationBar = ({ cartProducts, setCartProducts }) => {
    const cartModalRef = useRef(null);
    const navModalRef = useRef(null);
    const cartBGRef = useRef(null);
    const navBGRef = useRef(null);

    const openNavSide = () => {
        navModalRef.current.style.transform = "translate(70vw)"
        navBGRef.current.style.display = "block";
        document.body.style.overflow = 'hidden';
    }

    const openCart = () => {
        const translateMag = window.innerWidth > 1440
        ? 25
        : window.innerWidth > 900
        ? 50
        : 70
        cartModalRef.current.style.transform = `translate(-${translateMag}vw)`;
        cartBGRef.current.style.display = "block";
        document.body.style.overflow = 'hidden';
    }

    return (
        <div>
            <nav className={styles["nav-bar"]}>
                <h1 className={styles["nav-brand"]}>
                    Techware Shop
                </h1>
                <div 
                    className={styles["hamburger"]}
                    onClick={openNavSide}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
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
                            onClick={openCart}>
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
                modalRef={cartModalRef}
                backgroundRef={cartBGRef}
                onClose={() => {
                    cartBGRef.current.style.display="none";
                    cartModalRef.current.style.transform = "translate(0)";
                    document.body.style.overflow = 'unset';
                }} 
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
            />
            <NavModal
                modalRef={navModalRef}
                backgroundRef={navBGRef}
                onClose={() => {
                    navBGRef.current.style.display="none";
                    navModalRef.current.style.transform = "translate(0)";
                    document.body.style.overflow = 'unset';
                }}
            />
        </div>
    )
};

export default NavigationBar;
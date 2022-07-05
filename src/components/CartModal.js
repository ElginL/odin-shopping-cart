import styles from '../styles/CartModal.module.css';
import CartProduct from './CartProduct';

const CartModal = ({
    modalRef,
    backgroundRef,
    onClose,
    cartProducts,
    setCartProducts
}) => {
    const calculateTotal = () => {
        let total = 0;
        for (const product of cartProducts) {
            total += product.price * product.quantity;
        }

        return total;
    }

    return (
        <div>
            <div
                className={styles["background"]} 
                onClick={onClose} 
                ref={backgroundRef}
            />
            <div className={styles["shopping-cart"]} ref={modalRef}>
                <h1>Shopping Cart</h1>
                {
                    cartProducts.length !== 0
                        ? (
                            <div className={styles["content-container"]}>
                                {
                                    cartProducts.map(product => (
                                        <CartProduct
                                            key={product.title} 
                                            product={product}
                                            setCartProducts={setCartProducts}
                                        />
                                    ))
                                }
                                <h1 className={styles["total-amt"]}>
                                    Total: ${calculateTotal().toFixed(2)}
                                </h1>
                                <button 
                                    className={styles["checkout-btn"]} 
                                    onClick={() => {
                                        setCartProducts([]);
                                        onClose();
                                    }}>
                                    Checkout
                                </button>
                            </div>
                        ) 
                        : (
                            <p className={styles["no-items"]}>
                                There are no items
                            </p>
                        ) 
                } 
            </div>
        </div>
    );
};

export default CartModal
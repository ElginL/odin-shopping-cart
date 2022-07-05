import styles from '../styles/CartProduct.module.css';

const CartProduct = ({ product, setCartProducts }) => {
    const minusHandler = () => {
        setCartProducts(products => {
            const index = products.findIndex(pdt => pdt.title === product.title);
            if (products[index].quantity - 1 === 0) {
                if (products.length === 1) {
                    return [];
                }

                return [
                    ...products.slice(0, index),
                    ...products.slice(index + 1)
                ];
            }

            return products.map(pdt => {
                if (pdt.title === product.title) {
                    return {
                        ...pdt,
                        quantity: pdt.quantity - 1
                    }
                }

                return pdt;
            })
        })
    }

    const addHandler = () => {
        setCartProducts(products => (
            products.map(pdt => {
                if (pdt.title === product.title) {
                    return {
                        ...pdt,
                        quantity: pdt.quantity + 1
                    }
                }

                return pdt;
            })
        ))
    }

    return (
        <div className={styles["item-container"]}>
            <img 
                src={product.mouseOut} 
                alt={product.title}
                className={styles["cart-img"]}
            />
            <div className={styles["details-container"]}>
                <h2>
                    {product.title}
                </h2>
                <div className={styles["btns-container"]}>
                    <button onClick={minusHandler}>
                        -
                    </button>
                    <h3>
                        {product.quantity}
                    </h3>
                    <button onClick={addHandler}>
                        +
                    </button>
                </div>
                <p>
                    ${(product.price * product.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default CartProduct;
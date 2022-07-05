import styles from '../styles/Product.module.css';
import HorizontalLine from './HorizontalLine';

const Product = ({ product, setCartProducts }) => {
    return (
        <div className={styles["product-container"]}>
            <img 
                src={product.mouseOut}
                onMouseOver={e => e.currentTarget.src = product.mouseOver}
                onMouseOut={e => e.currentTarget.src = product.mouseOut}
                alt={product.title}
                className={styles["product-img"]}
            />
            <HorizontalLine />
            <h3 className={styles["product-text"]}>
                {product.title}
            </h3>
            <p className={styles["product-price"]}>
                ${product.price}
            </p>
            <button 
                className={styles["add-btn"]}
                onClick={() => setCartProducts(curProducts => {
                    const index = curProducts.findIndex(pdt => pdt.title === product.title);

                    if (index === -1) {
                        return [
                            ...curProducts,
                            {
                                ...product,
                                quantity: 1
                            }
                        ];
                    }

                    return curProducts.map(pdt => {
                        if (pdt.title === product.title) {
                            return {
                                ...product,
                                quantity: pdt.quantity + 1
                            }
                        }

                        return pdt;
                    })
                })}>
                Add To Cart
            </button>
        </div>
    )
};

export default Product;
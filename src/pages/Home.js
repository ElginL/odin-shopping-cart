import styles from '../styles/Home.module.css';
import RadeonImg from '../assets/Radeon.jpg';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const Home = ({ cartProducts, setCartProducts }) => {
    return (
        <div className={styles["page-container"]}>
            <NavigationBar 
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
            />
            <img
                src={RadeonImg} 
                className={styles["background-img"]} 
                alt="background" 
            />
            <div className={styles["description-container"]}>
                <h1 className={styles["description-heading"]}>
                    Radeon RX 6800 XT Gaming X Trio
                </h1>
                <p className={styles["description-text"]}>
                    Available for shipping now!
                </p>
                <Link to="/products" className={styles["shop-now-btn"]}>
                    Shop Now!
                </Link>
            </div>
        </div>
    );
};

export default Home;
import styles from '../styles/NavModal.module.css';
import { Link } from 'react-router-dom';

const NavModal = ({
    modalRef, 
    backgroundRef, 
    onClose 
}) => {
    return (
        <div>
            <div
                className={styles["background"]}
                onClick={onClose}
                ref={backgroundRef}
            />
            <div className={styles["nav-container"]} ref={modalRef}>
                <Link to="/" className={styles["link"]}>
                    Home
                </Link>
                <Link 
                    to="/products" 
                    className={styles["link"]}
                    onClick={onClose}
                >
                    Products
                </Link>
            </div>
        </div>
    );
};

export default NavModal;
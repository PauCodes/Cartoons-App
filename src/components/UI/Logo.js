import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Link to='/'><div className={styles.logo}></div></Link>
    );
};

export default Logo;
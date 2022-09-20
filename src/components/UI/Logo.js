import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Link to='/'><div className={styles.logo}><h1 className='sr-only'>Cartoonify</h1></div></Link>
    );
};

export default Logo;
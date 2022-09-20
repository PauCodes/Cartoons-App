import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Logo from '../UI/Logo';
import styles from './Heather.module.css';
import Main from './Main';

const Header = ({data}) => {

    return ( 
        <>
            <div className={styles.wrapper}>
                <header>
                    <Logo />
                    <Button className={styles.favCartoons}><h2><Link to='/favoritecartoons'>Top 10</Link></h2></Button>
                    <Button className={styles.editCartoon}><h2><Link to='/newcartoon'>Edit</Link></h2></Button>
                </header>
                <Main data={data}/>
            </div>
        </>
    );
};

export default Header; 
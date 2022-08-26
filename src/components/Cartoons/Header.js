import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Logo from '../UI/Logo';
import styles from './Heather.module.css';

const Header = ({data}) => {

    const cartoonsList = () => {
        return data.map((cartoon) => (
            <Card className={styles.cartoonImgContainer}>
                <li key={cartoon.id}>
                    <Link  to={`/details/${cartoon.id}`}> <img className={styles.cartoonImg} src={cartoon.image} alt={`Avatar of ${cartoon.name}`}/></Link>
                    <div className={styles.middleText}>
                        <div className={styles.cartoonName}>{cartoon.name}</div>
                    </div>
                </li>
            </Card>
        ));
    };


    return ( 
        <header>
            <div className={styles.wrapper}>
                <Logo />
                <Button className={styles.favCartoons}><h2 className={styles.cartoonTitle}><Link to='/favoritecartoons'>Top 10</Link></h2></Button>
                <Button className={styles.editCartoon}><Link to='/newcartoon'>Edit</Link></Button>
                <div>
                    <div className={styles.listContainer}><ul className={styles.cartoonList}>{cartoonsList()}</ul></div>
                </div>
             </div>
        </header>
    );
};

export default Header;
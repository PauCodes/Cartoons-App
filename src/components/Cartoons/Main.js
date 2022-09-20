import styles from './Main.module.css';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';

const Main = ({data}) => {

    const cartoonsList = () => {
        return data.map((cartoon) => (
            <Card className={styles.cartoonImgContainer} key={cartoon.id}>
                <li>
                    <Link  to={`/details/${cartoon.id}`}> <img className={styles.cartoonImg} src={cartoon.image} alt={`Avatar of ${cartoon.name}`}/></Link>
                    <div className={styles.middleText}>
                        <div className={styles.cartoonName}>{cartoon.name}</div>
                    </div>
                </li>
            </Card>
        ));
    };
    return (
        <div className={styles.listContainer}>
            <ul className={styles.cartoonList}>{cartoonsList()}</ul>
        </div>
    );
};

export default Main; 

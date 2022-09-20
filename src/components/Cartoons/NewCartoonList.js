import styles from './NewCartoonList.module.css';
import Card from "../UI/Card";
import CartoonItem from "./CartoonItem";


const NewCartoonList = ({data, removeCartoon, handleUpdate}) => {

    return (
        <ul className={styles.newCartoonList}>
        {
            data.map((cartoon, index) => (
                <Card key={index} className={styles.newCartoonItemContainer }>
                    <CartoonItem cartoon={cartoon} description={cartoon.description} index={index} removeCartoon={removeCartoon} handleUpdate={handleUpdate} />
                </Card>
            ))
        }
    </ul>

    );
};

export default NewCartoonList;
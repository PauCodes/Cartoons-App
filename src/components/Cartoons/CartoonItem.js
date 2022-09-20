import styles from './CartoonItem.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import UpdateModal from '../UI/UpdateModal';


const CartoonItem = ({cartoon, description, removeCartoon, index, handleUpdate}) => {

    const [ editCartoon, setEditCartoon ] = useState(false);

    const editHandle = () => {
        setEditCartoon(true);  
     };

    return (
        <li className={styles.newCartoonItem} key={index}>
                        {
                            editCartoon ? 
                            <UpdateModal cartoonId={cartoon.id} cartoonName={cartoon.name} description={description} handleUpdate={handleUpdate} setEditCartoon={setEditCartoon}/>
                            : (
                            <>
                                <h4 id={cartoon.id}>{cartoon.name}</h4> 
                                <Button type='click' onClick={() => removeCartoon(cartoon)}>Delete</Button>
                                <Button type='click' onClick={editHandle}>Edit</Button>
                            </>
                            ) 
                        }                                    
                    </li>
    );
};

export default CartoonItem;
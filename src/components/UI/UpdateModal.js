import styles from './UpdateModal.module.css';
import Card from './Card';
import Button from './Button';
import { useState } from 'react';

const UpdateModal = ({cartoonId, cartoonName, description, handleUpdate, setEditCartoon}) => {

    const [ newValue, setNewValue ] = useState(cartoonName);
    const [ newDescription, setNewDescription ] = useState(description);

    const editHandleChange = (e) => {
        const value = e.target.value;
        console.log(value);  
        setNewValue(value)  
       
    };

    const descriptionHandleChange = (e) => {
        const value = e.target.value;
        console.log(value)
        setNewDescription(value);
    }

    const handleUpdateValue = (e) => {
        e.preventDefault();
        handleUpdate(cartoonId, newValue, newDescription);
        setEditCartoon(false)
   };
   
    return (
        <div>
        <div className={styles.backdrop}>
        <Card className={styles.modal}>
            <form className={styles.updateCartoonForm} onSubmit={handleUpdateValue}>
                <div className={styles.header}>
                    <h3>Cartoon details</h3>
                    <Button className={styles.closeBtn}>X</Button>
                </div>
                <div className={styles.formContainer}>
                    <label>Cartoon Name:</label>
                    <input className={styles.inputName} type="text" value={newValue} onChange={editHandleChange}/> 
                    <label>Description</label>
                    <textarea className={styles.inputDescription} cols="20" rows="6"  name='description' value={newDescription} onChange={descriptionHandleChange}/>            
                    <Button className={styles.newCartoonBtn} type='submit'>Update</Button> 
                    </div>
            </form>
        </Card>
        </div>
    </div>
    )
};

export default UpdateModal;


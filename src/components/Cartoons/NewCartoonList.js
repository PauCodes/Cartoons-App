import { useState } from "react";
import styles from './NewCartoonList.module.css';
import Button from "../UI/Button";
import Card from "../UI/Card";


const NewCartoonList = ({data, setCartoons}) => {

    const [ updateID, setUpdateID ] = useState(0);
    const [ newValue, setNewValue ] = useState('');


    const removeCartoon = (cartoon) => {
        const filteredCartoon = data.filter(item => cartoon !== item);
        setCartoons(filteredCartoon);      
    };

    const editHandle = (id) => {
        setUpdateID(id);      
     };

    const editHandleChange = (e) => {
        const value = e.target.value;
        console.log(value);  
        setNewValue(value)  
        handleUpdate(value)   
    }

    const handleUpdateValue = (e) => {
        e.preventDefault();
       console.log('UPDATED!');
       // handleUpdate(data.id, newValue);
   }

   const handleUpdate = (id, value) => { 
    const dataCopy = [...data];
    const cartoon = dataCopy.find(cartoon => cartoon.id === id);
    console.log(cartoon);  
    cartoon.name = value;
    setCartoons(dataCopy);
};

    return (
        <ul className={styles.newCartoonList}>
        {
            data.map((cartoon, index) => (
                <Card key={index} className={styles.newCartoonItemContainer }>
                    <li className={styles.newCartoonItem} key={index}>
                        {
                            (updateID === cartoon.id) ? 
                            <form className='newCartoonForm' onSubmit={handleUpdateValue}>
                                <label className='sr-only'>Name</label>
                                <input type="text"  defaultValue={cartoon.name} onChange={editHandleChange}/> 
                                <Button className='newCartoonBtn' type='submit'>Update</Button> 
                            </form> 
                    
                            : (
                            <>
                                <h4 id={cartoon.id}>{cartoon.name}</h4> 
                                <Button type='click' onClick={() => removeCartoon(cartoon)}>Delete</Button>
                                <Button type='click' onClick={() => editHandle(cartoon.id)}>Edit</Button>
                            </>
                            ) 
                        }                                    
                    </li>
                </Card>
            ))
        }
    </ul>

    );
};

export default NewCartoonList;
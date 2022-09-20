import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Logo from "../UI/Logo";
import styles from './NewCartoon.module.css';
import NewCartoonList from "./NewCartoonList";
import { v4 as uuidv4 } from 'uuid';

const NewCartoon = ({data, setCartoons, cartoonAdded, removeCartoon, handleUpdate}) => {

    const [ newCartoon, setNewCartoon ] = useState({id: uuidv4(), name: '', description: ''});
    const [ error, setError ] = useState();

    // const newCartoonInput = (cartoon) => {
    //     const findCartoon = data.find(item => cartoon === item.name);
    //     console.log(findCartoon);
        
    // }
    // newCartoonInput() //ELIMINAR!!!
    
 
    const handleChange = (e) => {
        // const newCartoon = {
        //     [e.target.name]: e.target.value
        // };
        // setInputs({...inputs, ...newCartoon});

        //https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_multiple
        setNewCartoon({...newCartoon, [e.target.name]: e.target.value});        
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if(newCartoon.name.trim().length === 0 || newCartoon.description.trim().length === 0 ) {
            setError({
                title: 'Invalid inputs',
                message: 'Please enter a valid name and description'
            });
            return;
        };
        cartoonAdded(newCartoon);
        setNewCartoon({name: '', description: ''});
    };


    const errorHandler = () => {
        setError(null);
    };

    return (
        <section className={styles.newCartoon}>
            {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler}/>}
            <div className={styles.wrapper}>
                <Logo />
                    <Card className={styles.formContainer}> 
                        <h3>Add new cartoon</h3>
                        <form className={styles.newCartoonForm} onSubmit={handleSubmit}>              
                            <label htmlFor='name' className='sr-only'>Name</label>
                            <input className={styles.inputName} type='text' id='name' name='name' placeholder='Name' value={newCartoon.name} onChange={handleChange}></input>
                            <label htmlFor='description' className='sr-only'>Description</label>
                            <textarea className={styles.inputDescription} cols="20" rows="6" id='description' name='description' value={newCartoon.description} placeholder='Description' onChange={handleChange}/>
                            <Button className={styles.newCartoonBtn} type='click'>Add</Button>  
                        </form>
                    </Card>
                <div className={styles.newCartoonListContainer}>
                    <NewCartoonList data={data} setCartoons={setCartoons} removeCartoon={removeCartoon} handleUpdate={handleUpdate}/>
                </div>
                <Link to='/'><i className='fa-solid fa-arrow-left'></i></Link>
            </div>
        </section>
    );
};


export default NewCartoon;
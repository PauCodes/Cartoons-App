import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Logo from "../UI/Logo";
import styles from './NewCartoon.module.css';
import NewCartoonList from "./NewCartoonList";

const NewCartoon = ({data, setCartoons}) => {
    const [ inputs, setInputs ] = useState({name: '', description: ''});
    const [ error, setError ] = useState();


    const cartoonAdded = (cartoon) => {
        const findCartoon = data.find(item => item === cartoon);
        console.log(findCartoon);
        if(findCartoon !== cartoon.name) {
            setCartoons([...data, cartoon]);
        }
    }
 
    const handleChange = (e) => {
        // const newCartoon = {
        //     [e.target.name]: e.target.value
        // };
        // setInputs({...inputs, ...newCartoon});

        //https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_multiple
        setInputs({...inputs, [e.target.name]: e.target.value});
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.name.trim().length === 0 || inputs.description.trim().length === 0 ) {
            setError({
                title: 'invalid inputs',
                message: 'Please enter a valid name and description'
            });
            return;
        };
        cartoonAdded(inputs);
        setInputs({name: '', description: ''});
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
                            <label className='sr-only'>Name</label>
                            <input className={styles.inputName} type='text' name='name' placeholder='Name' value={inputs?.name || ''} onChange={handleChange}></input>
                            <label className='sr-only' >Description</label>
                            <textarea className={styles.inputDescription} cols="20" rows="6" name='description' value={inputs?.description || ''} placeholder='Description' onChange={handleChange}/>
                            <Button className={styles.newCartoonBtn} type='click'>Add</Button>  
                        </form>
                    </Card>
                <div>
                    <NewCartoonList data={data} setCartoons={setCartoons}/>
                </div>
                <Link to='/'><i className='fa-solid fa-arrow-left'></i></Link>
            </div>
        </section>
    );
};

export default NewCartoon;
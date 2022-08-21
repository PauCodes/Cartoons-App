import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Logo from "../UI/Logo";
import styles from './FavoriteCartoon.module.css';

const FavoriteCartoons = ({data}) => {

    const [ cartoonSelected, setCartoonSelected ] = useState([]);
    const [ cartoonsSubmitted, setCartoonsSubmitted ] = useState(null);


    const handleChange = (e) => {       
        if(e.target.checked) {
             let myFav = data.find(cartoon => (
            // console.log(cartoon)
            cartoon.name === e.target.value
        ));
        console.log(myFav);
        setCartoonSelected([...cartoonSelected, myFav]);
        } else {
               const filteredCartoon =  cartoonSelected.filter(item => item.name !== e.target.value);
               setCartoonSelected(filteredCartoon);       
        };    
    };

    const handleSubmit = (e) => {
        e.preventDefault();  
        setCartoonsSubmitted(cartoonSelected);
        setCartoonSelected([]);
        const inputCheckboxes =  document.querySelectorAll('input[type=checkbox]');  
        inputCheckboxes.forEach( el => el.checked = false );
    };
    
    return (
        <section className={styles.favCartoon}>
            <div className={styles.wrapper}>
            <Logo />
            <Card className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                {
                    data.map((cartoon, index) => {
                     return (
                        <div key={index}>
                            <label htmlFor={cartoon.id}>{cartoon.name}</label>
                            <input 
                                id={cartoon.id} 
                                value={cartoon.name} 
                                type='checkbox' 
                                name='cartoonName' 
                                onChange={handleChange}
                            />
                        </div>
                    )
                })
                }
                <Button type='submit'>Submit</Button>
                </form>
           {cartoonsSubmitted && 
               <ul> 
                   { cartoonsSubmitted.map((cartoon, index) => (
                            <li key={index}>
                                <h2>{cartoon.name}</h2>
                                <p>{cartoon.description}</p>
                            </li>
                        ))
                    }

               </ul>                
           }
       
        <Link to='/'><i className='fa-solid fa-arrow-left'></i></Link>
        </Card>
        </div>
        </section>
    );
};

export default FavoriteCartoons;
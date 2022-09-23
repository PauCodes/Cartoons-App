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
                <h3 className={styles.top10Title}>Create your Top 10 list of Cartoons :</h3>
                <form onSubmit={handleSubmit}>
                {
                    data.map((cartoon, index) => {
                     return (
                        <div className={styles.itemContainer} key={index}>
                            <input 
                                id={cartoon.id} 
                                value={cartoon.name} 
                                type='checkbox' 
                                name='cartoonName' 
                                onChange={handleChange}
                            />
                             <label htmlFor={cartoon.id}>{cartoon.name}</label>
                        </div>
                    )
                })
                }
                <Button className={styles.favBtn} type='submit'>Submit</Button>
                </form>
           {cartoonsSubmitted && 
               <ul className={styles.cartoonListContainer}> 
                   { cartoonsSubmitted.map((cartoon, index) => (
                            <li key={index}>
                                <h4>{cartoon.name}</h4>
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
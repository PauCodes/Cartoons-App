import { Link, useParams } from "react-router-dom";
import Card from "../UI/Card";
import Logo from "../UI/Logo";
import styles from  './Details.module.css';


const Details = ({data}) => {
    const {cartoonId} = useParams();// returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>. => whatever you set up in useParams(ex: cartoonId), your params have to match with the <Route path='/path/:cartoonId'>
    // console.log(typeof(id));
    const cartoonDetails = data.find(cartoon => cartoon.id == cartoonId); // == string
    // console.log(cartoonDetails);
    const { name, description } = cartoonDetails; // destructuring: it makes possible to unpack values from arrays, or properties from objects, into distinct variables.
   
    

    return (
        <section className={styles.cartoonDetails}>
            <div className={styles.wrapper}>
                <Logo />
                <Card className={styles.detailsContainer}>
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to='/'><i className='fa-solid fa-arrow-left'></i></Link>
                </Card>
            </div>
        </section>
    ); 
};

export default Details;
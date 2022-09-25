import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Logo from '../UI/Logo';
import MoreInfoModal from '../UI/MoreInfoModal';
import styles from './Heather.module.css';
import Main from './Main';

const Header = ({data}) => {

    const [ moreInfo, setMoreInfo ] = useState(false);

    const onClickHandle = () => {
        if(!moreInfo) {
              setMoreInfo({
            title: 'Welcome to Cartoonify !',
            message: `In this App you can learn more about cartoons and make a list with your favourite ones. 
            You can also add new cartoons and delete those that you don't longer enjoy.`
        });
            return;
        };
        setMoreInfo(true);
    };

    const closeMoreInfoHandle = () => {
        setMoreInfo(false);
    };
    

    return ( 
        <>
            <div className={styles.wrapper}>
                <header>
                    <Logo />
                    <button  className={`${styles.moreInfoBtn} ${styles['sr-only']}`}>More +</button>
                    { moreInfo && <MoreInfoModal title={moreInfo.title} message={moreInfo.message} closeMoreInfoHandle={closeMoreInfoHandle}/>}
                    <div onClick={onClickHandle} className={styles.moreInfo}></div>
                    <Button className={styles.favCartoons}><h2><Link to='/favoritecartoons'>Top 10</Link></h2></Button>
                    <Button className={styles.editCartoon}><h2><Link to='/newcartoon'>Edit</Link></h2></Button>
                </header>
                <Main data={data}/>
            </div>
        </>
    );
};

export default Header; 
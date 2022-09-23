import Card from "./Card";
import Button from "./Button";
import styles from './MoreInfoModal.module.css'


const MoreInfoModal = ({title, message, closeMoreInfoHandle}) => {
    
    return (
        <>
            <div className={styles.backdrop} onClick={closeMoreInfoHandle}>
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h3>{title}</h3>
                    </header>
                    <div className={styles.content}>
                        <p>{message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={closeMoreInfoHandle}>Ok</Button>
                    </footer>
                </Card>
            </div>
        </>
    );
};

export default MoreInfoModal;
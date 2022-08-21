import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css'

const ErrorModal = ({errorHandler, title, message}) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={errorHandler}>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h3>{title}</h3>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={errorHandler}>Ok</Button>
                </footer>
            </Card>
            </div>
        </div>
    );
};

export default ErrorModal;
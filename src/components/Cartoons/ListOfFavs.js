import { useRef, useState } from 'react';
import Card from '../UI/Card';
import Logo from '../UI/Logo';
import styles from './ListOfFavs.module.css';

const ListOfFavs = ({data}) => {

  const [ cartoons, setCartoons ] = useState(data);

  const dragItem = useRef(); 
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;  
  };

  const drop = () => {
    const copyData = [...cartoons];
    const dragItemContent = copyData[dragItem.current];
    copyData.splice(dragItem.current, 1)
    copyData.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setCartoons(copyData);
    
  };

  const displayCartoons = cartoons.map((cartoon, index) => {
    return <div 
                key={index}
                className={styles.itemContainer}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) =>  dragEnter(e, index)}
                onDragEnd={drop}
                draggable
              >
                <h4 className={styles.cartoonTitle}>{cartoon.name}</h4>      
           </div>
           
  });


  return (
        <section className={styles.favCartoon}>
            <div className={styles.wrapper}>
                <Logo/>
                <Card className={styles.formContainer}>
                    <h3 className={styles.top10Title}>Create your Top 10 list of Cartoons :</h3>
                    <p className={styles.sectionExplanation}>*Drag and drop the the boxes to the desired position</p>
                    <div className={styles.cartoonsContainer}> 
                        <div className={styles.cartoonsList}>{displayCartoons}</div>   
                    </div>
                </Card>
            </div>
        </section>

  );
}

export default ListOfFavs;

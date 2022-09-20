import { Routes ,Route } from 'react-router-dom';
import Header from './components/Cartoons/Header';
import './App.css';
import Details from './components/Cartoons/Details';
import Data from './components/Cartoons/Data';
import { useState } from 'react';
import FavoriteCartoons from './components/Cartoons/FavoriteCartoons';
import NewCartoon from './components/Cartoons/NewCartoon';

function App() {

  //MAIN STATE
  const [ cartoons, setCartoons ] = useState(Data);

  //CRUD FUNCTIONS
    //NEW CARTOON: *ADD ID!!
    const cartoonAdded = (cartoon) => {
      const findCartoon = cartoons.find(item => item.name === cartoon);
      console.log(cartoon.name);
      if(findCartoon !== cartoon) {
          setCartoons([...cartoons, cartoon]);
      }else {
        alert(`${cartoon} already exist`)
      };
  };

    //DELETE CARTOON:
    const removeCartoon = (cartoon) => {
      const filteredCartoon = cartoons.filter(item => cartoon !== item);
      setCartoons(filteredCartoon);      
  };

    //UPDATE CARTOON
    const handleUpdate = (id, value, description) => { 
      const dataCopy = [...cartoons];
      const newCartoon = dataCopy.find(cartoon => cartoon.id === id);
      const newDescription = dataCopy.find(cartoon => cartoon.id === id);
      newCartoon.name = value;
      newDescription.description = description;
      setCartoons(dataCopy);
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header data={cartoons}/>}/>
        <Route path='/details/:cartoonId' element={<Details data={cartoons}/>}/>
        <Route path='/favoritecartoons/' element={<FavoriteCartoons data={cartoons}/>}/>
        <Route path='/newcartoon' element={<NewCartoon data={cartoons} cartoonAdded={cartoonAdded} removeCartoon={removeCartoon} handleUpdate={handleUpdate}/>} />
      </Routes>
    </div>
  );
}

export default App;
